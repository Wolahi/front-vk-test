import * as Yup from "yup";
// eslint-disable-next-line import/no-extraneous-dependencies

const useSchemasValid = (): any => {
  const schemaLogin = Yup.object({
    email: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().email("Почта должна быть валидной"),
      })
      .required("Поле не может быть пустым"),
    password: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(8, "Минимальная длинна 8 символов"),
      })
      .required("Поле не может быть пустым"),
  }).required();

  const schemaRegister = Yup.object({
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
    email: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().email("Почта должна быть валидной"),
      })
      .required("Поле не может быть пустым"),
    num_telephone: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().matches(/^[0-9]+$/, "Телефон должен быть настоящий"),
      })
      .required("Поле не может быть пустым"),
    password: Yup.string()
      .when({
        is: (val: any) => val.length > 0,
        then: () => Yup.string().min(8, "Минимальная длинна 8 символов"),
      })
      .required("Поле не может быть пустым"),
  });

  return {
    schemaLogin,
    schemaRegister,
  };
};

export default useSchemasValid;
