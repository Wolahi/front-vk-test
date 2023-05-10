import { ReactElement } from "react";
import styles from "./Modal.module.scss";
import useImg from "../../../../hooks/User/useImg";

const ImgPasteModal = (prop: any): ReactElement => {
  const { show, setShow } = prop;
  const imgHook = useImg();
  return (
    <div>
      {show && (
        <div className={styles.root}>
          <div className={styles.FileBlock}>
            <div className={styles.changeText}>Изменить обложку профиля</div>
            <div className={styles.inputFileBlock}>
              <label htmlFor="file[]" className={styles.input_file}>
                <input
                  id="file[]"
                  type="file"
                  name="file[]"
                  onChange={(e: any): void => {
                    imgHook.onChangeBg(e);
                    setShow(false);
                  }}
                />
                <span>Выберите файл .PNG</span>
              </label>
            </div>
            <button
              className={styles.closeBtnForFileBlock}
              type="button"
              onClick={(): void => setShow(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgPasteModal;
