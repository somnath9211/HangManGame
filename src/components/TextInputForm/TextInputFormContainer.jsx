import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");
  const naviGator = useNavigate();

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log("Text Submited", value);
    if (value) {
      naviGator("/play", { state: { wordSelected: value } });
    }
  }

  function textInputChangeHandler(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  function changeInputType() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }
  return (
    <TextInputForm
      inputType={inputType}
      onSubmitHandler={onSubmitHandler}
      textInputChangeHandler={textInputChangeHandler}
      changeInputType={changeInputType}
    />
  );
}

export default TextInputFormContainer;
