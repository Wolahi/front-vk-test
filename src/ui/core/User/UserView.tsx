import { ReactElement } from "react";
import style from "./User.module.scss";
import ProfileHeader from "./components/ProfileHeader";
import SideBar from "../SideBar/SideBar";
import Post from "./components/post/Post";

const UserPage = (): ReactElement => {
  return (
    <div className={style.root}>
      <SideBar />
      <div className={style.userPage}>
        <ProfileHeader />
        <Post />
      </div>
    </div>
  );
};

export default UserPage;
