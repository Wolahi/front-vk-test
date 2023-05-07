import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormContext } from "react-hook-form";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// eslint-disable-next-line import/no-extraneous-dependencies
import styles from "../AuthPage.module.scss";
import useData from "../AuthPageData";

const InputPass = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const valid = useData();
  const validVisibility = valid.passwordVisibility;
  return (
    <div className={styles.inputBlock}>
      <div className={styles.labelTop}>Пароль</div>
      <div className={styles.wrapper}>
        <BiLockAlt className={styles.icon} size={25} />
        <input
          id="Password"
          type={validVisibility.typeVis}
          {...register("password")}
          placeholder="Ваш пароль"
        />
        <button
          type="button"
          className={styles.eye}
          onClick={(): void => {
            validVisibility.changeVis();
          }}>
          {validVisibility.typeVis === "password" ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </button>
        <div className={styles.error}>{errors.email && (errors.email.message as string)}</div>
      </div>
    </div>
  );
};

export default InputPass;
