import { ReactElement } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import style from "../Friends.module.scss";
import useFriendsList from "../../../hooks/User/useFrendsList";

const CardFriend = (props: any): ReactElement => {
  const { user } = props;
  const friendList = useFriendsList();
  return (
    <div key={user.id} className={style.FriendCard}>
      <div className={style.userImgWrap}>
        <div className={style.userImg}>
          <Link to={`/friend/${user.id}`}>
            <img src={user.avatar} alt="" />
          </Link>
        </div>
      </div>
      <div className={style.header}>
        <div className={style.userName}>
          <span>
            {user.username} {user.surname}
          </span>
        </div>
        <div className={style.userLink}>
          <Link to={`/friend/${user.id}`}>Перейти на страницу пользователя</Link>
        </div>
        <div className={style.delete}>
          <button type="button" onClick={(): void => friendList.deleteFromList(user)}>
            <AiOutlineDelete size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFriend;
