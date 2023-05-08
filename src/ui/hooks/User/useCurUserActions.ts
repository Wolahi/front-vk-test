import { curUserActions } from "../../../store/user/curUser.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const allActions = {
  ...curUserActions,
};

export const useCurUserActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
