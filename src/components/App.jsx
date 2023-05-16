import { Profile } from './Profile/Profile';
import { StatisticsList } from './StatisticsList/StatisticsList';
import user from '../user.json';
import data from '../data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <StatisticsList items={data} />
    </>
  );
};
