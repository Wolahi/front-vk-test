import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import useFriendsActions from "./useFriendsActions";
import useLogin from "../HooksAuth/useLogin";

const useFriendsList = (): any => {
  const [limit, setLimit] = useState(5);
  const { initFrendsList } = useFriendsActions();
  const [cookie] = useCookies();
  const logHook = useLogin();

  const createList = async (): Promise<void> => {
    const user = await logHook.getCurUser(cookie.user);

    const friendsUrl = `http://localhost:8000/friends/users/${user.id}/${limit}`;
    axios.get(friendsUrl).then((res) => {
      initFrendsList(res.data);
    });
  };

  return {
    limit,
    createList,
    setLimit,
  };
};

export default useFriendsList;
