import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  font-size: 1.6rem;
  background-color: transparent;
  border: 1px solid #000;

  &::placeholder {
    color: #ccc;
  }
`;
