import * as Yup from "yup";

const useSchemasValid = (): any => {
  const schemaUpdate = Yup.object({
    username: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(2, "Минимальная длинна 2 символа"),
      })
      .required("Поле не может быть пустым"),
    surname: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(2, "Минимальная длинна 2 символа"),
      })
      .required("Поле не может быть пустым"),
  });

  return { schemaUpdate };
};

export default useSchemasValid;
