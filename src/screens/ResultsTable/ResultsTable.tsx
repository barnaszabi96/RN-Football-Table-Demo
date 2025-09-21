import { SafeAreaView } from 'react-native-safe-area-context';
import { Table } from '../../components/Table/Table';
import { Text } from 'react-native';
import { styles } from './ResultsTable.styles';

export const ResultsTable: React.FC = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.screenLabel}>Table Screen</Text>
      <Table />
    </SafeAreaView>
  );
};
