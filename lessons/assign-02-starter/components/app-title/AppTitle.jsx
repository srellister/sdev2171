import { StyleSheet, Text, View } from 'react-native';

const AppTitle = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Gig Economy Tracker</Text>
    </View>
  );
};

export default AppTitle;

const styles = StyleSheet.create({
  header: {
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
