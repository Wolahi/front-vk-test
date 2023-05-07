import React, { ReactElement } from "react";
import styles from "../AuthPage.module.scss";

const SwitchRegLog = (): ReactElement => {
  return (
    <div className={styles.changeFormText}>
      <span>
        У вас есть аккаунт?<span className={styles.linkForgot}> Войти</span>
      </span>
    </div>
  );
};

export default SwitchRegLog;
