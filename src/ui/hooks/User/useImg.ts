import { useCookies } from "react-cookie";
import axios from "axios";
import useTypedSelector from "../../../shared/hooks/useTypedSelector";
import { UserRead } from "../../../store/user/user.types";

const useImg = (): any => {
  const { curUser } = useTypedSelector((state) => state);
  const [cookies] = useCookies(["user"]);
  const curUserUrl = "http://127.0.0.1:8000/users/me";

  const converToBase64 = (file: any): Promise<any> => {
    return new Promise((resolve) => {
      const fileReader: any = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = (): any => {
        resolve(fileReader.result);
      };
    });
  };

  const onChangeAvatar = async (e: any): Promise<void> => {
    const headers = {
      Authorization: `Bearer ${cookies.user}`,
    };
    const file = e.target.files[0];
    const base64 = await converToBase64(file);
    const data: UserRead = {
      ...curUser,
      avatar: base64,
    };
    axios.patch(curUserUrl, data, { headers });
  };

  const onChangeBg = async (e: any): Promise<void> => {
    const headers = {
      Authorization: `Bearer ${cookies.user}`,
    };
    const file = e.target.files[0];
    const base64 = await converToBase64(file);
    const data: UserRead = {
      ...curUser,
      bg_img: base64,
    };
    axios.patch(curUserUrl, data, { headers });
  };

  return { onChangeBg, onChangeAvatar, converToBase64 };
};

export default useImg;
