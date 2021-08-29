import * as S from './styled';

export default function Header() {
  return (
    <S.Header>
      <h1>JobsNET</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/cadastro">Cadastre-se</a>
      </nav>
    </S.Header>
  );
}