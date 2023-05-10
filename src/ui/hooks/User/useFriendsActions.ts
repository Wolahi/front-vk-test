import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { frendsSliceActions } from "../../../store/user/friends.slice";

const allActions = {
  ...frendsSliceActions,
};

const useFriendsActions = (): any => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

export default useFriendsActions;
