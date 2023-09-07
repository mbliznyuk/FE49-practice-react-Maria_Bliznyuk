import './App.css';
import { Button } from './ui/button/button';
import { Title } from './ui/title/title';
import { Bar } from './features/header/header';
import { Tabs } from './ui/tabs/tab';
import { TabModel } from './ui/tabs/tab';

const tabsModels: TabModel[] = [
  { id: 1, name: 'All'},
  { id: 2, name: 'My favorites' },
  { id: 3, name: 'Popular', isDisabled: true  },
];


function App() {
  const onButtonClick = () => {
    console.log(1);
  };
  return (
    <>
    <div>
        <Button onClick={onButtonClick}>OK</Button>
    </div>
      <Title>Sign In</Title>
      <Bar></Bar>
      <Tabs defaultSelectedTabId={3} tabs={tabsModels}></Tabs>

    </>
  );
}

export default App;
