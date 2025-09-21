import { Text, View } from 'react-native';
import { CellProps } from './Cell.types';
import { styles } from './Cell.styles';

export const Cell: React.FC<CellProps> = ({ content, width }) => {
  return (
    <View style={[styles.cellContainer, { width: width || 40 }]}>
      <Text style={styles.cellText}>{content}</Text>
    </View>
  );
};
