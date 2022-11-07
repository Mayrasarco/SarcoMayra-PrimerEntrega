import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/root";
import ItemDetailContainer from "../components/ItemListContainer";
import ItemListContainer from "../components/ItemListContainer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "/",
                element: <ItemListContainer />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/detail/:id",
                element: <ItemDetailContainer/>,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
