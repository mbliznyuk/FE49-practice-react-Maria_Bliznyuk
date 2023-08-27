import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faBookmark, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { PostCardModel } from '../post-card.model';
import {
  BigPostCardWrapper,
  CardImageWrapper,
  CardtextWrapper,
  IconWrapper,
  LikeWrapper,
  MainWrapper,
  PostCardDate,
  PostCardText,
  PostCardTitle,
  SaveIcoonWrapper,
} from './big_post_card.styles';

type BigPostCardProps = {
  postCard: PostCardModel;
};

export const BigPostCard: React.FC<BigPostCardProps> = (
  props: BigPostCardProps
) => {
  return (
    <BigPostCardWrapper>
      <MainWrapper>
        <CardtextWrapper>
            <PostCardDate>{props.postCard.date}</PostCardDate>
            <PostCardTitle>{props.postCard.title}</PostCardTitle>
            <PostCardText>{props.postCard.text}</PostCardText>
        </CardtextWrapper>
        <CardImageWrapper><img src={props.postCard.image} alt='#'></img></CardImageWrapper>
      </MainWrapper>
      <IconWrapper>
        <LikeWrapper>
        <FontAwesomeIcon icon={faThumbsUp} />
        <FontAwesomeIcon icon={faThumbsDown} />
        </LikeWrapper>
        <SaveIcoonWrapper>
        <FontAwesomeIcon icon={faBookmark} />
        <FontAwesomeIcon icon={faEllipsisH} />
        </SaveIcoonWrapper>
      </IconWrapper>
    </BigPostCardWrapper>
  );
};
