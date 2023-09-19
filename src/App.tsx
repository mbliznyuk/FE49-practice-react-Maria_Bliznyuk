import './App.css';
import { Button } from './ui/button/button';
import { Title } from './ui/title/title';
import { Bar } from './features/header/header';
import { Tabs } from './ui/tabs/tab';
import { BigPostCard } from './ui/post_card/big_post_card/big_post_card';
import { postCardModels, tabsModels } from './mocked-data';
import { MiddlePostCard } from './ui/post_card/middle_post_card/middle_post_card';
import { SmallPostCard } from './ui/post_card/small_post_card/small_post_card';
import { ListOfPosts } from './features/list-of-posts/list-of-posts';
import { useEffect, useState } from 'react';
import { PostCardModel } from './ui/post_card/post-card.model';
import { styled } from 'styled-components';

function App() {
  const [apiModels, setApiModels] = useState<PostCardModel[] | null>(null);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setApiModels(postCardModels);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

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
      <Tabs defaultSelectedTabId={1} tabs={tabsModels}></Tabs>
      <CardContainer>
        <BigPostCard postCard={postCardModels[0]}></BigPostCard>
        <MiddlePostCard postCard={postCardModels[1]}></MiddlePostCard>
        <SmallPostCard postCard={postCardModels[2]}></SmallPostCard>
      </CardContainer>
      {apiModels ? <ListOfPosts postCards={apiModels}></ListOfPosts> : null}
    </>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f3f3f3;
  margin-bottom: 15px;
`;
export default App;
