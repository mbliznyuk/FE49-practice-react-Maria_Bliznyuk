import { useState } from 'react';
import { styled } from 'styled-components';

type TabsProps = {
  tabs: TabModel[];
  defaultSelectedTabId?: number;
};

export interface TabModel {
  id: number;
  name: string;
  isDisabled?: boolean;
}

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const [selectedTabId, setSelectedTabId] = useState<number>(props.defaultSelectedTabId || 1);
  return (
    <TabsWrapper>
      {props.tabs.map((element) => (
        <Tab
          onClick={() => setSelectedTabId(element.id)}
          isSelected={element.id === selectedTabId}
          disabled={element.isDisabled}
        >
          {element.name}
        </Tab>
      ))}
    </TabsWrapper>
  );
};


const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #EAEAEA;
  margin-bottom: 30px;
`;

const Tab = styled.button<{isSelected: boolean}>`
  all: unset;
  color: black;
  font-size: 24px;
  font-weight: 600;
  margin: 0 30px;
  padding: 15px 15px;
  border-bottom: 3px solid;
  border-color: ${({isSelected}) =>(isSelected ? '#424147' : 'transparent')};
  cursor: pointer;
  &:hover {
    color: #2436A7;
  }

  &:disabled{
    color: gray;
    cursor: auto;
  }
`;