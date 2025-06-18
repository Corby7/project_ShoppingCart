import App from "../App";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ShoppingPage from "../pages/ShoppingPage";

const AppRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "shopping", element: <ShoppingPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default AppRoutes;
