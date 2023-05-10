import axios from "axios";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import useCurUserActions from "../User/useCurUserActions";

const useLogin = (): any => {
  const authLoginUrl = "http://127.0.0.1:8000/auth/jwt/login";
  const curUser = "http://127.0.0.1:8000/users/me";
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);
  const { addCurUser } = useCurUserActions();
  const getCurUser = async (token: string): Promise<any> => {
    const data = await axios
      .get(curUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        addCurUser(response.data);
        return response.data;
      });
    return data;
  };

  const login = async (obj: any): Promise<void> => {
    await axios.post(authLoginUrl, obj, { withCredentials: true }).then((response) => {
      setCookie("user", JSON.parse(response.request.response).access_token, { maxAge: 3600 });
      getCurUser(JSON.parse(response.request.response).access_token);
      navigate("/userpage");
    });
  };

  return {
    cookies,
    login,
    getCurUser,
  };
};

export default useLogin;
