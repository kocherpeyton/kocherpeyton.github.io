import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { PhotographyPage } from "./pages/PhotographyPage";
import { CreativeDirectionPage } from "./pages/CreativeDirectionPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CollectionPage } from "./pages/CollectionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "photography", Component: PhotographyPage },
      { path: "creative-direction", Component: CreativeDirectionPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "collection/:collectionId", Component: CollectionPage },
    ],
  },
]);