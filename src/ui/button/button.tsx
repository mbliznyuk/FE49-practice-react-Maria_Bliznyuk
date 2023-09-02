import { styled } from 'styled-components';

type MyFunction = () => void;

type ButtonProps = {
  children: string;
  disabled?: boolean;
  onClick: MyFunction;
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <ButtonWrapper type="button" disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
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
