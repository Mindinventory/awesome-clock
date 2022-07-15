import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import MiClockScreen from './screens/MIClockScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MiClockScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
