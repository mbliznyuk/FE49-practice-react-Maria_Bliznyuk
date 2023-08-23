import { styled } from 'styled-components';

export const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: blue;
  color: white;

  &:disabled {
    cursor: none;
    opacity: 0.67;
    color: grey;
  }
`;
