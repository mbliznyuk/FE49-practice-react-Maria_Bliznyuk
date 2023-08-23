import { ButtonWrapper } from './button.styles';

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
