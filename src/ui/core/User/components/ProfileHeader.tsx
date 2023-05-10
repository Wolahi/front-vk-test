import { ReactElement, useState } from "react";
import { BsGeoAlt, BsPen } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import style from "../User.module.scss";
import useTypedSelector from "../../../../shared/hooks/useTypedSelector";
import ImgPasteModal from "./modal/ImgPasteModal";
import InfoPasteModal from "./modal/InfoPasteModal";
import BgImgPasteModal from "./modal/BgImgPasteModal";

const ProfileHeader = (): ReactElement => {
  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const { curUser } = useTypedSelector((state) => state);
  return (
    <div className={style.profileHeader}>
      <ImgPasteModal show={show} setShow={setShow} />
      <BgImgPasteModal show={showBg} setShow={setShowBg} />
      <InfoPasteModal show={showInfo} setShow={setShowInfo} />
      <div className={style.bgImg}>
        <button
          type="button"
          name="testBut"
          className={style.changeBg}
          onClick={(): void => setShowBg(true)}>
          <BsPen size={20} className={style.icons} />
        </button>
        <img src={curUser.bg_img} alt="" />
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
