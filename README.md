<<<<<<< HEAD
# ToDo Planning App

A beautiful and functional task management application built with Next.js, featuring a clean green-themed UI with dark mode support.

## Features

- **Task Management**: Create, complete, and delete tasks with ease
- **Task Details**: Add task names, descriptions, due dates, and times
- **Search Functionality**: Quickly find tasks by searching through titles and descriptions
- **Statistics Tracking**: View your productivity stats including completion rates
- **Dark Mode**: Toggle between light and dark themes
- **User Profile**: Track your task completion progress
- **Settings**: Customize your experience and manage your account
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Local Storage**: All data persists in your browser

## Screenshots

The app includes:
- Splash screen with animated logo
- Sign in and registration pages
- Password reset functionality
- Main task dashboard
- Add task interface with date/time pickers
- Search page
- Profile with statistics
- Settings page

## Running Locally

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation Steps

1. **Download or clone the project**
   \`\`\`bash
   # If using git
   git clone <your-repo-url>
   cd todo-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

The app will automatically reload when you make changes to the code.

## Building for Production

To create an optimized production build:

\`\`\`bash
npm run build
npm start
\`\`\`

## Deploying to GitHub Pages

### Step 1: Update next.config.mjs

The configuration is already set up for static export. Ensure your `next.config.mjs` includes:

\`\`\`javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // Replace with your GitHub repo name
  images: {
    unoptimized: true,
  },
}
\`\`\`

### Step 2: Build the Static Site

\`\`\`bash
npm run build
\`\`\`

This creates an `out` folder with your static files.

### Step 3: Deploy to GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
\`\`\`

2. Push to GitHub:
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

#### Option B: Manual Deployment

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Install gh-pages package:
\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

3. Add deploy script to `package.json`:
\`\`\`json
"scripts": {
  "deploy": "gh-pages -d out"
}
\`\`\`

4. Deploy:
\`\`\`bash
npm run deploy
\`\`\`

5. Enable GitHub Pages:
   - Go to repository settings
   - Navigate to "Pages"
   - Select "gh-pages" branch as source

### Step 4: Access Your App

Your app will be available at:
\`\`\`
https://your-username.github.io/your-repo-name/
\`\`\`

## Important Notes for GitHub Pages

1. **Base Path**: Update the `basePath` in `next.config.mjs` to match your repository name
2. **Links**: All internal links use Next.js `<Link>` component which handles the base path automatically
3. **Assets**: Images and assets are configured with `unoptimized: true` for static export
4. **Local Storage**: Data persists only in the browser - clearing browser data will reset the app

## Troubleshooting

### App doesn't load on GitHub Pages
- Verify the `basePath` in `next.config.mjs` matches your repo name exactly
- Check that GitHub Pages is enabled in repository settings
- Ensure the build completed without errors

### Styles not loading
- Clear your browser cache
- Check browser console for 404 errors
- Verify all asset paths are relative

### Tasks not saving
- Check browser console for localStorage errors
- Ensure your browser allows localStorage
- Try a different browser

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Storage**: Browser localStorage
- **Date Handling**: date-fns

## Development

### Project Structure

\`\`\`
todo-app/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Splash screen
│   ├── signin/            # Sign in page
│   ├── register/          # Registration page
│   ├── home/              # Main task dashboard
│   ├── add-task/          # Add task page
│   ├── search/            # Search page
│   ├── profile/           # User profile
│   └── settings/          # Settings page
├── components/            # Reusable components
│   ├── task-card.tsx     # Task card component
│   ├── bottom-nav.tsx    # Bottom navigation
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
└── public/               # Static assets
\`\`\`

### Adding New Features

1. Create new components in the `components/` directory
2. Add new pages in the `app/` directory
3. Update localStorage keys in respective page files
4. Test thoroughly before deploying

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please open an issue on GitHub.
=======
# ToDoApp
Simple ToDo App designed and built by myself
>>>>>>> 8a0180925823764d85deec6b3a8b7bf3be285cb5
