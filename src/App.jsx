import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [calScreenValue, setCalScreenValue] = useState("");
  const calScreenRef = useRef(null);

  const displayContent = (content) => {
    setCalScreenValue(calScreenValue + content);
  };

  const clearCalScreen = () => {
    setCalScreenValue("");
    calScreenRef.current.placeholder = "0";
  };

  const exprEval = () => {
    try {
      setCalScreenValue(eval(calScreenValue));
    } catch {
      setCalScreenValue("");
      calScreenRef.current.placeholder = "Invalid Expression";
    }
  };

  const removeLastValue = () => {
    setCalScreenValue(calScreenValue.slice(0, -1));
  };

  return (
    <>
      <div className="container">
        <div className="container-fluid bg-dark w-100 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className='bg-warning d-flex justify-content-center align-items-center' style={{ width: '500px', height: '600px' }}>
            <div className="bg-dark text-light" style={{ width: '400px', height: '500px' }}>
              <input className='m-3' type="text" placeholder='0' value={calScreenValue} ref={calScreenRef} style={{ width: '370px', height: '80px' }}/>
              <div className='m-5'>
                <button onClick={clearCalScreen} className='button1'>AC</button>
                <button onClick={removeLastValue} className='button2'>DEL</button>
                <button onClick={() => displayContent('/')} className='button2'>/</button>
                <br />
                <button onClick={() => displayContent('7')} className='button2'>7</button>
                <button onClick={() => displayContent('8')} className='button2'>8</button>
                <button onClick={() => displayContent('9')} className='button2'>9</button>
                <button onClick={() => displayContent('*')} className='button2'>*</button>
                <br />
                <button onClick={() => displayContent('6')} className='button2'>6</button>
                <button onClick={() => displayContent('5')} className='button2'>5</button>
                <button onClick={() => displayContent('4')} className='button2'>4</button>
                <button onClick={() => displayContent('+')} className='button2'>+</button>
                <br />
                <button onClick={() => displayContent('3')} className='button2'>3</button>
                <button onClick={() => displayContent('2')} className='button2'>2</button>
                <button onClick={() => displayContent('1')} className='button2'>1</button>
                <button onClick={() => displayContent('-')} className='button2'>-</button>
                <br />
                <button onClick={() => displayContent('0')} className='button2'>0</button>
                <button onClick={() => displayContent('.')} className='button2'>.</button>
                <button onClick={exprEval} className='button1'>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;