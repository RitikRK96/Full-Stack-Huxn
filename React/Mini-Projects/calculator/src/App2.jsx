import { useState } from 'react'
import './App.css'

function App2() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInputValue('');
    } else if (value === '=') {
      try {
        setInputValue(eval(inputValue).toString());
      } catch {
        setInputValue('Error');
      }
    } else {
      setInputValue(prev => prev + value);
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="display-container">
          <input
            type="text"
            className='display'
            value={inputValue}
            readOnly
          />
        </div>
        <div className="buttons">
          <button className='span-2 clear' onClick={() => handleButtonClick('C')}>C</button>
          <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
          <button className="operator" onClick={() => handleButtonClick('*')}>×</button>

          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button className="operator" onClick={() => handleButtonClick('-')}>−</button>

          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button className="operator" onClick={() => handleButtonClick('+')}>+</button>

          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('00')}>00</button>
          <button className='span-2' onClick={() => handleButtonClick('0')}>0</button>

          <button onClick={() => handleButtonClick('.')}>.</button>
          <button className="equals" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App2