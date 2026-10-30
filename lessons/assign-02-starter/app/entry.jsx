import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

import Header from '../components/Header';

export default function Index() {
  const router = useRouter();

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Header>Gig App - Gig Entry</Header>
        <View style={styles.fieldset}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date</Text>
            <TextInput style={styles.input} placeholder="01-09-2026" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} placeholder="What was the job?" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Category</Text>
            <TextInput style={styles.input} placeholder="Choose a category" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Value</Text>
            <TextInput
              style={styles.input}
              placeholder="How much was earned?"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Rating</Text>
            <TextInput
              style={styles.input}
              placeholder="Level of satisfaction"
            />
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
  links: {
    marginTop: 8,
  },
  input: {
    borderWidth: 2,
  },
  inputGroup: {
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  link: {
    backgroundColor: 'rgb(28, 88, 128)',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
    text: { fontWeight: 'bold', fontSize: 16, color: '#fff' },
  },
});
