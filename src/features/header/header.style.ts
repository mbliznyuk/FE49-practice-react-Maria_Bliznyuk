import { styled } from 'styled-components';
import { CSSProperties } from 'react';

export const HeaderWrapper = styled.div`
  background-color: #2536a7;
  height: 60px;
  display: flex;
`;

export const Burger = styled.div`
  width: 40px;
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #5463ca;
  cursor: pointer;
`;

export const SearchIconWrapper = styled.div`
  width: 40px;
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #5463ca;
  border-right: 1px solid #5463ca;
`;

export const SearchInput = styled.input`
  width: 80%;
  background-color: #5463ca;
  outline: none;
  border: 1px solid transparent;
  padding: 0 15px;
  color: white;
  &::placeholder {
    color: white;
    opacity: 0.6;
  }
`;
export const CloseInputIcon = styled.div`
  width: 2%;
  color: white;
  background-color: #5463ca;
  display: flex;
  align-items: center;
`;

export const SearchInputAlternative = styled.div`
  width: 82%;
  padding: 0 15px;
  background-color: #2536a7;
  border: 1px solid transparent;
`;

export const bottomUsernameLabelStyle: CSSProperties = {
  borderTop: '1px solid #5463CA',
};
