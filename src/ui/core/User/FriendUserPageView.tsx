import { ReactElement } from "react";
import style from "./User.module.scss";
import Post from "./components/post/Post";
import SideBar from "../SideBar/SideBar";
import FriendProfile from "./components/FreindProfile";
import SideBarFriends from "./components/friendsBAr/SideBarFriends";

const FriendUserPageView = (): ReactElement => {
  return (
    <div className={style.root}>
      <SideBar />
      <div className={style.userPage}>
        <FriendProfile />
        <div className={style.mainWrap}>
          <div>
            <Post />
          </div>
          <SideBarFriends />
        </div>
      </div>
    </div>
  );
};

export default FriendUserPageView;
