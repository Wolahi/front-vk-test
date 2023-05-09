import { ReactElement } from "react";
import style from "./Friends.module.scss";
import CardFriend from "./Components/CardFriend";
import InputForSearchFriends from "./Components/InputForSearchFriends";

const Friends = (): ReactElement => {
  return (
    <div className={style.root}>
      <div className={style.Friends}>
        <InputForSearchFriends />
        <CardFriend />
        <CardFriend />
        <CardFriend />
        <CardFriend />
        <CardFriend />
        <CardFriend />
        <CardFriend />
      </div>
    </div>
  );
};

export default Friends;
