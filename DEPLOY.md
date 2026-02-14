# How to Deploy WebWorks Website

This guide explains how to take your local website and put it online for free.

## Option 1: Netlify Drop (Easiest - No Account Required for Testing)

1.  Go to [Netlify Drop](https://app.netlify.com/drop).
2.  Drag and drop the entire `WebWorks` folder onto the page.
3.  Your site will be live instantly with a temporary URL.
4.  To keep it online permanently and customize the domain (e.g., `webworks.netlify.app`), you will need to sign up for a free Netlify account and "Claim" the site.

## Option 2: GitHub Pages (Recommended for Professional Portfolios)

This requires a GitHub account.

1.  **Create a Repository on GitHub:**
    *   Log in to [GitHub](https://github.com/).
    *   Click the "+" icon in the top right and select "New repository".
    *   Name it `webworks-portfolio` (or similar).
    *   Make sure it is **Public**.
    *   Do **not** check "Initialize with README", ".gitignore", or "License" (we already have these locally).
    *   Click "Create repository".

2.  **Push your code:**
    *   Open your terminal (Command Prompt or PowerShell) in the `WebWorks` folder.
    *   Run the commands shown on the GitHub page under "…or push an existing repository from the command line":
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/webworks-portfolio.git
        git branch -M main
        git push -u origin main
        ```
        *(Replace `YOUR_USERNAME` with your actual GitHub username)*

3.  **Enable GitHub Pages:**
    *   Go to your repository "Settings" tab.
    *   Click on "Pages" in the left sidebar.
    *   Under "Source", select `Deploy from a branch`.
    *   Under "Branch", select `main` and folder `/ (root)`.
    *   Click "Save".
    *   Your site will be live at `https://YOUR_USERNAME.github.io/webworks-portfolio/`.

## Option 3: Netlify (Continuous Deployment)

This connects Netlify to your GitHub repository, so every time you push changes, the site updates automatically.

1.  Push your code to GitHub (follow steps 1 & 2 from Option 2).
2.  Log in to [Netlify](https://www.netlify.com/).
3.  Click "Add new site" > "Import an existing project".
4.  Select "GitHub".
5.  Authorize Netlify to access your GitHub repositories.
6.  Select your `webworks-portfolio` repository.
7.  Netlify will detect the settings automatically (thanks to `netlify.toml`).
8.  Click "Deploy site".
