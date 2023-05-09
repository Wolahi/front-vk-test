import { ReactElement, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styles from "./ui/style/Index.module.scss";
import useLogin from "./ui/hooks/HooksAuth/useLogin";
import Friends from "./ui/core/Friends/Friends";
import SideBar from "./ui/core/SideBar/SideBar";

const App = (): ReactElement => {
  const [cookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const logHook = useLogin();
  const [autorizate, setAutorizate] = useState(false);
  useEffect(() => {
    if (cookie.user !== undefined) {
      // eslint-disable-next-line
      logHook.getCurUser(cookie.user);
      navigate("/userpage");
      setAutorizate(true);
    } else {
      navigate("/login");
      setAutorizate(false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {autorizate ? (
        <Friends />
      ) : (
        <div className={styles.rootWrap}>
          <SideBar />
          <Friends />
        </div>
      )}
    </div>
  );
};

export default App;
