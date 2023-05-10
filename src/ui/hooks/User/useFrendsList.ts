import { useState } from "react";
import axios from "axios";
import useFriendsActions from "./useFriendsActions";
import useTypedSelector from "../../../shared/hooks/useTypedSelector";
import { UserRead } from "../../../store/user/user.types";

const useFriendsList = (): any => {
  const [limit, setLimit] = useState(5);
  const { initFrendsList, removeFromList, addToList } = useFriendsActions();
  const { curUser } = useTypedSelector((state) => state);

  const createList = async (user: UserRead): Promise<void> => {
    const friendsUrl = `http://localhost:8000/friends/users/${user.id}/${limit}`;
    await axios.get(friendsUrl).then((res) => {
      initFrendsList(res.data);
    });
  };

  const deleteFromList = (user: UserRead): void => {
    removeFromList(user);
    const friendsDelUrl = `http://localhost:8000/friends/curUser/${curUser.id}/friend/${user.id}`;
    axios.delete(friendsDelUrl);
  };

  const addToListDB = (user: UserRead): void => {
    addToList(user);
    const friendsAddUrl = "http://localhost:8000/friends";
    const data = {
      id: 0,
      user_id: curUser.id,
      friends_id: user.id,
    };
    axios.post(friendsAddUrl, data);
  };

  return {
    limit,
    deleteFromList,
    createList,
    setLimit,
    addToListDB,
  };
};

export default useFriendsList;
