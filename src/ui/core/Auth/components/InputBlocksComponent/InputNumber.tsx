import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { FiSmartphone } from "react-icons/fi";
import styles from "../AuthPage.module.scss";

const InputNumber = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.inputBlock}>
      <div className={styles.labelTop}>Номер телефона</div>
      <div className={styles.wrapper}>
        <FiSmartphone className={styles.icon} />
        <input id="number" type="text" {...register("number")} placeholder="Ваш номер телефона" />
        <div className={styles.error}>{errors.number && (errors.number.message as string)}</div>
      </div>
    </div>
  );
};

export default InputNumber;
