import { ReactElement } from "react";
import { BsGeoAlt } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import useImg from "../../../hooks/User/useImg";
import Sea from "../../../assets/auth/imgs/sea.png";

import style from "../User.module.scss";
import ImgPasteModal from "./modal/ImgPasteModal";

const ProfileHeader = (): ReactElement => {
  const imgHook = useImg();
  const user = {
    bgImg: Sea,
    userName: "Илья",
    surName: "Перелыгин",
    city: "Воронеж",
    edu: "ВГТУ",
  };
  console.log(imgHook.img);
  return (
    <div className={style.profileHeader}>
      <div className={style.bgImg}>
        <img src={user.bgImg} alt="" />
      </div>
      <div className={style.infoUser}>
        <div className={style.avatar}>
          <img src={imgHook.img} alt="" />
        </div>
        <div className={style.data}>
          <div className={style.userName}>
            {user.userName} {user.surName}
          </div>
          <div className={style.info}>
            <div className={style.textInfo}>
              <BsGeoAlt size={20} className={style.icons} />
              <span>{user.city}</span>
            </div>
            <div className={style.textInfo}>
              <FaUniversity size={20} className={style.icons} />
              <span>{user.edu}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
