
import { StyleSheet, Text, View } from 'react-native';
import MyGoal from './components/MyGoal';

export default function App() {
  return (
    <View style={styles.container}>

      <MyGoal />
      {/* <Text style={styles.text}>Namaig Khuslen gedeg.Bi 15 nastai."Codely academy"-n suragch.Minii anhnii app-n sanaa bol:
     
      </Text>
      <Text style = { styles.text}>
      Tailbar: Eniig Dance Floor gedeg ba bujigledeg huuhduuded mash heregtei.Bujigiin bairlaliig olj
      ugdug app yum.
       s</Text> */}s
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  text: {
    fontSize: 30,
  }
});
