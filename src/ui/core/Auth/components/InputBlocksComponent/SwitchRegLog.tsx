import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "../AuthPage.module.scss";

const SwitchRegLog = (): ReactElement => {
  return (
    <div className={styles.changeFormText}>
      <span>
        У вас есть аккаунт?{" "}
        <Link to="/login" className={styles.linkForgot}>
          Войти
        </Link>
      </span>
    </div>
  );
};

export default SwitchRegLog;
