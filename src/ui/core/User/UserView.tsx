import { ReactElement } from "react";
import style from "./User.module.scss";
import ProfileHeader from "./components/ProfileHeader";
import Post from "./components/post/Post";
import SideBar from "../SideBar/SideBar";
import SideBarFriends from "./components/friendsBAr/SideBarFriends";
import AlertComp from "./Alert/alert";
import useData from "./Alert/data";

const UserPage = (): ReactElement => {
  const Alert = useData();

  return (
    <div className={style.root}>
      <SideBar />
      <div className={style.userPage}>
        <ProfileHeader />
        <div className={style.mainWrap}>
          <div>
            <Post />
          </div>
          <SideBarFriends />
        </div>
      </div>
      <AlertComp active={Alert.showAlert} setActive={Alert.setShowAlert} text={Alert.textAlert} />
    </div>
  );
};

export default UserPage;
