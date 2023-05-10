import axios from "axios";
import { useCookies } from "react-cookie";
import useTypedSelector from "../../../shared/hooks/useTypedSelector";
import useSchemasValid from "../../core/User/utils/schemasYup";

const useUpdate = (): any => {
  const [cookie] = useCookies();
  const { curUser } = useTypedSelector((state) => state);
  const schemas = useSchemasValid();
  const pathUrl = "http://127.0.0.1:8000/users/me";
  type FormDataUpdate = typeof schemas.schemaUpdate;

  const changeData = async (obj: FormDataUpdate): Promise<void> => {
    const data = {
      ...curUser,
      ...obj,
    };
    const headers = {
      Authorization: `Bearer ${cookie.user}`,
    };
    await axios.patch(pathUrl, data, { headers });
  };

  return { changeData };
};

export default useUpdate;
