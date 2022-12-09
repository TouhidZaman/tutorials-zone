import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import BrowsingHistory from "../pages/BrowsingHistory";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/history",
                element: <BrowsingHistory />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export default routes;