import { ReactElement, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import useLogin from "./ui/hooks/HooksAuth/useLogin";

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

  return <Outlet />;
};

export default App;
