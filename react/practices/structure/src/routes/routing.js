import Layout from "components/Layout";
import HomePage from "pages/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
        ],
    },
])
export default router;