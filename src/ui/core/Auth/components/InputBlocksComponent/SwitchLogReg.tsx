import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "../AuthPage.module.scss";

const SwitchLogReg = (): ReactElement => {
  return (
    <div className={styles.changeFormText}>
      <span>
        Ещё нет аккаунта?{" "}
        <Link to="/reg" className={styles.linkForgot}>
          Зарегистрируйтесь здесь
        </Link>
      </span>
    </div>
  );
};

export default SwitchLogReg;
