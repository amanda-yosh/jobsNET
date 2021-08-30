import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  max-width: 991px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #818B35;

  h1 {
    margin: 1rem;
    font-size: 26px;
    font-family: 'Besley', serif;
  }
`

export const A = styled(Link)`
  text-decoration: none;

  padding: 1rem;
  margin: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #000;

  &:hover {
    cursor: pointer;
    color: #FFF;
  }
`