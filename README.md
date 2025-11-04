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

This project is configured to deploy to GitHub Pages at https://pkaiserui.github.io/gaze-genius-lab/. Follow these steps to deploy:

1. First, ensure GitHub Pages is enabled in your repository:
   - Go to your repository Settings
   - Navigate to Pages
   - Under "Build and deployment", select "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder
   - Click Save

2. Make sure your local configuration is correct:
   - In `vite.config.ts`, the base URL should be set to:
     ```ts
     base: "/gaze-genius-lab/",
     ```
   - In `package.json`, verify you have these scripts:
     ```json
     "postbuild": "cp dist/index.html dist/404.html",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
     ```

3. Deploy the site:
   ```sh
   # Install dependencies if you haven't already
   npm install

   # Deploy to GitHub Pages
   npm run deploy
   ```

This will:
- Build the project with the correct base URL `/gaze-genius-lab/`
- Copy `index.html` to `404.html` (via the postbuild script) for client-side routing support
- Deploy the `dist` folder to the `gh-pages` branch
- GitHub Pages will serve the site from that branch at https://pkaiserui.github.io/gaze-genius-lab/

To verify the deployment:
1. Check that the `gh-pages` branch was updated with your latest changes
2. Go to the repository settings -> Pages
3. Verify that it's set to deploy from the `gh-pages` branch
4. Visit https://pkaiserui.github.io/gaze-genius-lab/ to see your deployed site

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
