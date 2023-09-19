import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CSSProperties, useState } from 'react';
import { UserNameLabel } from '../../ui/username-label/username-label';
import { Search } from './search';
import styled from 'styled-components';

type BarProps = {};

export const bottomUsernameLabelStyle: CSSProperties = {
  borderTop: '1px solid #5463CA',
};

export const Bar: React.FC<BarProps> = (props: BarProps) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const userName = 'Artem Malkin';

  return (
    <>
      <HeaderWrapper>
        <Burger onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
          {isBurgerOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </Burger>
        <Search isActive={!isBurgerOpen}></Search>
        <UserNameLabel username={userName}></UserNameLabel>
      </HeaderWrapper>
      {isBurgerOpen && (
        <UserNameLabel
          username={userName}
          styles={bottomUsernameLabelStyle}
        ></UserNameLabel>
      )}
    </>
  );
};


 const HeaderWrapper = styled.div`
  background-color: #2536a7;
  height: 60px;
  display: flex;
`;

 const Burger = styled.div`
  width: 40px;
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #5463ca;
  cursor: pointer;
`;


