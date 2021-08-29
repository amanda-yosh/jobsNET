import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  height: 1.5rem;
  padding: .5rem;
  font-size: 18px;
  font-family: 'Besley', serif;
  color: #435363;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const P = styled.p`
  display: inline;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
`