import axios from "axios";
import { useCookies } from "react-cookie";
import { useCurUserActions } from "../User/useCurUserActions";

const useLogin = (): any => {
  const authLoginUrl = "http://127.0.0.1:8000/auth/jwt/login";
  const curUser = "http://127.0.0.1:8000/users/me";
  const [cookies, setCookie] = useCookies(["user"]);
  const { addCurUser } = useCurUserActions();
  const getCurUser = (): void => {
    axios
      .get(curUser, {
        headers: {
          Authorization: `Bearer ${cookies.user}`,
        },
      })
      .then((response) => {
        addCurUser(response.data);
      });
  };

  const login = async (obj: any): Promise<void> => {
    await axios.post(authLoginUrl, obj, { withCredentials: true }).then((response) => {
      setCookie("user", JSON.parse(response.request.response).access_token);
      getCurUser();
    });
  };

  return {
    cookies,
    login,
    getCurUser,
  };
};

export default useLogin;