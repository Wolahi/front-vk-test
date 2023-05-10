import * as Yup from "yup";

const useSchemasValid = (): any => {
  const schemaUpdate = Yup.object({
    username: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () =>
          Yup.string()
            .min(2, "Минимальная длина 2 символа")
            .max(15, "Максимальная длина 15 символов"),
      })
      .required("Поле не может быть пустым"),
    surname: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () =>
          Yup.string()
            .min(2, "Минимальная длинна 2 символа")
            .max(20, "Максимальная длина 20 символов"),
      })
      .required("Поле не может быть пустым"),
    city: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () =>
        Yup.string()
          .max(20, "Максимальная длина 20 символов")
          .matches(/[aA-zZ аА-яЯ]+/, "Is not in correct format"),
    }),
    edu: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () =>
        Yup.string()
          .max(20, "Максимальная длина 20 символов")
          .matches(/[aA-zZ аА-яЯ 0-9]+/, "Is not in correct format"),
    }),
    info: Yup.string().when({
      is: (val: any) => val.length > 0,
      then: () => Yup.string().max(25, "Максимальная длина 30 символов"),
    }),
  });

  return { schemaUpdate };
};

export default useSchemasValid;
