import { styled } from 'styled-components';

export const MiddlePostCardWrapper = styled.div`
  width: 350px;
  background-color: #f3f3f3;
  padding: 25px 20px;
  border-bottom: 1px solid #8B8A90;
  display: flex;
  flex-direction:column;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction:column;
`;

export const PostCardDate = styled.div`
color: #8B8A90;
font-size: 14px;
`;

export const PostCardTitle = styled.h3`
color: #403F44;
line-height: 26px;

`;

export const CardImageWrapper = styled.div`
  width: 90%;
  height: 180px;
  margin: auto;
  margin-bottom: 15px;
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
width: 20%;
display: flex;
justify-content: space-between;
font-size: 20px;
`;
export const SaveIcoonWrapper = styled.div`
width: 20%;
display: flex;
justify-content: space-between;
font-size: 20px;
`;
