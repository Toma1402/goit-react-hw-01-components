import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li>
    <span></span>
    <img src={avatar} alt={name} />
    <p>{name}</p>
  </li>
);
