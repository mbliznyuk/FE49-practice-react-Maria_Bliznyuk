import { CSSProperties } from 'react';
import { styled } from 'styled-components';

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

const TitleWrapper = styled.h1`
  all: unset;
  color: black;
  font-size: 50px;
  font-weight: 800;
  background-color: lightgray;
`;
