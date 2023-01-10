import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
        name={friend.name}
      />
    ))}
  </ul>
);
