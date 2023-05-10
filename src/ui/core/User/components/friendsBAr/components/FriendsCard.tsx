import { ReactElement } from "react";
import { Link } from "react-router-dom";
import style from "../FriendsSideBar.module.scss";

const FriendsCard = (prop: any): ReactElement => {
  const { user } = prop;
  return (
    <div key={user.id} className={style.friendsCard}>
      <div className={style.friendsCardInfo}>
        <Link to={`/friend/${user.id}`}>
          <div className={style.friendsCardImg}>
            <img src={user.avatar} alt="" />
          </div>
        </Link>
        <div className={style.userName}>
          <Link to={`/friend/${user.id}`}>
            {user.username} {user.surname}
          </Link>
        </div>
        <div className={style.setting}>
          <a href="/#">...</a>
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
