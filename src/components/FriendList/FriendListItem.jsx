import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => (
  <ListItem>
    <Status isActive={isOnline}></Status>
    <Avatar src={avatar} alt={name} width="30" />
    <Name>{name}</Name>
  </ListItem>
);
