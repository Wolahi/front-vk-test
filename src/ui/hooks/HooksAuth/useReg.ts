import axios from "axios";
import { useNavigate } from "react-router";
import avatar from "../../assets/userProfile/imgs/user_deafult.png";
import bgImg from "../../assets/auth/imgs/sea.png";
import useImg from "../User/useImg";

interface UseReg {
  email: string;
  password: string;
  username: string;
  surname: string;
  num_telephone: string;
  avatar: any;
  bgImg: any;
  edu: string;
  info: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
}

const createBlob = async (img: any): Promise<any> => {
  const file = await fetch(img);
  const blob = await file.blob();
  return blob;
};

const useReg = (): any => {
  const authRegUrl = "http://127.0.0.1:8000/auth/register";
  const imgHook = useImg();
  const navigate = useNavigate();
  const createDefUser = async (obj: UseReg): Promise<any> => {
    const avatarBlob = await createBlob(avatar);
    const bgImgBlob = await createBlob(bgImg);
    console.log(avatarBlob);
    const avatarDef = await imgHook.converToBase64(avatarBlob);
    const bgDef = await imgHook.converToBase64(bgImgBlob);
    const data = {
      ...obj,
      avatar: avatarDef,
      bgImg: bgDef,
      edu: "Университет",
      city: "Москва",
      info: "Пользователь",
      is_active: true,
      is_superuser: false,
      is_verified: false,
    };
    return data;
  };

  const reg = async (obj: UseReg): Promise<void> => {
    const data = await createDefUser(obj);
    axios.post(authRegUrl, data).then(() => {
      navigate("/login");
    });
  };

  return {
    reg,
  };
};

export default useReg;
