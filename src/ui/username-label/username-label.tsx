import { CSSProperties } from 'react'; 
import { styled } from 'styled-components';

type UserNameLabelProps = {
  username: string;
  styles?: CSSProperties;
};

export const UserNameLabel: React.FC<UserNameLabelProps> = (props: UserNameLabelProps) => {
    const shortName = props.username.split(' ')[0].charAt(0) + props.username.split(' ')[1].charAt(0);
  return (
    <UsernameLabelWrapper style={props.styles}>
        <UsernameLabel>{shortName}</UsernameLabel>
      {props.username}
    </UsernameLabelWrapper>
  );
};


const UsernameLabelWrapper = styled.div`
  width: 170px;
  padding: 10px 15px;
  font-weight: 600;
  background-color: #2536a7;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UsernameLabel = styled.div`
  width: 35px;
  height: 35px;
  padding: 5px;
  font-weight: 600;
  border-radius: 2px;
  background-color: #5463ca;
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
`;
