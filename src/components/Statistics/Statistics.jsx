import { Stats } from './Stats';
export const Statistics = ({ stats }) => (
  <div>
    <h2>Upload Stats</h2>
    <ul>
      {stats.map(stat => (
        <Stats key={stat.id} label={stat.label} percentage={stat.percentage} />
      ))}
    </ul>
  </div>
);
