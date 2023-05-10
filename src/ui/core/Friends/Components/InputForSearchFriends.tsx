import { ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import style from "../Friends.module.scss";

const InputForSearchFriends = (): ReactElement => {
  return (
    <div className={style.SearchInput}>
      <div className={style.header}>
        <form noValidate>
          <label htmlFor="text">
            <div className={style.wrapInput}>
              <AiOutlineSearch size={20} />
              <input type="text" id="text" name="text" placeholder="Поиск друзей" />
            </div>
            <div className={style.search}>
              <button type="button">Поиск</button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default InputForSearchFriends;
