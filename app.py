"""
Altveen Technologies Pvt Ltd - Website
Flask backend for software and digital marketing company website.
"""
import os
import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from pathlib import Path
from flask import Flask, render_template, request, redirect, url_for

from dotenv import load_dotenv
load_dotenv()

from data.blogs import BLOGS
from data.clients import INTERNATIONAL_CLIENTS, LOCAL_CLIENTS

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-production')

# SMTP config from .env
SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', '587'))
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', '')
SENDER_PASSWORD = os.environ.get('SENDER_PASSWORD', '')
RECEIVER_EMAIL = os.environ.get('RECEIVER_EMAIL', 'altveentechnologies@gmail.com')


def _send_email(subject, body_text):
    """Send email via SMTP. No-op if SMTP not configured."""
    if not SENDER_EMAIL or not SENDER_PASSWORD:
        return
    try:
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECEIVER_EMAIL
        msg['Subject'] = subject
        msg.attach(MIMEText(body_text, 'plain', 'utf-8'))
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(msg)
    except Exception:
        pass  # don't break the app if email fails

CONSULTATIONS_FILE = Path(__file__).parent / 'data' / 'consultations.json'
NEWSLETTERS_FILE = Path(__file__).parent / 'data' / 'newsletters.json'


def _load_consultations():
    if not CONSULTATIONS_FILE.exists():
        return []
    try:
        with open(CONSULTATIONS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return []


def _save_consultation(record):
    try:
        data = _load_consultations()
        data.append(record)
        CONSULTATIONS_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(CONSULTATIONS_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    except (IOError, OSError):
        pass  # on Vercel filesystem is read-only; email is still sent


def _load_newsletters():
    if not NEWSLETTERS_FILE.exists():
        return []
    try:
        with open(NEWSLETTERS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return []


def _save_newsletter(record):
    try:
        data = _load_newsletters()
        data.append(record)
        NEWSLETTERS_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(NEWSLETTERS_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    except (IOError, OSError):
        pass  # on Vercel filesystem is read-only; email is still sent


@app.route('/')
def index():
    consultation_success = request.args.get('consultation') == 'success'
    consultation_error = request.args.get('consultation') == 'error'
    return render_template(
        'index.html',
        blogs=BLOGS,
        consultation_success=consultation_success,
        consultation_error=consultation_error,
    )


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/services')
def services():
    consultation_success = request.args.get('consultation') == 'success'
    consultation_error = request.args.get('consultation') == 'error'
    return render_template(
        'services.html',
        consultation_success=consultation_success,
        consultation_error=consultation_error,
    )


@app.route('/clients')
def clients():
    consultation_success = request.args.get('consultation') == 'success'
    consultation_error = request.args.get('consultation') == 'error'
    return render_template(
        'clients.html',
        international_clients=INTERNATIONAL_CLIENTS,
        local_clients=LOCAL_CLIENTS,
        consultation_success=consultation_success,
        consultation_error=consultation_error,
    )


@app.route('/blogs')
def blogs():
    return render_template('blogs.html', blogs=BLOGS)


@app.route('/blogs/<slug>')
def blog_post(slug):
    post = next((b for b in BLOGS if b['slug'] == slug), None)
    if not post:
        return render_template('404.html'), 404
    newsletter_success = request.args.get('newsletter') == 'success'
    newsletter_error = request.args.get('newsletter') == 'error'
    return render_template(
        'blog_post.html',
        post=post,
        blogs=BLOGS,
        newsletter_success=newsletter_success,
        newsletter_error=newsletter_error,
    )


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = (request.form.get('name') or '').strip()
        email = (request.form.get('email') or '').strip()
        company = (request.form.get('company') or '').strip()
        message = (request.form.get('message') or '').strip()
        if name and email and message:
            body = f"Contact form - Altveen\n\nName: {name}\nEmail: {email}\nCompany: {company or '(not provided)'}\n\nMessage:\n{message}"
            _send_email("Contact form - Altveen", body)
        return redirect(url_for('contact', contact='success'))
    contact_success = request.args.get('contact') == 'success'
    return render_template('contact.html', contact_success=contact_success)


@app.route('/privacy')
def privacy():
    return render_template('privacy.html')


@app.route('/terms')
def terms():
    return render_template('terms.html')


@app.route('/refund')
def refund():
    return render_template('refund.html')


@app.route('/consultation', methods=['POST'])
def submit_consultation():
    next_path = (request.form.get('next') or '').strip()
    if not next_path.startswith('/') or next_path.startswith('//'):
        next_path = url_for('index')

    name = (request.form.get('name') or '').strip()
    email = (request.form.get('email') or '').strip()
    country_code = (request.form.get('country_code') or '+91').strip()
    phone = (request.form.get('phone') or '').strip()
    services = request.form.getlist('services')

    if not name or not email or not phone:
        sep = '&' if '?' in next_path else '?'
        return redirect(f"{next_path}{sep}consultation=error")

    if not services:
        sep = '&' if '?' in next_path else '?'
        return redirect(f"{next_path}{sep}consultation=error")

    full_phone = f"{country_code} {phone}".strip()

    record = {
        'name': name,
        'email': email,
        'phone': full_phone,
        'services': services,
        'submitted_at': datetime.utcnow().isoformat() + 'Z',
    }
    _save_consultation(record)
    body = f"New consultation request\n\nName: {name}\nEmail: {email}\nPhone: {full_phone}\nServices: {', '.join(services)}"
    _send_email("New consultation request - Altveen", body)

    sep = '&' if '?' in next_path else '?'
    return redirect(f"{next_path}{sep}consultation=success")


@app.route('/newsletter-subscribe', methods=['POST'])
def subscribe_newsletter():
    next_path = (request.form.get('next') or url_for('blogs')).strip()
    if not next_path.startswith('/') or next_path.startswith('//'):
        next_path = url_for('blogs')
    email = (request.form.get('email') or '').strip()
    if not email or '@' not in email:
        sep = '&' if '?' in next_path else '?'
        return redirect(f"{next_path}{sep}newsletter=error")
    record = {
        'email': email,
        'subscribed_at': datetime.utcnow().isoformat() + 'Z',
    }
    _save_newsletter(record)
    _send_email("Newsletter signup - Altveen", f"New newsletter subscriber:\n\nEmail: {email}")
    sep = '&' if '?' in next_path else '?'
    return redirect(f"{next_path}{sep}newsletter=success")


@app.errorhandler(404)
def not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True, port=5000)
