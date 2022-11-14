import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [result, setResult] = useState('');

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value))
  }

  const clearDisplay = () => {
    setResult('');
  }

  const calculate = () => {
    setResult(eval(result).toString());
  }
  return (
    <div className='calc'>
      <input type='text' placeholder='0' id='answer' defaultValue={result} />
      <input type='button' defaultValue='9' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='8' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='7' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='6' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='5' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='4' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='3' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='2' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='1' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='0' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='.' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='+' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='-' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='*' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='/' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='%' className='button' onClick={clickHandler} />
      <input type='button' defaultValue='clear' className='button button1' onClick={clearDisplay} />
      <input type='button' defaultValue='=' className='button button1' onClick={calculate} />
    </div>
  )
}
export default App;
