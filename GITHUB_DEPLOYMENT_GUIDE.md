# How to Host Your Portfolio on GitHub Pages

This guide will walk you through deploying your React portfolio to GitHub Pages for free!

## Prerequisites
- A GitHub account
- Git installed on your computer
- Node.js and npm installed

---

## Step 1: Install GitHub Pages Package

Open your terminal in the project directory and run:

```bash
npm install --save-dev gh-pages
```

---

## Step 2: Update package.json

I've already updated your `package.json` with the necessary configuration. The changes include:

1. **Homepage field**: Points to your GitHub Pages URL
2. **Deploy scripts**: Added `predeploy` and `deploy` scripts

**Note**: You'll need to replace `YOUR-USERNAME` with your actual GitHub username in the `homepage` field.

---

## Step 3: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `portfolio` (or any name you prefer)
4. Description: "My personal portfolio website"
5. Choose **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (you already have these)
7. Click **"Create repository"**

---

## Step 4: Initialize Git and Push to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Rename main branch (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## Step 5: Update Homepage in package.json

Before deploying, update the `homepage` field in `package.json`:

1. Open `package.json`
2. Find the `"homepage"` field
3. Replace `YOUR-USERNAME` with your actual GitHub username
4. Save the file

Example:
```json
"homepage": "https://ridhima-chaturvedi.github.io/portfolio"
```

---

## Step 6: Deploy to GitHub Pages

Run this command in your terminal:

```bash
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Deploy it to GitHub Pages

**First time deployment takes 2-5 minutes.**

---

## Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**, select **"gh-pages"** branch
5. Click **"Save"**

---

## Step 8: Access Your Website

Your portfolio will be live at:
```
https://YOUR-USERNAME.github.io/portfolio
```

**Note**: It may take a few minutes for the site to be accessible after first deployment.

---

## Updating Your Site

Whenever you make changes:

1. Make your changes
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Deploy again:
   ```bash
   npm run deploy
   ```

---

## Troubleshooting

### Issue: 404 Error
- Wait 5-10 minutes after deployment
- Clear browser cache
- Check that GitHub Pages is enabled in repository settings

### Issue: Assets not loading
- Make sure `homepage` field in `package.json` matches your GitHub Pages URL
- Rebuild and redeploy: `npm run deploy`

### Issue: Routes not working
- GitHub Pages doesn't support client-side routing by default
- Your portfolio uses hash routing (`#`), which should work fine!

---

## Alternative: Using Custom Domain

If you have a custom domain:

1. Add a `CNAME` file in `public/` folder with your domain name
2. Update DNS settings with your domain provider
3. Update `homepage` in `package.json` to your custom domain

---

## Quick Reference Commands

```bash
# Build and deploy
npm run deploy

# Build only (test locally)
npm run build

# Start development server
npm start

# Push changes to GitHub
git add .
git commit -m "Your message"
git push
```

---

**Need help?** Check GitHub Pages documentation: https://docs.github.com/en/pages
