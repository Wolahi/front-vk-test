import { ReactElement } from "react";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Modal.module.scss";
import useSchemasValid from "../../utils/schemasYup";
import InputUserName from "../../../Auth/components/InputBlocksComponent/InputUserName";

const InfoPasteModal = (prop: any): ReactElement => {
  const { show, setShow } = prop;
  const schemas = useSchemasValid();
  type FormDataUpdate = yup.InferType<typeof schemas.schemaUpdate>;
  const methods = useForm<FormDataUpdate>({
    resolver: yupResolver(schemas.schemaUpdate),
  });
  return (
    <div>
      {show && (
        <div className={styles.root}>
          <div className={styles.block}>
            <FormProvider {...methods}>
              <InputUserName />
            </FormProvider>
            <button type="button" onClick={(): void => setShow(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPasteModal;
