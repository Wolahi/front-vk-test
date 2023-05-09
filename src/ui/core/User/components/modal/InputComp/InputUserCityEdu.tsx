import { ReactElement, useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "../Modal.module.scss";
import useTypedSelector from "../../../../../../shared/hooks/useTypedSelector";

const InputUserCityEdu = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { curUser } = useTypedSelector((state) => state);
  const [city, setCity] = useState(curUser.city);
  const [edu, setEdu] = useState(curUser.edu);
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.labelTop}>Город</div>
        <input
          id="city"
          type="text"
          {...register("city")}
          value={city}
          onChange={(e): any => setCity(e.target.value)}
          placeholder="Введите город"
        />
        <div className={styles.error}>{errors.city && (errors.city.message as string)}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.labelTop}>Образование</div>
        <input
          id="edu"
          type="text"
          {...register("edu")}
          value={edu}
          onChange={(e): any => setEdu(e.target.value)}
          placeholder="Введите место образования"
        />
        <div className={styles.error}>{errors.edu && (errors.edu.message as string)}</div>
      </div>
    </div>
  );
};

export default InputUserCityEdu;
