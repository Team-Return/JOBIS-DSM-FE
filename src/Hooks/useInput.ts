import { useState, useCallback, ChangeEvent } from "react";
type onChangeType = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
const useInput = (initValue = "") => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  }, []);
  return [value, handler, setValue] as [string, onChangeType, typeof setValue];
};
export default useInput;
