import { TitleWrapper } from './title.styles';
import { CSSProperties } from 'react';

type TitleProps = {
  children: string;
  style?: CSSProperties;
};

export const Title: React.FC<TitleProps> = (props: TitleProps) => {
  return (
    <TitleWrapper style={props.style}>
      {props.children}
    </TitleWrapper>
  );
};