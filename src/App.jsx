import './App.css'
import { useState } from 'react'

function CalcDisplay({dispValue}) {
  
  return (
    <div className="CalcDisplay">
      {dispValue}
    </div>
  )
    
}

function CalcButton({label, buttonClassName, onClick}) {
  
  return (
    <button 
      className={buttonClassName || "CalcButton"} 
      onClick={onClick}
    >
      {label}
    </button> 
  )
    
}

function App() {

  const[disp, setDisp] = useState(0);

  // Added
  const [num1, setNum1] = useState(null);
  const [operator, setOperator] = useState(null);

  const onClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerText;

    // Number
    if (!isNaN(value)) {
      setDisp(disp === 0 ? Number(value) : Number(String(disp) + value));
    }

    // Clear
    else if (value === 'CLR') {
      setDisp(0);
      setNum1(null);
      setOperator(null);
    }

    // Operator
    else if (value === '+' || value === '-' || value === 'X' || value === '÷') {
      setNum1(disp);
      setOperator(value);
      setDisp(0);
    }

    // Equal
    else if (value === '=') {
      let answer = 0;

      if (operator === '+') {
        answer = num1 + disp;
      }
      else if (operator === '-') {
        answer = num1 - disp;
      }
      else if (operator === 'X') {
        answer = num1 * disp;
      }
      else if (operator === '÷') {
        answer = num1 / disp;
      }

      setDisp(answer);
      setNum1(null);
      setOperator(null);
    }
  }

  return (
    <div className='App'>
      <div className='Header'>
        Calculator of John Lloyd Mariano - DA3A
      </div>

      <div className='Calculator'>
        <CalcDisplay dispValue={disp}/>

        <div className='CalcButtons'>
          <CalcButton label={'7'} onClick={onClickHandler}/>
          <CalcButton label={'8'} onClick={onClickHandler}/>
          <CalcButton label={'9'} onClick={onClickHandler}/>
          <CalcButton label={'÷'} onClick={onClickHandler}/>

          <CalcButton label={'4'} onClick={onClickHandler}/>
          <CalcButton label={'5'} onClick={onClickHandler}/>
          <CalcButton label={'6'} onClick={onClickHandler}/>
          <CalcButton label={'X'} onClick={onClickHandler}/>

          <CalcButton label={'1'} onClick={onClickHandler}/>
          <CalcButton label={'2'} onClick={onClickHandler}/>
          <CalcButton label={'3'} onClick={onClickHandler}/>
          <CalcButton label={'-'} onClick={onClickHandler}/>

          <CalcButton label={'CLR'} buttonClassName={"ClearButton"} onClick={onClickHandler}/>
          <CalcButton label={'0'} onClick={onClickHandler}/>
          <CalcButton label={'='} onClick={onClickHandler}/>
          <CalcButton label={'+'} onClick={onClickHandler}/>

        </div>
      </div>
    </div>
  )
}

export default App
