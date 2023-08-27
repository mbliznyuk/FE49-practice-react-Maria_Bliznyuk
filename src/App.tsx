import './App.css';
import { Button } from './ui/button/button';
import { Title } from './ui/title/title';
import { Bar } from './features/header/header';
import { Tabs } from './ui/tabs/tab';
import { BigPostCard } from './ui/post_card/big_post_card/big_post_card';
import { postCardModels, tabsModels } from './mocked-data';
import { MiddlePostCard } from './ui/post_card/middle_post_card/middle_post_card';

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
      <BigPostCard postCard={postCardModels[0]} ></BigPostCard>
      <MiddlePostCard postCard={postCardModels[1]}></MiddlePostCard>

    </>
  );
}

export default App;
