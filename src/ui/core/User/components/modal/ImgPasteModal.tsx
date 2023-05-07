import { ReactElement } from "react";
import styles from "./Modal.module.scss";
import useImg from "../../../../hooks/User/useImg";

const ImgPasteModal = (): ReactElement => {
  const imgHook = useImg();
  return (
    <div className={styles.root}>
      <div className={styles.block}>
        <div className={styles.inputFileBlock}>
          <label htmlFor="file[]" className={styles.input_file}>
            <input
              id="file[]"
              type="file"
              name="file[]"
              onChange={(e: any): void => {
                imgHook.onChange(e);
              }}
            />
            <span>Выберите файл</span>
          </label>
        </div>
        <button type="button">Закрыть</button>
      </div>
    </div>
  );
};

export default ImgPasteModal;
