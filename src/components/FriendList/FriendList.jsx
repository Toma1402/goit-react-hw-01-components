import { FriendListItem } from './FriendListItem';
export const FriendLis = ({ friends }) => (
  <div>
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
  </div>
);
