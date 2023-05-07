import { ReactElement } from "react";
import styles from "../AuthPage.module.scss";

const ButtonForgot = (): ReactElement => {
  return (
    <div>
      <div className={styles.blockLoginFogot}>
        <div className={styles.remeber}>
          <input type="checkbox" />
          <div>Запомнить меня</div>
        </div>
        <div className={styles.linkForgot}>
          <a href="/#">Забыли пароль?</a>
        </div>
      </div>

      <button type="submit" className={styles.buttonEnable}>
        Войти
      </button>
    </div>
  );
};

export default ButtonForgot;
