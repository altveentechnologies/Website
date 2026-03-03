# Deploy Altveen website to Vercel

Follow these steps one by one.

---

## Step 1: Push your code to GitHub (if not already)

1. Create a repository on [GitHub](https://github.com/new) (e.g. `altveen-website`).
2. In your project folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

**Important:** Do **not** commit the `.env` file (it contains your email password). It should already be in `.gitignore`.

---

## Step 2: Create a Vercel account and install CLI (optional)

- Sign up at [vercel.com](https://vercel.com) (use GitHub to log in).
- **Option A – Deploy from dashboard (easiest):** Skip to Step 3.
- **Option B – Deploy from terminal:** Install Vercel CLI:

```bash
npm i -g vercel
```

---

## Step 3: Import the project on Vercel

**If using the Vercel website:**

1. Go to [vercel.com/new](https://vercel.com/new).
2. Click **Import** next to your GitHub repository (or **Import Git Repository** and paste the repo URL).
3. Select the repository that contains your Flask app.
4. Click **Import**.

**If using the CLI:**

1. In your project folder run:

```bash
vercel
```

2. Log in if asked and follow the prompts (link to existing project or create new one).

---

## Step 4: Set environment variables on Vercel

Forms and newsletter use SMTP. You must set these in Vercel so email works in production.

1. In the Vercel dashboard, open your project.
2. Go to **Settings** → **Environment Variables**.
3. Add these variables (one by one). Use the same values as in your local `.env`:

| Name             | Value                        | Notes                    |
|------------------|------------------------------|--------------------------|
| `SMTP_SERVER`    | `smtp.gmail.com`             |                          |
| `SMTP_PORT`      | `587`                        |                          |
| `SENDER_EMAIL`   | `recouriercom@gmail.com`     | Your Gmail address       |
| `SENDER_PASSWORD`| `akkd tvwa zkvq shtb`        | Gmail app password       |
| `RECEIVER_EMAIL` | `altveentechnologies@gmail.com` | Where forms are sent  |
| `SECRET_KEY`     | (any long random string)     | e.g. generate a random 32-char string |

4. For each variable, choose **Production** (and optionally Preview/Development if you use them).
5. Click **Save**.

---

## Step 5: Deploy

**If you imported from GitHub:**

1. After saving env vars, go to the **Deployments** tab.
2. Open the **...** menu on the latest deployment and click **Redeploy** (so the new env vars are used).
   - Or push a new commit to `main`; Vercel will deploy automatically.

**If you use the CLI:**

1. Run:

```bash
vercel --prod
```

2. When prompted, confirm the project and settings.

---

## Step 6: Check the live URL

1. After the deployment finishes, Vercel shows a URL like `https://your-project.vercel.app`.
2. Open it and test:
   - Home, About, Services, Clients, Blogs, Contact.
   - **Consultation form** (e.g. on Home or Services): submit and check that an email arrives at `altveentechnologies@gmail.com`.
   - **Newsletter** (on a blog post): submit and check email.
   - **Contact form**: submit and check email.

---

## Step 7: (Optional) Use your own domain

1. In the project on Vercel, go to **Settings** → **Domains**.
2. Add your domain (e.g. `altveen.com` or `www.altveen.com`).
3. Follow the instructions to add the DNS records at your domain provider.

---

## Troubleshooting

- **Forms don’t send email:**  
  Check that all env vars (especially `SENDER_EMAIL`, `SENDER_PASSWORD`, `RECEIVER_EMAIL`) are set in Vercel and that you redeployed after adding them.

- **Build fails:**  
  Ensure `requirements.txt` has `flask>=3.0.0` and `python-dotenv>=1.0.0`. No need to install system packages for this app.

- **404 on refresh (e.g. on `/about`):**  
  Vercel’s Flask setup should handle all routes via `app.py`. If you still see 404s, check that `vercel.json` has the single catch‑all route to `app.py` as in this project.

- **Static files (CSS/images) not loading:**  
  They are served by Flask from the `static/` folder. If something is missing, check that the file paths in your templates match the files in `static/`.

---

## Summary checklist

- [ ] Code on GitHub (no `.env` committed).
- [ ] Project imported on Vercel (from GitHub or CLI).
- [ ] All 6 env vars set in Vercel (SMTP + SECRET_KEY).
- [ ] Redeploy after setting env vars.
- [ ] Test live URL: pages and all three forms (consultation, newsletter, contact).
