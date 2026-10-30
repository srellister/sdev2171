import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import NavLink from '../components/NavLink';
import AppTitle from '../components/app-title/AppTitle';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <AppTitle />
        <Header>Gig App Home</Header>
        <Text style={styles.tagLine}>Manage and evaluate your gigs!</Text>
        <View style={styles.links}>
          <NavLink href="entry">Enter a new Job</NavLink>
          <NavLink href="metrics">View gig metrics</NavLink>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 12,
  },
  safeArea: {
    flex: 1,
  },
  links: {
    marginTop: 8,
  },
  tagLine: { textAlign: 'center', fontWeight: 'bold' },
});
