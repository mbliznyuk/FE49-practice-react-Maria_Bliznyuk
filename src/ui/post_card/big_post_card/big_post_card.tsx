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
  postCardIconStyle,
} from './big_post_card.styles';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import 'font-awesome/css/font-awesome.min.css';


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
        <FontAwesomeIcon icon={icon({name: 'bookmark'})} />
          <FontAwesomeIcon icon={faEllipsisH} />
        </SaveIcoonWrapper>
      </IconWrapper>
    </BigPostCardWrapper>
  );
};
