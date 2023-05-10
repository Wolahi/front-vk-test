import { Link } from "react-router-dom";
import { ReactElement } from "react";
import style from "./SideBar.module.scss";
import useTypedSelector from "../../../shared/hooks/useTypedSelector";

const SideBar = (): ReactElement => {
  const { curUser } = useTypedSelector((state) => state);
  return (
    <div className={style.wrapper}>
      <div className={style.sideBar}>
        <Link to="/userpage">
          <div className={style.userImg}>
            <img src={curUser.avatar} alt="" />
          </div>
        </Link>

        <div className={style.navBar}>
          <nav>
            <Link to="/userpage">Моя страница</Link>
          </nav>
          <nav>
            <Link to="/friends">Друзья</Link>
          </nav>
        </div>
        <div className={style.logOut}>Sign Out</div>
      </div>
    </div>
  );
};

export default SideBar;
