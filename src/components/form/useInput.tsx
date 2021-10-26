import React, { useState } from "react";
const useInput = (userInput: {}) => {
  const [inputValue, setInputValue] = useState(userInput);
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setInputValue(event.target.value)
  };
  return [inputValue,handleChange];
};

export default useInput;
