# FLOTE Website (GitHub Pages Ready)

This repo is configured to deploy the static site in `Website/` to GitHub Pages for free using GitHub Actions.

## What is configured

- Automatic deploy workflow: `.github/workflows/deploy-pages.yml`
- GitHub Pages compatibility marker: `Website/.nojekyll`
- Basic ignore rules for local artifacts: `.gitignore`

## One-time GitHub setup

1. Push this repository to GitHub.
2. Open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` or `master` (or run the workflow manually from the `Actions` tab).

After deployment, your site URL will be shown in the workflow run summary and in the Pages settings.

## Local preview

From the repo root:

```bash
python3 -m http.server 8080 --directory Website
```

Then open `http://localhost:8080`.

## Updating the site

- Edit files under `Website/`.
- Commit and push to `main` or `master`.
- GitHub Actions redeploys automatically.

## Optional: custom domain

If you want a custom domain later, add a `Website/CNAME` file with your domain, then configure DNS at your registrar.
