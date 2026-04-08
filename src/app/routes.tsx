import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CollectionPage } from "./pages/CollectionPage";

// Get the base path from Vite's base configuration
const base = import.meta.env.BASE_URL || '/';

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },
        { path: "about", Component: AboutPage },
        { path: "contact", Component: ContactPage },
        { path: "collection/:collectionId", Component: CollectionPage },
      ],
    },
  ],
  {
    basename: base,
  }
);