import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ResultsTable } from './src/screens/ResultsTable/ResultsTable';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <ResultsTable />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
