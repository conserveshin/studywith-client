import { useState } from "react";

function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const onChange = <K extends keyof T>(key: K, value: T[K]): void => {
    setValues({...values, [key]: value })
  };

  const onSubmit = async () => values;

  return { values, onChange, onSubmit };
};

export default useForm;