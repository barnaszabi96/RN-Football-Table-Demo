import { View } from 'react-native';
import { mockData } from '../../data/table';
import { RowProps } from './Row.types';
import { Cell } from '../Cell/Cell';
import { styles } from './Row.styles';

export const Row: React.FC<RowProps> = ({ index, item, contentType }) => {
  const isFirst = index === 0;
  const isLastThree = index >= mockData.length - 3;
  const backgroundColor = isFirst
    ? '#697ae7'
    : isLastThree
    ? '#cca03f'
    : '#ffffff';

  return (
    <View style={[styles.rowContainer, { backgroundColor }]}>
      {contentType === 'name' ? (
        <>
          <Cell content={index + 1} />
          <Cell content={item.clubName} width={100} />
        </>
      ) : (
        <>
          <Cell content={item.matchesPlayed} />
          <Cell content={item.wins} />
          <Cell content={item.draws} />
          <Cell content={item.losses} />
          <Cell content={item.goalsScored} />
          <Cell content={item.goalsAgainst} />
          <Cell content={item.goalDifference} />
          <Cell content={item.points} />
          <Cell content={item.lastFive.join(' ')} width={100} />
        </>
      )}
    </View>
  );
};
