import { Link, useNavigate } from "react-router-dom";
import { ReactElement } from "react";
import { Menu } from "antd";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import style from "./SideBar.module.scss";
import useTypedSelector from "../../../shared/hooks/useTypedSelector";

const SideBar = (): ReactElement => {
  const { curUser } = useTypedSelector((state) => state);
  const navigate = useNavigate();
  const items = [
    {
      key: "userpage",
      icon: <HiOutlineUser size={20} />,
      label: <span className={style.text}>Моя страница</span>,
    },
    {
      key: "friends",
      icon: <HiOutlineUsers size={20} />,
      label: <span className={style.text}>Друзья</span>,
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.sideBar}>
        <Link to="/userpage">
          <div className={style.userImg}>
            <img src={curUser.avatar} alt="" />
          </div>
        </Link>
        <Menu items={items} onClick={(e): void => navigate(`/${e.key}`)} />
        <div className={style.logOut}>Sign Out</div>
      </div>
    </div>
  );
};

export default SideBar;
