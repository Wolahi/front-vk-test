import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import styles from "../AuthPage.module.scss";

const InputEmail = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.inputBlock}>
      <div className={styles.labelTop}>Почта</div>
      <div className={styles.wrapper}>
        <AiOutlineMail className={styles.icon} />
        <input id="Email" type="email" {...register("email")} placeholder="Ваша почта" />
        <div className={styles.error}>{errors.email && (errors.email.message as string)}</div>
      </div>
    </div>
  );
};

export default InputEmail;
