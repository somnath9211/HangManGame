import { useContext, useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";
import { wordContext } from "../../Context/WordContext";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const naviGator = useNavigate();

  const { word, setHint, setWord } = useContext(wordContext);

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log("Text Submited", word);
    naviGator("/play");
  }

  function textInputChangeHandler(event) {
    console.log(event.target.value);
    setWord(event.target.value);
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
