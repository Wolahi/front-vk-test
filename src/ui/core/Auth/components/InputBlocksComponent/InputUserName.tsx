import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import styles from "../AuthPage.module.scss";

const InputUserName = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.inputBlock}>
      <div className={styles.userInfo}>
        <div className={styles.wrapper}>
          <div className={styles.labelTop}>Имя</div>
          <input id="userName" type="text" {...register("userName")} placeholder="Ваше имя" />
          <div className={styles.error}>
            {errors.userName && (errors.userName.message as string)}
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.labelTop}>Фамилия</div>
          <input id="surName" type="text" {...register("surName")} placeholder="Ваша фамилия" />
          <div className={styles.error}>{errors.surName && (errors.surName.message as string)}</div>
        </div>
      </div>
    </div>
  );
};

export default InputUserName;
