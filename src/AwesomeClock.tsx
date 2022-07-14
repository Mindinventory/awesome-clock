// @ts-ignore
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MiClockScreen from './screens/MIClockScreen';

const AwesomeClock = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <MiClockScreen />
    </GestureHandlerRootView>
  );
};

export default AwesomeClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
