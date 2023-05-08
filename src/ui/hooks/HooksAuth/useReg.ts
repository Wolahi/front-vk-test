import axios from "axios";

interface UseReg {
  email: string;
  password: string;
  username: string;
  surname: string;
  num_telephone: string;
}

const useReg = (): any => {
  const authRegUrl = "http://127.0.0.1:8000/auth/register";

  const reg = (obj: UseReg): void => {
    axios.post(authRegUrl, obj, { withCredentials: true });
  };

  return {
    reg,
  };
};

export default useReg;
