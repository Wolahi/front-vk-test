import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { curUserActions } from "../../../store/user/curUser.slice";

const allActions = {
  ...curUserActions,
};

const useCurUserActions = (): any => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

export default useCurUserActions;
