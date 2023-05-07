import React, { ReactElement, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from "yup";
import { useCookies } from "react-cookie";
import Sea from "../../../../assets/auth/imgs/sea.png";
// eslint-disable-next-line import/no-extraneous-dependencies
import useSchemasValid from "../../utils/shemasYup";
import styles from "../AuthPage.module.scss";
import InputEmail from "../InputBlocksComponent/InputEmail";
import InputPass from "../InputBlocksComponent/InputPass";
import ButtonForgot from "../InputBlocksComponent/Button&Forgot";
import SwitchLogReg from "../InputBlocksComponent/SwitchLogReg";
import { useLoginUserQuery } from "../../../../../store/user/user.api";

const authLoginUrl = "http://127.0.0.1:8000/auth/jwt/login";
const curUser = "http://127.0.0.1:8000/users/me";

const SignInView = (): ReactElement => {
  const [cookies, setCookie] = useCookies(["user"]);
  const schemas = useSchemasValid();
  type FormDataLogin = yup.InferType<typeof schemas.schemaLogin>;
  const methods = useForm<FormDataLogin>({
    resolver: yupResolver(schemas.schemaLogin),
  });
  function login(obj: any): void {
    axios.post(authLoginUrl, obj, { withCredentials: true }).then((response) => {
      setCookie("user", JSON.parse(response.request.response).access_token);
    });
  }

  useEffect(() => {
    axios
      .get(curUser, {
        headers: {
          Authorization: `Bearer ${cookies.user}`,
        },
      })
      .then((response) => console.log(response));
    console.log(cookies.user);
  }, [cookies.user]);
  const onSubmit = (dataLog: FormDataLogin): void => {};
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
