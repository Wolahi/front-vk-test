import { ReactElement } from "react";
import * as yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Modal.module.scss";
import useSchemasValid from "../../utils/schemasYup";
import InputUserName from "./InputComp/InputUserName";
import InputUserCityEdu from "./InputComp/InputUserCityEdu";
import InputUserInfo from "./InputComp/inputUserInfo";

const InfoPasteModal = (prop: any): ReactElement => {
  const { show, setShow } = prop;
  const schemas = useSchemasValid();
  type FormDataUpdate = yup.InferType<typeof schemas.schemaUpdate>;
  const methods = useForm<FormDataUpdate>({
    resolver: yupResolver(schemas.schemaUpdate),
  });
  const onSubmit = (dataLog: FormDataUpdate): void => {
    console.log(dataLog);
  };
  return (
    <div>
      {show && (
        <div className={styles.root}>
          <div className={styles.block}>
            <div className={styles.header}>
              <span>Редактирование профиля</span>
              <button className={styles.exit} type="button" onClick={(): void => setShow(false)}>
                <AiOutlineClose color="red" size={20} />
              </button>
            </div>
            <FormProvider {...methods}>
              <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
                <InputUserName />
                <InputUserCityEdu />
                <InputUserInfo />
                <div className={styles.wrapperBtn}>
                  <button type="submit" className={styles.saveChanges}>
                    Сохранить изменения
                  </button>
                  <button
                    className={styles.exitBtn}
                    type="button"
                    onClick={(): void => setShow(false)}>
                    Отмена
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPasteModal;
