import { ReactElement } from "react";
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
import SwitchRegLog from "../InputBlocksComponent/SwitchRegLog";
import InputUserName from "../InputBlocksComponent/InputUserName";
import InputNumber from "../InputBlocksComponent/InputNumber";

const SignUpView = (): ReactElement => {
  const schemas = useSchemasValid();
  type FormDataReg = yup.InferType<typeof schemas.schemaRegister>;
  const methods = useForm<FormDataReg>({
    resolver: yupResolver(schemas.schemaRegister),
  });
  const onSubmit = (data: FormDataReg): void => {
    console.log(data);
  };
  return (
    <div className={styles.root}>
      <div className={styles.imgBlock}>
        <img src={Sea} alt="" />
      </div>
      <div className={styles.formBlock}>
        <FormProvider {...methods}>
          <div className={styles.signForm}>
            <SwitchRegLog />
            <div className={styles.head}>
              <div>Зарегестрируй свой аккаунт</div>
              <div className={styles.logIncAcc}>
                Заполни детали, для того чтобы зарегестрировать аккаунт
              </div>
            </div>
            <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
              <div className={styles.sign}>
                <div className={styles.input}>
                  <InputUserName />
                  <InputEmail />
                  <InputNumber />
                  <InputPass />
                </div>
                <button type="submit" className={styles.buttonEnable}>
                  Создать
                </button>
              </div>
            </form>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};
export default SignUpView;
