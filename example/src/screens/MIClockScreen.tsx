/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';
import { styles } from './MIClockScreen.Style';
import { AwesomeClockView } from '@mindinventory/awesome-clock';

const MiClockScreen = () => {
  const countryZoneName = 'Asia/Kolkata';
  const circleSize = 300;
  const smallCircleSize = 150; //change value here
  const clockLinesHeightWidth = smallCircleSize + 25;

  return (
    <View style={[{ flex: 1 }, styles.container]}>
      <AwesomeClockView
        circleSize={circleSize}
        minuteCircleStyles={styles.Circle}
        hourCircleStyle={styles.centerCircle}
        countryZoneName={countryZoneName}
        countryZoneVisible={false}
      />
      <View style={styles.fixClockView}>
        <AwesomeClockView
          countryZoneName={'Asia/Tokyo'}
          countryZoneVisible={true}
          circleSize={smallCircleSize}
          minuteCircleStyles={styles.Circle}
          hourCircleStyle={styles.centerCircle}
          clockLinesHeightWidth={clockLinesHeightWidth}
          containerStyle={styles.containerStyle1}
          hourCircleBackgroundColor="orange"
          secondCircleColor="grey"
          minuteCircleColor="orange"
          gradientLinesColor0="orange"
          gradientLinesColor1="orange"
          hourTextColor="white"
          minuteTextColor="blue"
        />
        <AwesomeClockView
          circleSize={smallCircleSize}
          clockLinesHeightWidth={clockLinesHeightWidth}
          containerStyle={styles.containerStyle2}
          minuteCircleStyles={styles.Circle}
          hourCircleStyle={styles.centerCircle}
          countryZoneVisible={true}
          countryZoneName={'America/New_York'}
          hourCircleBackgroundColor="blue"
          secondCircleColor="grey"
          minuteCircleColor="blue"
          gradientLinesColor0="blue"
          gradientLinesColor1="blue"
          hourTextColor="white"
          minuteTextColor="blue"
        />
      </View>
    </View>
  );
};

export default MiClockScreen;
