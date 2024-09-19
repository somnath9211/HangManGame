import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  inputType,
  onSubmitHandler,
  textInputChangeHandler,
  changeInputType,
  hintChangeHandler,
}) {
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <TextInput
          type={inputType}
          lable="Enter a Word or a Phrase "
          placeholder="Enter a Word or a Phrase Here..."
          onChangeHandler={textInputChangeHandler}
        />
        <TextInput
          type={inputType}
          lable="Enter Hint "
          placeholder="Enter Hint Here..."
          onChangeHandler={hintChangeHandler}
        />
      </div>
      <div>
        <Button
          text={inputType === "password" ? "Show" : "Hide"}
          styleType="warning"
          onClickHandler={changeInputType}
        />
        <Button type="Submit" text="Submit" styleType="success" />
      </div>
    </form>
  );
}

export default TextInputForm;
