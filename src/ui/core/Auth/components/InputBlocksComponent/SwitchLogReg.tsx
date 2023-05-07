import React, { ReactElement } from "react";
import styles from "../AuthPage.module.scss";

const SwitchLogReg = (): ReactElement => {
  return (
    <div className={styles.changeFormText}>
      <span>
        Ещё нет аккаунта? <span className={styles.linkForgot}>Зарегистрируйтесь здесь</span>
      </span>
    </div>
  );
};

export default SwitchLogReg;
