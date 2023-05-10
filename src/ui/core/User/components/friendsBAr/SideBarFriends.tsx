import { ReactElement } from "react";
import style from "./FriendsSideBar.module.scss";
import FriendsCard from "./components/FriendsCard";
import useTypedSelector from "../../../../../shared/hooks/useTypedSelector";

const SideBarFriends = (): ReactElement => {
  const { friends } = useTypedSelector((state) => state);
  return (
    <div className={style.sideBar}>
      <div className={style.header}>
        <span>Друзья</span>
      </div>
      <div className={style.friends}>
        {friends?.map((user) => (
          <FriendsCard user={user} />
        ))}
      </div>
      {friends.length >= 5 && (
        <div className={style.allFriends}>
          <a href="/#">Просмотреть всех</a>
        </div>
      )}
    </div>
  );
};

export default SideBarFriends;
