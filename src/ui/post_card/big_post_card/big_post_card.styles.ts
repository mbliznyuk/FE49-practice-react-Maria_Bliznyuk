import { styled } from 'styled-components';

export const BigPostCardWrapper = styled.div`
  width: 500px;
  background-color: #f3f3f3;
  padding: 25px 20px;
  border-bottom: 1px solid #8B8A90;
`;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardtextWrapper = styled.div`
width: 60%;
`;
export const PostCardDate = styled.div`
color: #8B8A90;
font-size: 14px;
`;

export const PostCardTitle = styled.h2`
color: #403F44;
line-height: 28px
`;

export const PostCardText = styled.div`
color: #8B8A90;
font-size: 14px;
margin-bottom: 30px;
`;

export const CardImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export const IconWrapper = styled.div`
display: flex;
justify-content: space-between;
`;
export const LikeWrapper = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
font-size: 20px;
`;
export const SaveIcoonWrapper = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
font-size: 20px;
`;
