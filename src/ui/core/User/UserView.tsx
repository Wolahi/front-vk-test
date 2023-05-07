import { ReactElement } from "react";
import style from "./User.module.scss";
import ProfileHeader from "./components/ProfileHeader";

const UserPage = (): ReactElement => {
  return (
    <div className={style.root}>
      <ProfileHeader />
    </div>
  );
};

export default UserPage;
