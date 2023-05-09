import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from "yup";
import Sea from "../../../../assets/auth/imgs/sea.png";
// eslint-disable-next-line import/no-extraneous-dependencies
import useSchemasValid from "../../utils/shemasYup";
import styles from "../AuthPage.module.scss";
import InputEmail from "../InputBlocksComponent/InputEmail";
import InputPass from "../InputBlocksComponent/InputPass";
import ButtonForgot from "../InputBlocksComponent/Button&Forgot";
import SwitchLogReg from "../InputBlocksComponent/SwitchLogReg";
import useLogin from "../../../../hooks/HooksAuth/useLogin";
import { useNavigate } from "react-router";

const SignInView = (): ReactElement => {
  const logniHook = useLogin();
  const schemas = useSchemasValid();
  const navigate = useNavigate();
  type FormDataLogin = yup.InferType<typeof schemas.schemaLogin>;
  const methods = useForm<FormDataLogin>({
    resolver: yupResolver(schemas.schemaLogin),
  });
  const onSubmit = (dataLog: FormDataLogin): void => {
    logniHook.login(`username=${dataLog.email}&password=${dataLog.password}`).then((res: any) => {
      navigate("/userpage");
    });
  };
  return (
    <div className={styles.root}>
      <div className={styles.imgBlock}>
        <img src={Sea} alt="" />
      </div>
      <div className={styles.formBlock}>
        <FormProvider {...methods}>
          <div className={styles.signForm}>
            <SwitchLogReg />
            <div className={styles.head}>
              <div>Добро пожаловать</div>
              <div className={styles.logIncAcc}>Войти в аккаунт</div>
            </div>
            <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
              <div className={styles.sign}>
                <div className={styles.input}>
                  <InputEmail />
                  <InputPass />
                </div>
                <ButtonForgot />
              </div>
            </form>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};
export default SignInView;
