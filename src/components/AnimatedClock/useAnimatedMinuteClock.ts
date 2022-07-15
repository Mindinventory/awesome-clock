import { useMemo, useEffect } from 'react';
import { Platform } from 'react-native';
import {
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  Easing,
  useSharedValue,
} from 'react-native-reanimated';

export const useAnimatedMinuteClock = (
  circleSize: number,
  countryZoneName: string
) => {
  const date = Date.now();
  const Timer = useSharedValue(date);
  const RotateSec = useSharedValue(0);
  const RotateMin = useSharedValue(0);

  const initAngle = 270;
  const minuteDegreeInit = 278;
  const secondDegreeInit = 266.07;
  const circleRadius = circleSize / 2;
  const circleCircumference = Math.PI * circleSize;
  const circleStrokeWidth = circleSize / 30;

  /* Init TextSize */
  const hourTextSize = circleSize / 3.5;
  const minTextSize = circleCircumference / 50;

  /* Init TextPosition */
  const minTextPosition = circleRadius - minTextSize / 2;
  const secondIndicatorPosition = circleRadius - 5;

  /* Init Increment in Angle */
  const minIncr = 6;
  const secondIncr = 6;

  /* Internal Hour circle */
  const internalHourCircleRadius = 80;

  /* Seconds Timer of Clock */
  const secondCircleSize = circleSize / 1.3;
  const secondCircleRadius = secondCircleSize / 2;
  const secondCircleCircumference = Math.PI * secondCircleSize;
  const secondCircleStrokeWidth = secondCircleSize / 15;
  const secondTextSize = circleCircumference / 80;

  const secTextSize = secondCircleCircumference / 80;
  const secTextPosition = circleRadius - secondTextSize / 2;

  /*  Radius For minText */
  const radiusForMinText = circleRadius - circleStrokeWidth / 2;

  /* CircleRadius */
  const internalCircleRadius = circleRadius / 2;
  const circleSecondRadius = secondCircleSize / 2;
  const radiusForSecText = circleSecondRadius - circleStrokeWidth / 2;

  /* milleSecond Indicator*/
  const milliSecondIndicatorPosition = circleRadius - circleSize / 80;

  useEffect(() => {
    let timer: NodeJS.Timer | undefined;
    timer = setInterval(() => {
      Timer.value = Date.now();
    }, 500);

    return () => {
      !!timer && clearInterval(timer);
    };
  }, [Timer]);

  const derivedValue = useDerivedValue(() => {
    const currentTime = new Date(Timer.value);
    const newDate = new Date();

    const currentTimeHours = newDate.toLocaleString('en-US', {
      timeZone: countryZoneName,
      hour12: false,
      hour: '2-digit',
    });
    const currentTimeMinutes = newDate.toLocaleString('en-US', {
      timeZone: countryZoneName,
      hour12: false,
      minute: '2-digit',
    });
    const currentTimeSeconds = newDate.toLocaleString('en-US', {
      timeZone: countryZoneName,
      hour12: false,
      second: '2-digit',
    });

    const hours = currentTimeHours;
    const minute = currentTimeMinutes;
    const second = currentTimeSeconds;
    const milliSecond = currentTime.getMilliseconds();

    const minTextAngle =
      (initAngle + Number(minute) * minIncr) * (Math.PI / 180);

    const minTextXPosition = radiusForMinText * Math.cos(minTextAngle) - 3;
    const minTextYPosition = radiusForMinText * Math.sin(minTextAngle) - 3;

    const getDegreeForMinutes = () => {
      return minuteDegreeInit + Number(minute) * minIncr;
    };
    const degreeForMin = getDegreeForMinutes();

    const rotationDegreeForMinute = Math.round(degreeForMin);

    const secondDegree =
      secondDegreeInit + Number(second) * secondIncr * (Math.PI / 180);

    const secondIndicatorAngle = secondDegree + Number(second) * secondIncr;

    const secondIndicatorXPosition =
      radiusForSecText * Math.cos(secondIndicatorAngle);
    const secondIndicatorYPosition =
      radiusForSecText * Math.sin(secondIndicatorAngle);

    const secondTextAngle =
      (secondDegree + Number(second) * secondIncr) * (Math.PI / 180);

    const secondTextXPosition = radiusForSecText * Math.cos(secondTextAngle);
    const secondTextYPosition = radiusForSecText * Math.sin(secondTextAngle);

    const getDegreeForSeconds = () => {
      return minuteDegreeInit + Number(second) * secondIncr;
    };
    const degreeForSecond = getDegreeForSeconds();

    const rotationDegreeForSecond = Math.round(degreeForSecond);

    const millSecondDegreeInit = degreeForSecond;

    const milleSecondDegree = millSecondDegreeInit + milliSecond / 1000;

    const milliSecondIndicatorAngle = millSecondDegreeInit * (Math.PI / 180);

    const milliSecondIndicatorXPosition =
      radiusForSecText * Math.cos(milliSecondIndicatorAngle);
    const milliSecondIndicatorYPosition =
      radiusForSecText * Math.sin(milliSecondIndicatorAngle);

    if (rotationDegreeForSecond === 278) {
      RotateSec.value = degreeForSecond;
    } else {
      RotateSec.value = withTiming(rotationDegreeForSecond, {
        duration: 1000,
        easing: Easing.linear,
      });
    }

    if (rotationDegreeForMinute === 278) {
      RotateMin.value = degreeForMin;
    } else {
      RotateMin.value = withTiming(rotationDegreeForMinute, {
        duration: 1000,
        easing: Easing.linear,
      });
    }

    return {
      hours,
      minute,
      second,
      milliSecond,
      minTextXPosition,
      minTextYPosition,
      secondIndicatorXPosition,
      secondIndicatorYPosition,
      secondTextXPosition,
      secondTextYPosition,
      milliSecondIndicatorXPosition,
      milliSecondIndicatorYPosition,
      degreeForMin,
      degreeForSecond,
      rotationDegreeForSecond,
      milleSecondDegree,
      secondDegreeInit,
      secondDegree,
    };
  }, [Timer, countryZoneName]);

  //animated Text Props value change
  const animatedSecondPropsText = useAnimatedProps(() => {
    return {
      text: `${derivedValue.value.second.toString()}`.padStart(2, '0'),
    };
  }, [Timer]);

  const animatedMinutePropsText = useAnimatedProps(() => {
    return {
      text: `${derivedValue.value.minute.toString()}`.padStart(2, '0'),
    };
  }, [Timer]);

  const animatedHourPropsText = useAnimatedProps(() => {
    const text =
      Number(derivedValue.value.hours) > 12
        ? `${Number(derivedValue.value.hours) - 12}`.padStart(2, '0')
        : `${derivedValue.value.hours}`.padStart(2, '0');
    return {
      text: text,
    };
  }, [Timer]);

  //animated style Props value change
  const minuteDuration = 1000;

  const animatedMinuteTextStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: minTextPosition,
      top: minTextPosition,
      transform: [
        {
          translateX: withTiming(derivedValue.value.minTextXPosition, {
            duration: minuteDuration,
            easing: Easing.linear,
          }),
        },
        {
          translateY: withTiming(derivedValue.value.minTextYPosition, {
            duration: minuteDuration,
            easing: Easing.linear,
          }),
        },
      ],
    };
  }, [Timer]);

  const secondDuration = Platform.OS === 'ios' ? 1090 : 1000;
  const animatedSecondTextStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: secTextPosition,
      top: secTextPosition,
      transform: [
        {
          translateX: withTiming(derivedValue.value.secondTextXPosition, {
            duration: secondDuration,
            easing: Easing.linear,
          }),
        },
        {
          translateY: withTiming(derivedValue.value.secondTextYPosition, {
            duration: secondDuration,
            easing: Easing.linear,
          }),
        },
      ],
    };
  }, [Timer]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: RotateSec.value >= 630 ? '278deg' : `${RotateSec.value}deg`,
      },
    ],
  }));

  const animatedMiniuteStyles = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: RotateMin.value >= 630 ? '278deg' : `${RotateMin.value}deg`,
      },
    ],
  }));

  return useMemo(() => {
    return {
      circleSize,
      circleRadius,
      circleCircumference,
      circleStrokeWidth,
      minuteDegreeInit,
      initAngle,
      secondDegreeInit,
      minTextSize,
      hourTextSize,
      minTextPosition,
      secondIndicatorPosition,
      minIncr,
      secondIncr,
      internalHourCircleRadius,
      secondCircleSize,
      secondCircleRadius,
      secondCircleCircumference,
      secondCircleStrokeWidth,
      secondTextSize,
      secTextSize,
      secTextPosition,
      radiusForMinText,
      internalCircleRadius,
      circleSecondRadius,
      radiusForSecText,
      milliSecondIndicatorPosition,
      Timer,
      RotateSec,
      RotateMin,
      animatedMinuteTextStyle,
      animatedSecondTextStyle,
      animatedMiniuteStyles,
      animatedStyles,
      animatedHourPropsText,
      animatedMinutePropsText,
      animatedSecondPropsText,
    };
  }, [
    RotateMin,
    RotateSec,
    Timer,
    animatedHourPropsText,
    animatedMiniuteStyles,
    animatedMinutePropsText,
    animatedMinuteTextStyle,
    animatedSecondPropsText,
    animatedSecondTextStyle,
    animatedStyles,
    circleCircumference,
    circleRadius,
    circleSecondRadius,
    circleSize,
    circleStrokeWidth,
    hourTextSize,
    internalCircleRadius,
    milliSecondIndicatorPosition,
    minTextPosition,
    minTextSize,
    radiusForMinText,
    radiusForSecText,
    secTextPosition,
    secTextSize,
    secondCircleCircumference,
    secondCircleRadius,
    secondCircleSize,
    secondCircleStrokeWidth,
    secondIndicatorPosition,
    secondTextSize,
  ]);
};
