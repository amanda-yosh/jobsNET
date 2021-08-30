import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 991px;
  height: 5rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    display: inline;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
  }
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