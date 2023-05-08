import { ReactElement } from "react";
import useImg from "../../hooks/User/useImg";
import style from "./SideBar.module.scss";

const SideBar = (): ReactElement => {
  const imgHook = useImg();
  return (
    <div className={style.sideBar}>
      <div className={style.userImg}>
        <img src={imgHook.img} alt="" />
      </div>
      <div className={style.navBar}>
        <nav>Ccskrf</nav>
      </div>
      <div className={style.logOut}>Sign Out</div>
    </div>
  );
};

export default SideBar;
