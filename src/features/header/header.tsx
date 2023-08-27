import { CloseInputIcon, HeaderWrapper, SearchInputAlternative } from './header.style';
import { Burger } from './header.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { UserNameLabel } from '../../ui/username-label/username-label';
import { SearchIconWrapper } from './header.style';
import { SearchInput } from './header.style';
import { bottomUsernameLabelStyle } from './header.style';

type BarProps = {};

export const Bar: React.FC<BarProps> = (props: BarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userName = 'Artem Malkin';

  return (
    <>
      <HeaderWrapper>
        <Burger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </Burger>
        { isOpen
          ? <SearchInputAlternative></SearchInputAlternative>
          : <><SearchInput placeholder="Search..."></SearchInput><CloseInputIcon><FontAwesomeIcon icon={faXmark} />s</CloseInputIcon></>
        }
        <SearchIconWrapper>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIconWrapper>
        <UserNameLabel username={userName}></UserNameLabel>
      </HeaderWrapper>
      { isOpen &&
        <UserNameLabel
          username={userName}
          styles={bottomUsernameLabelStyle}
        ></UserNameLabel>
      }
    </>
  );
};
