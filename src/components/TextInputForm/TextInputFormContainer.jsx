import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");
  const [hint, setHint] = useState("");
  const naviGator = useNavigate();

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log("Text Submited", value);
    if (value && hint) {
      naviGator("/play", { state: { wordSelected: value, passHint: hint } });
    }
  }

  function textInputChangeHandler(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }
  function hintChangeHandler(event) {
    console.log(event.target.value);
    setHint(event.target.value);
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
      hintChangeHandler={hintChangeHandler}
    />
  );
}

export default TextInputFormContainer;
