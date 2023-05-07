import { useState } from "react";
import Avatar from "../../assets/userProfile/imgs/user_deafult.png";

const useImg = (): any => {
  const [img, setImg] = useState(Avatar);

  const onChange = (e: any): void => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  return { img, onChange };
};

export default useImg;
