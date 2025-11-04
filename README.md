# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/53947e21-f78e-4770-9dee-040581907217

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/53947e21-f78e-4770-9dee-040581907217) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This project can be deployed to GitHub Pages. The app already reads the production base URL via `import.meta.env.BASE_URL` and sets the router basename in `src/App.tsx`, so you only need to build with the correct base and publish the `dist` folder.

Two recommended options:

- Quick (build + publish manually using gh-pages):

  1. Install `gh-pages` if you don't have it (this repo already includes it in devDependencies):
     ```sh
     npm i --save-dev gh-pages
     ```
  2. Build with the Vite `--base` flag set to your repo name. For a project page use the repo name (example: `/REPO_NAME/`); for a user/organization site use `/`.
     ```sh
     # for a project site (example: https://<USER>.github.io/REPO_NAME)
     npm run build -- --base "/<REPO_NAME>/"

     # for a user/organization site (example: https://<USER>.github.io)
     npm run build -- --base "/"
     ```
  3. Publish the `dist` folder to GitHub Pages using `gh-pages`:
     ```sh
     npx gh-pages -d dist
     ```
  4. GitHub Pages will serve the site from the `gh-pages` branch. The repo setting for Pages should show the site published once the branch is pushed.

- Use the provided npm scripts (adjust `predeploy` to include the correct base):

  1. Edit `package.json` to change `predeploy` to pass the `--base` flag, e.g.:
     ```json
     "predeploy": "vite build --base '/<REPO_NAME>/'",
     "deploy": "gh-pages -d dist"
     ```
  2. Then run:
     ```sh
     npm run deploy
     ```
  This will run `predeploy` (the build with the correct base) and then `deploy` which publishes `dist` to the `gh-pages` branch.

Notes and tips:

- The app's `src/App.tsx` already uses `const routerBasename = import.meta.env.PROD ? import.meta.env.BASE_URL : "/";` so when you build with `--base` Vite sets `import.meta.env.BASE_URL` and the router will use the correct basename automatically.
- The project includes a `postbuild` script that copies `dist/index.html` to `dist/404.html` for client-side routing fallback when using GitHub Pages.
- If you prefer automation, you can create a GitHub Action to run the same build + gh-pages publish steps on push to `main`.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
