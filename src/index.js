import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as S from './styled';

ReactDOM.render(
  <React.StrictMode>
    <S.All>
      <App />
    </S.All>
  </React.StrictMode>,
  document.getElementById('root')
);
