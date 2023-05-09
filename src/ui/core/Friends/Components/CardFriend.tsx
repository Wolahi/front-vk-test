import { ReactElement } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import style from "../Friends.module.scss";
import defAvatar from "../../../assets/userProfile/imgs/avatar.png";

const CardFriend = (): ReactElement => {
  return (
    <div className={style.FriendCard}>
      <div className={style.userImgWrap}>
        <div className={style.userImg}>
          <a href="/#">
            <img src={defAvatar} alt="" />
          </a>
        </div>
      </div>
      <div className={style.header}>
        <div className={style.userName}>
          <span>Username</span>
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
