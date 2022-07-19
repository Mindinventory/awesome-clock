import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
} from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, {
  Circle,
  Defs,
  G,
  Line,
  LinearGradient,
  Stop,
  Use,
} from 'react-native-svg';
import { useAnimatedMinuteClock } from './useAnimatedMinuteClock';
import { useMIClockContext } from '../../context/useMIClockContext';
import type { AnimatedClockViewProps } from './animatedClock.Type';

// assign the animated props to the TextInput component
type TextInputPropsWithAnimated = TextInputProps & {
  animatedProps?: Partial<Omit<TextInputProps, 'children'> & { text?: string }>;
  text?: string | Animated.Node<string>;
};

const AnimatedTextInput = Animated.createAnimatedComponent(
  TextInput
) as React.ComponentType<TextInputPropsWithAnimated>;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatedClockView = (props: AnimatedClockViewProps) => {
  const circleRef = useRef(null);
  const { miStyle, miColor } = useMIClockContext();
  const {
    countryZoneName = 'Asia/Kolkata',
    countryZoneVisible,
    circleSize,
    clockLinesHeightWidth = 350,
    containerStyle,
    minuteCircleStyles,
    hourCircleStyle,
    hourCircleBackgroundColor = miColor.pink,
    hourTextColor = miColor.white,
    minuteCircleColor = miColor.pink,
    minuteTextColor,
    secondCircleColor = miColor.green,
    secondTextColor,
    countryZoneNameStyle,
    gradientLinesColor1 = miColor.red,
    gradientLinesColor0 = miColor.pink,
  } = props;
  const {
    circleRadius,
    circleCircumference,
    circleStrokeWidth,
    minTextSize,
    hourTextSize,
    secondCircleRadius,
    secondCircleCircumference,
    secondCircleStrokeWidth,
    secondTextSize,
    internalCircleRadius,
    animatedMinuteTextStyle,
    animatedSecondTextStyle,
    animatedMiniuteStyles,
    animatedStyles,
    animatedHourPropsText,
    animatedMinutePropsText,
    animatedSecondPropsText,
  } = useAnimatedMinuteClock(circleSize, countryZoneName);

  return (
    <View style={containerStyle}>
      <View
        style={[
          {
            height: circleSize,
            width: circleSize,
          },
          miStyle.animatedClockViewStyle.container,
        ]}
      >
        <View>
          <Svg
            width={clockLinesHeightWidth}
            height={clockLinesHeightWidth}
            viewBox="-120 -120 240 240"
          >
            <Defs>
              <Line
                x1={0}
                y1={95}
                x2={0}
                y2={84}
                strokeWidth={1.5}
                stroke={'url(#paint0_linear)'}
                id="hourMarker"
              />
              <Line
                x1={0}
                y1={95}
                x2={0}
                y2={84}
                strokeWidth={4}
                stroke={'url(#paint1_linear)'} // stroke={Colors.pink}
                id="hourMarker12"
              />
            </Defs>
            <Defs>
              <LinearGradient
                id="paint0_linear"
                x1={'60%'}
                y1={'100%'}
                x2={'40%'}
                y2={'10%'}
              >
                <Stop
                  offset="1"
                  stopColor={gradientLinesColor1}
                  stopOpacity={1}
                />
                <Stop
                  offset="0"
                  stopColor={gradientLinesColor0}
                  stopOpacity={0}
                />
              </LinearGradient>
              <LinearGradient
                id="paint1_linear"
                x1={'20%'}
                y1={'100%'}
                x2={'20%'}
                y2={'10%'}
              >
                <Stop
                  offset="3"
                  stopColor={gradientLinesColor1}
                  stopOpacity={2}
                />
                <Stop
                  offset="0"
                  stopColor={gradientLinesColor0}
                  stopOpacity={0}
                />
              </LinearGradient>
            </Defs>
            <G id="markerSet">
              <Use xlinkHref="#hourMarker" />
              <Use xlinkHref="#minMarker" transform="rotate(6)" />
              <Use xlinkHref="#minMarker" transform="rotate(12)" />
              <Use xlinkHref="#minMarker" transform="rotate(18)" />
              <Use xlinkHref="#minMarker" transform="rotate(24)" />
            </G>
            <Use xlinkHref="#markerSet" transform="rotate(30)" />
            <Use xlinkHref="#markerSet" transform="rotate(60)" />
            <Use xlinkHref="#markerSet" transform="rotate(90)" />
            <Use xlinkHref="#markerSet" transform="rotate(120)" />
            <Use xlinkHref="#markerSet" transform="rotate(150)" />
            <Use xlinkHref="#hourMarker12" transform="rotate(180)" />
            <Use xlinkHref="#markerSet" transform="rotate(210)" />
            <Use xlinkHref="#markerSet" transform="rotate(240)" />
            <Use xlinkHref="#markerSet" transform="rotate(270)" />
            <Use xlinkHref="#markerSet" transform="rotate(300)" />
            <Use xlinkHref="#markerSet" transform="rotate(330)" />
          </Svg>
        </View>
        <Animated.View
          style={[
            { height: circleSize, width: circleSize },
            minuteCircleStyles,
            animatedMiniuteStyles,
          ]}
        >
          <Svg
            width={circleSize}
            height={circleSize}
            viewBox={`${-(circleStrokeWidth / 2)} ${-(circleStrokeWidth / 2)} ${
              circleSize + circleStrokeWidth
            } ${circleSize + circleStrokeWidth}`}
          >
            <Circle
              r={circleRadius}
              stroke={minuteCircleColor}
              strokeWidth={circleStrokeWidth}
              cx={circleRadius}
              strokeOpacity={0.1}
              cy={circleRadius}
              strokeDasharray={circleCircumference} // Change Gap
              strokeDashoffset={circleCircumference / 21}
              fillRule="nonzero"
            />
          </Svg>
        </Animated.View>
        <Animated.View
          style={[
            {
              height: circleSize,
              width: circleSize,
            },
            hourCircleStyle,
            animatedStyles,
          ]}
        >
          <Svg
            viewBox={`${-(circleStrokeWidth / 2)} ${-(circleStrokeWidth / 2)} ${
              circleSize + circleStrokeWidth
            } ${circleSize + circleStrokeWidth}`}
          >
            <AnimatedCircle
              r={internalCircleRadius}
              cx={circleRadius}
              cy={circleRadius}
              fill={hourCircleBackgroundColor}
            />
          </Svg>
        </Animated.View>
        <Animated.View
          style={[
            {
              height: circleSize,
              width: circleSize,
            },
            hourCircleStyle,
            animatedStyles,
          ]}
        >
          <Svg
            width={circleSize}
            height={circleSize}
            viewBox={`${-(circleStrokeWidth / 2)} ${-(circleStrokeWidth / 2)} ${
              circleSize + circleStrokeWidth
            } ${circleSize + circleStrokeWidth}`}
          >
            <Circle
              ref={circleRef}
              r={secondCircleRadius}
              stroke={secondCircleColor}
              strokeWidth={secondCircleStrokeWidth}
              cx={circleRadius}
              strokeOpacity={0.1}
              cy={circleRadius}
              strokeDasharray={secondCircleCircumference} // Change Gap
              strokeDashoffset={secondCircleCircumference / 20}
              fillRule="nonzero"
            />
          </Svg>
        </Animated.View>
        {/* minuteText inside circle */}
        <Animated.View style={animatedMinuteTextStyle}>
          <AnimatedTextInput
            animatedProps={animatedMinutePropsText}
            underlineColorAndroid="transparent"
            editable={false}
            style={[
              miStyle.animatedClockViewStyle.minuteText,
              {
                fontSize: minTextSize,
                color: minuteTextColor,
              },
            ]}
          />
        </Animated.View>
        {/* secondText inside circle */}
        <Animated.View style={animatedSecondTextStyle}>
          <AnimatedTextInput
            animatedProps={animatedSecondPropsText}
            underlineColorAndroid="transparent"
            editable={false}
            style={[
              miStyle.animatedClockViewStyle.minuteText,
              {
                fontSize: secondTextSize,
                color: secondTextColor,
              },
            ]}
          />
        </Animated.View>
        <AnimatedTextInput
          animatedProps={animatedHourPropsText}
          editable={false}
          style={[
            miStyle.animatedClockViewStyle.hourText,
            {
              fontSize: hourTextSize,
              color: hourTextColor,
            },
          ]}
        />
      </View>
      {countryZoneVisible ? (
        <>
          <Text style={[styles.countryZoneText, countryZoneNameStyle]}>
            {countryZoneName}
          </Text>
        </>
      ) : null}
    </View>
  );
};
export default AnimatedClockView;

const styles = StyleSheet.create({
  countryZoneText: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
});
