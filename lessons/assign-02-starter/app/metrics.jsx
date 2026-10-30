import { Text, View, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

import Header from '../components/Header';

export default function Index() {
  const router = useRouter();

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Header>Gig App - Gig Metrics</Header>
        <View style={styles.grid}>
          <View style={styles.card}>
            <Text>Total Gigs</Text>
          </View>
          <View style={styles.card}>
            <Text>Total Earnings</Text>
          </View>
          <View style={styles.card}>
            <Text>Average Rating</Text>
          </View>
          <View style={styles.card}>
            <Text>Category</Text>
          </View>
        </View>
        <View style={styles.links}>
          <Pressable style={styles.link} onPress={() => router.back()}>
            <Text style={styles.link.text}>Go to Home</Text>
          </Pressable>
        </View>
      </View>
    </>
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
  card: {
    alignSelf: 'flex-start',
    borderWidth: 2,
    padding: 4,
    height: 140,
    marginBottom: 8,
    marginHorizontal: '1%',
    minWidth: '48%',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  links: {
    marginTop: 8,
  },
  link: {
    backgroundColor: 'rgb(28, 88, 128)',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
    text: { fontWeight: 'bold', fontSize: 16, color: '#fff' },
  },
});
