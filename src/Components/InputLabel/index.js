import React, { useState } from 'react';
import * as S from './styled';

function InputLabel(props) {
  const [userInput, setUserInput] = useState('');

  return (
    <S.Container>
      <label>
        <S.P>{props.title}</S.P>
        <S.Input type={props.type} value={userInput} placeholder={props.placeholder} onChange={e => setUserInput(e.target.value)} />
      </label>
    </S.Container>
  );
}

export default InputLabel;