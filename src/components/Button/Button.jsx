import getButtonStyling from "./getButtonStyling";
function Button({text, onClickHandler, styleType = 'primary', type ='button'}){
    return(
        <button
        type={type}
        onClick={onClickHandler}
        className={`px-4 py-2 m-2 text-white ${getButtonStyling(styleType)}`}  
        >
        {text}
        </button>
    )
}

export default Button;

