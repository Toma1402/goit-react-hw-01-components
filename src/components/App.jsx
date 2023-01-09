import user from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats} />
    </>
  );
};