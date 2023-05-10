import { ReactElement, useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "../Modal.module.scss";
import useTypedSelector from "../../../../../../shared/hooks/useTypedSelector";

const InputUserInfo = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { curUser } = useTypedSelector((state) => state);
  const [userStatus, setUserStatus] = useState(curUser.info);
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.labelTop}>Статус</div>
        <textarea
          id="info"
          {...register("info")}
          value={userStatus}
          onChange={(e): any => setUserStatus(e.target.value)}
          placeholder="Расскажите о себе"
        />
        <div className={styles.error}>
          {errors.userStatus && (errors.userStatus.message as string)}
        </div>
      </div>
    </div>
  );
};

export default InputUserInfo;
