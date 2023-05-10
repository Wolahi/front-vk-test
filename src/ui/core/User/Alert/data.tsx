import { useState } from "react";

const useData = (): any => {
  const [showAlert, setShowAlert] = useState(false);
  const [textAlert, setTextAlert] = useState("");

  return { showAlert, textAlert, setTextAlert, setShowAlert };
};

export default useData;
