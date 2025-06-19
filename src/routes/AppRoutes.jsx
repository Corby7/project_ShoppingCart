import App from "../App";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import StorePage from "../pages/StorePage";
import ShoppingBagPage from "../pages/ShoppingBagPage";

const AppRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "store", element: <StorePage /> },
      { path: "bag", element: <ShoppingBagPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default AppRoutes;
