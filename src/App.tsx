import './App.css';
import { Button } from './ui/button/button';
import { Title } from './ui/title/title';
import { Bar } from './features/header/header';
import { Tabs } from './ui/tabs/tab';
import { BigPostCard } from './ui/post_card/big_post_card/big_post_card';
import { postCardModels, tabsModels } from './mocked-data';
import { MiddlePostCard } from './ui/post_card/middle_post_card/middle_post_card';
import { SmallPostCardWrapper } from './ui/post_card/small_post_card/small_post_card.styles';
import { SmallPostCard } from './ui/post_card/small_post_card/small_post_card';
import { ListOfPosts } from './features/list-of-posts/list-of-posts';

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
      <div style={{display:'flex', justifyContent:'space-around', backgroundColor:'#f3f3f3', marginBottom:'15px'}}>
      <BigPostCard postCard={postCardModels[0]} ></BigPostCard>
      <MiddlePostCard postCard={postCardModels[1]}></MiddlePostCard>
      <SmallPostCard postCard={postCardModels[2]}></SmallPostCard>
      </div>
      <ListOfPosts postCards={postCardModels}></ListOfPosts>
    </>
  );
}

export default App;
