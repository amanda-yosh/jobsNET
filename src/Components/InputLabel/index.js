import React, { useState } from 'react';
import * as S from './styled';

function InputLabel(props) {
  const [userInput, setUserInput] = useState('');

  return (
    <S.Container>
      <label>
        <p>{props.title}</p>
        <S.Input type={props.type} value={userInput} placeholder={props.placeholder} onChange={e => setUserInput(e.target.value)} />
      </label>
    </S.Container>
  );
}

export default InputLabel;