import { ReactElement, useState } from "react";
import { BsGeoAlt } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import Sea from "../../../assets/auth/imgs/sea.png";
import style from "../User.module.scss";
import useTypedSelector from "../../../../shared/hooks/useTypedSelector";
import ImgPasteModal from "./modal/ImgPasteModal";
import InfoPasteModal from "./modal/InfoPasteModal";

const ProfileHeader = (): ReactElement => {
  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const { curUser } = useTypedSelector((state) => state);
  return (
    <div className={style.profileHeader}>
      <ImgPasteModal show={show} setShow={setShow} />
      <InfoPasteModal show={showInfo} setShow={setShowInfo} />
      <div className={style.bgImg}>
        <img src={Sea} alt="" />
      </div>
      <div className={style.infoUser}>
        <button
          type="button"
          className={style.avatar}
          onClick={(): void => {
            setShow(true);
          }}>
          <img src={curUser.avatar} alt="" />
        </button>
        <div className={style.data}>
          <div className={style.userName}>
            {curUser.username} {curUser.surname}
          </div>
          <span className={style.textInfo}>{curUser.info}</span>
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
        <button
          type="button"
          className={style.buttCh}
          onClick={(): any => {
            setShowInfo(true);
          }}>
          Редактировать
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
