
function TextInput({type = 'text', lable='Enter your input here', placeholder= 'Enter your input here', onChangeHandler}) {
  return (
    <label >
       <span>{lable}</span>
        <input type= {type} className=' px-4 py-2 border-gray-500 rounded-md w-full ' 
        placeholder={placeholder}
        onChange={onChangeHandler}
        />
    </label>
  )
}

export default TextInput;