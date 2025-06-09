
import MainLayouts from "../components/layouts/MainLayouts/MainLayouts";
import HomePage from "../pages/HomePage";

const AppRoutes = [
    {
        name: 'main',
        path: '/',
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
                Component: () => <p>about</p>,
            },
        ]
    },
    {
        name: "404",
        path: "*",
        Component: () => <p>This Content 404</p>,
        key: "404"
    }
];
export default AppRoutes;