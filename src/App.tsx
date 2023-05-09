import { ReactElement, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useLogin from "./ui/hooks/HooksAuth/useLogin";
import UserPage from "./ui/core/User/UserView";

const App = (): ReactElement => {
  const [cookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const logHook = useLogin();

  useEffect(() => {
    if (cookie.user !== undefined) {
      // eslint-disable-next-line
      logHook.getCurUser(cookie.user);
      navigate("/userpage");
      console.log("yes");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return <UserPage />;
};

export default App;
