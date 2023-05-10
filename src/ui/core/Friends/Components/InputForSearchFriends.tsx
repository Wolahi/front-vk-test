import { ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import style from "../Friends.module.scss";

const InputForSearchFriends = (): ReactElement => {
  return (
    <div className={style.SearchInput}>
      <div className={style.header}>
        <label htmlFor="search">
          <AiOutlineSearch size={18} />
          <input type="search" id="search" name="search" placeholder="Поиск друзей" />
          <div className={style.search}>
            <button type="button">Поиск</button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default InputForSearchFriends;
