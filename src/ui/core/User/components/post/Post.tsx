import { ReactElement, useState } from "react";
import style from "./Post.module.scss";
import Sea from "../../../../assets/auth/imgs/sea.png";
import defAvatar from "../../../../assets/userProfile/imgs/user_deafult.png";
import Like from "./like";
import NonLike from "./nonLike";

const Post = (): ReactElement => {
  const [like, setLike] = useState(false);
  return (
    <div className={style.post}>
      <div className={style.postHeader}>
        <div className={style.userImg}>
          <img src={defAvatar} alt="" />
        </div>
        <div className={style.userName}>PostUserName</div>
      </div>
      <div className={style.postImg}>
        <img src={Sea} alt="" />
      </div>
      <div className={style.postText}>
        <span>
          PostText Главная страница – лицо сайта. С нее начинается знакомство с компанией, брендом,
          услугой или вообще с ресурсом. Как правило, именно на главных страницах сайтов “сходятся”
          основные ключевые запросы, по которым приходит самая горячая целевая аудитория. Существует
          лишь одна “маленькая” проблема: владельцы сайтов порой просто не понимают, какой вид
          текста будет лучше работать. И это нужно исправлять. но для такого случая мы собрали самые
          разные примеры текстов главных страниц. Вам остается только посмотреть, выбрать что-то
          интересное и реализовать. Просто. Практично. Удобно.
        </span>
      </div>
      <div className={style.postReactions}>
        <button type="button" onClick={(): void => setLike(!like)}>
          {like ? <Like /> : <NonLike />}
        </button>
      </div>
    </div>
  );
};

export default Post;
