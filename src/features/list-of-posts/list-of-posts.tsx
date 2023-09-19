import { BigPostCard } from '../../ui/post_card/big_post_card/big_post_card';
import { MiddlePostCard } from '../../ui/post_card/middle_post_card/middle_post_card';
import { PostCardModel } from '../../ui/post_card/post-card.model';
import { SmallPostCard } from '../../ui/post_card/small_post_card/small_post_card';
import { styled } from 'styled-components';


type ListOfPostsProps = {
  postCards: PostCardModel[];
};

export const ListOfPosts: React.FC<ListOfPostsProps> = (
  props: ListOfPostsProps
) => {
  return (
    <ListOfPostsWrapper>
      <LeftWrapperOfPosts>
        <LeftWrapperForBigCard>
          <BigPostCard postCard={props.postCards[0]}></BigPostCard>
        </LeftWrapperForBigCard>
        <LeftWrapperForMiddleCard>
          <MiddlePostCard postCard={props.postCards[1]}></MiddlePostCard>
          <MiddlePostCard postCard={props.postCards[3]}></MiddlePostCard>
          <MiddlePostCard postCard={props.postCards[4]}></MiddlePostCard>
          <MiddlePostCard postCard={props.postCards[5]}></MiddlePostCard>
        </LeftWrapperForMiddleCard>
      </LeftWrapperOfPosts>
      <RightWrapperOfPosts>
        <SmallPostCard postCard={props.postCards[2]}></SmallPostCard>
        <SmallPostCard postCard={props.postCards[6]}></SmallPostCard>
        <SmallPostCard postCard={props.postCards[7]}></SmallPostCard>
        <SmallPostCard postCard={props.postCards[8]}></SmallPostCard>
        <SmallPostCard postCard={props.postCards[9]}></SmallPostCard>
        <SmallPostCard postCard={props.postCards[10]}></SmallPostCard>
      </RightWrapperOfPosts>
    </ListOfPostsWrapper>
  );
};

const ListOfPostsWrapper = styled.div`
display: flex;
background-color: #f3f3f3;
margin-bottom: 20px;
width: 1060px;
justify-content: space-between;
`;

const LeftWrapperOfPosts = styled.div`
`;

const LeftWrapperForBigCard = styled.div`
width: 650px;
`;

const LeftWrapperForMiddleCard = styled.div`
display: flex;
flex-wrap: wrap;
width: 650px;
justify-content: space-between;
`;

 const RightWrapperOfPosts = styled.div`
`