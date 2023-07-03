import MainPage from "./components/pages/MainPage";
import Products from "./components/pages/Products/Products";
import Comments from "./components/pages/Comments";
import Users from "./components/pages/Users";
import Orders from "./components/pages/Orders";
import Offs from "./components/pages/Offs";
import Notification from "./components/pages/Notification";
import NotFound404 from "./components/pages/NotFound404";

const routes = [
    { path: "/", element: <MainPage /> },
    { path: "/products", element: <Products /> },
    { path: "/comments", element: <Comments /> },
    { path: "/users", element: <Users /> },
    { path: "/orders", element: <Orders /> },
    { path: "/offs", element: <Offs /> },
    { path: "/notification", element: <Notification /> },
    { path: "*", element: <NotFound404 /> },
];

export default routes;
