import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/root";
import ItemDetailContainer from "../container/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import CardContainer from "../container/CardContainer";


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
                element: <ItemDetailContainer />,
            },
            {
                path: "/cart",
                element: <CardContainer />,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
