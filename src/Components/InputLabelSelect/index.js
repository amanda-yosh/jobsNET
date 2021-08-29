import React, { useState } from 'react';

function InputLabelSelect(props) {
  const [userInput, setUserInput] = useState('');

  return (
    <label>
      <p>{props.title}</p>
      <select value={userInput} onChange={e => setUserInput(e.target.value)}>
        <option value="Solteire">Solteire</option>
        <option value="Casade">Casade</option>
        <option value="Viúve">Viúve</option>
        <option value="Separade">Separade</option>
      </select>
    </label>
  );
}

export default InputLabelSelect;