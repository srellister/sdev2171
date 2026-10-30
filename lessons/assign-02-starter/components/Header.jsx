import { StyleSheet, Text, View } from 'react-native';

const Header = ({ children }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
