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
          <div className={styles.block}>
            <div className={styles.inputFileBlock}>
              <label htmlFor="file[]" className={styles.input_file}>
                <input
                  id="file[]"
                  type="file"
                  name="file[]"
                  onChange={(e: any): void => {
                    imgHook.onChange(e);
                    setShow(false);
                  }}
                />
                <span>Выберите файл</span>
              </label>
            </div>
            <button type="button" onClick={(): void => setShow(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgPasteModal;
