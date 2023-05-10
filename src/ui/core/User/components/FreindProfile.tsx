import { ReactElement, useEffect, useState } from "react";
import { BsGeoAlt } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { useParams } from "react-router";
import axios from "axios";
import { useCookies } from "react-cookie";
import style from "../User.module.scss";
import useFriendsList from "../../../hooks/User/useFrendsList";
import useTypedSelector from "../../../../shared/hooks/useTypedSelector";

const FriendProfile = (): ReactElement => {
  const { id } = useParams();
  const { friends } = useTypedSelector((state) => state);
  const [user, setUser] = useState({
    id: 0,
    email: "",
    username: "",
    surname: "",
    avatar: "",
    bg_img: "",
    edu: "",
    num_telephone: "",
    info: "",
    city: "",
    is_active: true,
    is_superuser: false,
    is_verified: false,
  });
  const [cookie] = useCookies(["user"]);
  const userPath = `http://localhost:8000/users/${id}`;
  const friendsList = useFriendsList();
  let isExiting = false;
  useEffect((): any => {
    const headers = {
      Authorization: `Bearer ${cookie.user}`,
    };

    axios.get(userPath, { headers }).then((res) => {
      console.log(res);
      setUser(res.data);
      isExiting = friends.some((u) => u === res.data);
    });
  }, []);

  return (
    <div className={style.profileHeader}>
      <div className={style.bgImg}>
        <img src={user.bg_img} alt="" />
      </div>
      <div className={style.infoUser}>
        <button type="button" className={style.avatar}>
          <img src={user.avatar} alt="" />
        </button>
        <div className={style.data}>
          <div className={style.userName}>
            {user.username} {user.surname}
          </div>
          <span className={style.textInfo}>{user.info}</span>
          <div className={style.info}>
            <div className={style.textInfo}>
              <BsGeoAlt size={20} className={style.icons} />
              <span>{user.city}</span>
            </div>
            <div className={style.textInfo}>
              <FaUniversity size={20} className={style.icons} />
              <span>{user.edu}</span>
            </div>
          </div>
        </div>
        {isExiting ? (
          <button
            type="button"
            className={style.buttCh}
            onClick={(): any => friendsList.deleteFromList(user)}>
            Удалить из друзей
          </button>
        ) : (
          <button
            type="button"
            className={style.buttCh}
            onClick={(): any => friendsList.addToListDB(user)}>
            Добавить в друзья
          </button>
        )}
      </div>
    </div>
  );
};

export default FriendProfile;
