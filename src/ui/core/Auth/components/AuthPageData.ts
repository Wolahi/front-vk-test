import useChangeVis from "../../../hooks/HooksAuth/useChangeVis";

const useData = (): any => {
  const passwordVisibility = useChangeVis();
  const submitPasVisibility = useChangeVis();
  return {
    passwordVisibility,
    submitPasVisibility,
  };
};

export default useData;
