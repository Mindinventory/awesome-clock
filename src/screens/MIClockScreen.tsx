/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';
import { useMIClockContext } from '../context/useMIClockContext';
import AnimatedClockView from '../components/AnimatedClock/AnimatedClockView';
import { styles } from './MIClockScreen.Style';
import type { AnimatedMinuteClockProps } from 'src/components/AnimatedClock/AnimatedClock.Type';

const MiClockScreen = (props: AnimatedMinuteClockProps) => {
  const { countryZoneName = 'Asia/Kolkata' } = props;

  const { miStyle } = useMIClockContext();
  const circleSize = 300;
  const smallCircleSize = 150; //change value here
  const clockLinesHeightWidth = smallCircleSize + 25;

  return (
    <View style={[{ flex: 1 }, miStyle.animatedClockViewStyle.container]}>
      <AnimatedClockView
        circleSize={circleSize}
        minuteCircleStyles={styles.Circle}
        hourCircleStyle={styles.centerCircle}
        countryZoneName={countryZoneName}
        countryZoneVisible={false}
      />
      <View style={styles.fixClockView}>
        <AnimatedClockView
          countryZoneName={'Asia/Tokyo'}
          countryZoneVisible={true}
          circleSize={smallCircleSize}
          minuteCircleStyles={styles.Circle}
          hourCircleStyle={styles.centerCircle}
          clockLinesHeightWidth={clockLinesHeightWidth}
          containerStyle={styles.containerStyle1}
        />
        <AnimatedClockView
          circleSize={smallCircleSize}
          clockLinesHeightWidth={clockLinesHeightWidth}
          containerStyle={styles.containerStyle2}
          minuteCircleStyles={styles.Circle}
          hourCircleStyle={styles.centerCircle}
          countryZoneVisible={true}
          countryZoneName={'America/New_York'}
        />
      </View>
    </View>
  );
};

export default MiClockScreen;
