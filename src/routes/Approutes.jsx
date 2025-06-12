import MainLayouts from "../components/layouts/MainLayouts/MainLayouts";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import NotFound from "../pages/NotFound";


const AppRoutes = [
  {
    name: "main",
    path: "/",
    Component: MainLayouts,
    key: "main",
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: HomePage,
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        Component: AboutPage,
      },
      {
        key: "skills",
        name: "skills",
        path: "/skills",
        Component: SkillsPage,
      },
    ],
  },
  {
    name: "404",
    path: "*",
    Component: NotFound,
    key: "404",
  },
];
export default AppRoutes;
