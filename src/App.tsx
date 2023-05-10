import { ReactElement, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useLogin from "./ui/hooks/HooksAuth/useLogin";
import useFriendsList from "./ui/hooks/User/useFrendsList";
import { UserRead } from "./store/user/user.types";
import UserPage from "./ui/core/User/UserView";

const App = (): ReactElement => {
  const [cookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const logHook = useLogin();
  const friendList = useFriendsList();
  useEffect(() => {
    if (cookie.user !== undefined) {
      // eslint-disable-next-line
      logHook.getCurUser(cookie.user).then((res: UserRead) => {
        friendList.createList(res);
      });
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return <UserPage />;
};

export default App;
