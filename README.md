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

### Automatic Deployment - It Just Works! ✨

This project is pre-configured to automatically deploy to GitHub Pages. Just follow these steps:

**Setup Steps:**

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Navigate to **Settings → Pages**
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
   - Click Save

3. **Done!** Your site will automatically deploy when you push to main.

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

The configuration automatically detects your repository name and sets up the correct URLs - no manual configuration needed!

### Using a Custom Domain (Optional)

If you want to use a custom domain like `peytonkocher.com`:

1. Add your custom domain in **Settings → Pages → Custom domain**
2. Configure your DNS settings with your domain provider
3. The site will automatically work with your custom domain

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