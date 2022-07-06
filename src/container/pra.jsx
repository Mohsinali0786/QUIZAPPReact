import { useRef } from "react";
import ReactDOM from "react-dom/client";
import Button from '@mui/material/Button';
function Pra() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };
  console.log(inputElement)
  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      <Button variant="contained">CLick</Button>
    </>
  );
}

export default Pra