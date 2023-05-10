import ReactDOM from "react-dom";
import "./ui/style/Index.module.scss";
import { CookiesProvider } from "react-cookie";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SignInView from "./ui/core/Auth/components/SignInComponets/SignInView";
import App from "./App";
import UserPage from "./ui/core/User/UserView";
import SignUpView from "./ui/core/Auth/components/SignUpComponents/SignUpView";
import Friends from "./ui/core/Friends/Friends";
import FriendUserPageView from "./ui/core/User/FriendUserPageView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <SignInView />,
      },
      {
        path: "/userpage",
        element: <UserPage />,
      },
      {
        path: "/reg",
        element: <SignUpView />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/friend/:id",
        element: <FriendUserPageView />,
      },
    ],
  },
]);
ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </Provider>,

  document.getElementById("root") as HTMLElement,
);
