import { ReactElement, useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "../Modal.module.scss";
import useTypedSelector from "../../../../../../shared/hooks/useTypedSelector";

const InputUserName = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { curUser } = useTypedSelector((state) => state);
  const [username, setUsername] = useState(curUser.username);
  const [surname, setSurname] = useState(curUser.surname);
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.labelTop}>Имя</div>
        <input
          id="userName"
          type="text"
          {...register("username")}
          value={username}
          onChange={(e): any => setUsername(e.target.value)}
          placeholder="Введите имя"
        />
        <div className={styles.error}>{errors.userName && (errors.userName.message as string)}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.labelTop}>Фамилия</div>
        <input
          id="surName"
          type="text"
          {...register("surname")}
          value={surname}
          onChange={(e): any => setSurname(e.target.value)}
          placeholder="Введите фамилию"
        />
        <div className={styles.error}>{errors.surName && (errors.surName.message as string)}</div>
      </div>
    </div>
  );
};

export default InputUserName;
