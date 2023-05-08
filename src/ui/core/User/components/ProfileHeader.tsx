import { ReactElement } from "react";
import { BsGeoAlt } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import Sea from "../../../assets/auth/imgs/sea.png";
import useImg from "../../../hooks/User/useImg";
import style from "../User.module.scss";
import useTypedSelector from "../../../../shared/hooks/useTypedSelector";

const ProfileHeader = (): ReactElement => {
  const imgHook = useImg();
  const { curUser } = useTypedSelector((state) => state);
  return (
    <div className={style.profileHeader}>
      <div className={style.bgImg}>
        <img src={Sea} alt="" />
      </div>
      <div className={style.infoUser}>
        <div className={style.avatar}>
          <img src={imgHook.img} alt="" />
        </div>
        <div className={style.data}>
          <div className={style.userName}>
            {curUser.username} {curUser.surname}
          </div>
          <div className={style.info}>
            <div className={style.textInfo}>
              <BsGeoAlt size={20} className={style.icons} />
              <span>{curUser.city}</span>
            </div>
            <div className={style.textInfo}>
              <FaUniversity size={20} className={style.icons} />
              <span>{curUser.edu}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
