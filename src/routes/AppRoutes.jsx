import App from "../App";
// import Profile from "./Profile";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  //   },
  //   {
  //     path: "profile/:name",
  //     element: <Profile />,
  //   },
];

export default AppRoutes;
