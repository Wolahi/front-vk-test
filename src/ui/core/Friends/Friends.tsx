import { ReactElement } from "react";
import style from "./Friends.module.scss";
import CardFriend from "./Components/CardFriend";
import InputForSearchFriends from "./Components/InputForSearchFriends";
import SideBar from "../SideBar/SideBar";
import useTypedSelector from "../../../shared/hooks/useTypedSelector";

const Friends = (): ReactElement => {
  const { friends } = useTypedSelector((state) => state);
  return (
    <div className={style.root}>
      <SideBar />
      <div className={style.friendsBlock}>
        <div className={style.Friends}>
          <InputForSearchFriends />
          {friends?.map((user) => user !== null && <CardFriend user={user} />)}
        </div>
      </div>
    </div>
  );
};

export default Friends;
