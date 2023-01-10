import PropTypes from 'prop-types';
import {
  ProfileBlock,
  Image,
  Location,
  Name,
  Tag,
  ProfileInfo,
  List,
  ListItem,
} from './Profile.styled';
export const Profile = ({
  user: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileBlock>
      <ProfileInfo>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileInfo>
      <List>
        <ListItem>
          <span>Followers</span>
          <span>{followers}</span>
        </ListItem>
        <ListItem>
          <span>Views</span>
          <span>{views}</span>
        </ListItem>
        <ListItem>
          <span>Likes</span>
          <span>{likes}</span>
        </ListItem>
      </List>
    </ProfileBlock>
  );
};
Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
