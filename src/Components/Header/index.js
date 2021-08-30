import * as S from './styled';

export default function Header() {
  return (
    <S.Header>
      <h1>JobsNET</h1>
      <nav>
        <S.A to="/">Home</S.A>
        <S.A to="/cadastro">Cadastre-se</S.A>
      </nav>
    </S.Header>
  );
}