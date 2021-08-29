import React, { useState } from 'react';
import * as I from './styled';

function InputLabel(props) {
  const [userInput, setUserInput] = useState('');

  return (
    <label>
      <I.P>{props.title}</I.P>
      <I.Input type={props.type} value={userInput} placeholder={props.placeholder} onChange={e => setUserInput(e.target.value)} />
    </label>
  );
}

export default InputLabel;