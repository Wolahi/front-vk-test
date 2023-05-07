import { ReactElement } from "react";
import useImg from "../../hooks/User/useImg";
import style from "./SideBar.module.scss";

const SideBar = (): ReactElement => {
  const imgHook = useImg();
  return (
    <div className={style.sideBar}>
      <div className={style.userImg}>
          <a href="#"><img src={imgHook.img} alt="" /></a>
      </div>
      <div className={style.navBar}>
        <nav>
          <a href="#">Моя страница</a>
          <a href="#">Друзья</a>
          <a href="#">Лента</a>
          <a href="#">Игры</a>
          <a href="#">Музыка</a>
          <a href="#">Сообщества</a>
        </nav>
      </div>
      <div className={style.logOut}><a href="#">Sign Out</a></div>
    </div>
  );
};

export default SideBar;
