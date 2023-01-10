import { Stats } from './Stats';
import { StatisticsBlock, Title, List } from './Statistics.styled';
export const Statistics = ({ stats }) => (
  <StatisticsBlock>
    <Title>Upload Stats</Title>
    <List>
      {stats.map(stat => (
        <Stats key={stat.id} label={stat.label} percentage={stat.percentage} />
      ))}
    </List>
  </StatisticsBlock>
);
