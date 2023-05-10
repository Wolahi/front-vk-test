import { ReactElement } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import style from "../Friends.module.scss";

const CardFriend = (props: any): ReactElement => {
  const { user } = props;
  return (
    <div key={user.id} className={style.FriendCard}>
      <div className={style.userImgWrap}>
        <div className={style.userImg}>
          <a href="/#">
            <img src={user.avatar} alt="" />
          </a>
        </div>
      </div>
      <div className={style.header}>
        <div className={style.userName}>
          <span>
            {user.username} {user.surname}
          </span>
        </div>
        <div className={style.userLink}>
          <a href="/#">Перейти на страницу пользователя</a>
        </div>
        <div className={style.delete}>
          <button type="button">
            <AiOutlineDelete size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFriend;
