import { BarWrapper } from './bar.style';
import { Burger } from './bar.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Menu } from './bar.style';
import { useState } from 'react';

type BarProps = {};

export const Bar: React.FC<BarProps> = (props: BarProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <BarWrapper>
        <Burger onClick={() => {setIsOpen(!isOpen)}}>
          <FontAwesomeIcon icon={faBars} />
        </Burger>
      </BarWrapper>
      <div>{'' + isOpen}</div>
      {
        isOpen ? <Menu></Menu> : ''
      }
    </>
  );
};
