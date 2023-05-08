import { ReactElement } from "react";
import style from "./User.module.scss";
import ProfileHeader from "./components/ProfileHeader";
import SideBar from "../SideBar/SideBar";

const UserPage = (): ReactElement => {
  return (
    <div className={style.root}>
      <SideBar />
      <div className={style.userPage}>
        <ProfileHeader />
      </div>
    </div>
  );
};

export default UserPage;
