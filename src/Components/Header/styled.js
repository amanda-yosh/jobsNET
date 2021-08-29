import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #818B35;

  h1 {
    margin: 1rem;
    font-size: 26px;
    font-family: 'Besley', serif;
  }

  a {
    padding: 1rem;
    margin: 1rem;
    font-family: 'Montserrat', sans-serif;
  }

  a:nth-child(1) {
    border-right: 3px dotted;
    padding-right: 3rem;
  }
`