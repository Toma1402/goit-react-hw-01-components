export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li>
    <span>{isOnline}</span>
    <img src={avatar} alt={name} width="30" />
    <p>{name}</p>
  </li>
);
