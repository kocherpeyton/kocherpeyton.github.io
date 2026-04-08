# Peyton Kocher - Portfolio Website

A modern portfolio website showcasing photography and creative direction work with a clean, gallery-style layout and dark theme.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm run dev
# or
yarn dev
```

4. Open your browser to `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
# or
pnpm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

**Setup Steps:**

1. Go to your GitHub repository settings
2. Navigate to **Settings > Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Push your code to the `main` branch
5. The workflow will automatically build and deploy your site

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Important: Configure Base URL

If your site is hosted at `username.github.io/repo-name/`, you need to update the base URL:

**Edit `vite.config.ts`:**
```typescript
export default defineConfig({
  base: '/YOUR_REPO_NAME/',  // Change this to your repo name
  // ... rest of config
})
```

If you're using a custom domain (e.g., `peytonkocher.com`), keep `base: '/'`.

### Option 2: Manual Deployment

```bash
npm run build
# Then manually upload the dist/ folder to your hosting provider
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons
- **Material-UI** - UI components

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── routes.tsx      # Route configuration
│   │   └── App.tsx         # Main app component
│   ├── styles/             # Global styles
│   └── main.tsx            # Entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

## 📧 Contact

- Email: kocherpeyton06@gmail.com
- Instagram: [@peyton_kocher](https://instagram.com/peyton_kocher)
- LinkedIn: [linkedin.com/in/peytonkocher](https://linkedin.com/in/peytonkocher)

## 📝 License

This project is private and proprietary.
