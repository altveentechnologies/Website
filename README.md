# Altveen Technologies Pvt Ltd - Website

Website for **Altveen Technologies Pvt Ltd**, a software and digital marketing company.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python Flask

## Pages

| Page       | Route        | Description                    |
|-----------|--------------|--------------------------------|
| Home      | `/`          | Hero, features, blog preview  |
| About     | `/about`     | Company story and values      |
| Services  | `/services`  | Software & digital marketing   |
| Clients   | `/clients`   | Who we work with, industries   |
| Blogs     | `/blogs`     | List of 9 static blog posts    |
| Blog Post | `/blogs/<slug>` | Single blog article        |
| Contact   | `/contact`   | Contact form and details       |

## Setup

1. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the app:**
   ```bash
   python app.py
   ```

4. Open **http://127.0.0.1:5000** in your browser.

## Project Structure

```
altveen/
├── app.py              # Flask app and routes
├── requirements.txt
├── data/
│   ├── __init__.py
│   └── blogs.py        # 9 static blog entries
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── clients.html
│   ├── blogs.html
│   ├── blog_post.html
│   ├── contact.html
│   └── 404.html
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## Contact Form

The contact form is currently client-side only (shows "Message Sent!" on submit). To save submissions, add a Flask route that accepts POST and sends email or stores in a database, then point the form `action` to that route and optionally use `fetch()` in `main.js` to submit via AJAX.

## License

© 2025 Altveen Technologies Pvt Ltd.
