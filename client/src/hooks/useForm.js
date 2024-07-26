import { useState } from "react";

export function useForm(initValues, submitCallback) {
  const [values, setValues] = useState(initValues);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    submitCallback(values);
  };
  return {
    values,
    changeHandler,
    submitHandler,
  };
}
