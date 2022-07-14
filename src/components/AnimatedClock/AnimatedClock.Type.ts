import type { ViewStyle } from 'react-native';

type countryName = 'Asia/Kolkata' | 'America/New_York';

export interface AnimatedClockViewProps {
  countryZoneName?: string;
  countryZoneVisible?: boolean;
  circleSize: number;
  minuteCircleColor?: string;
  minuteTextColor?: string;
  gradientLinesColor1?: string;
  gradientLinesColor0?: string;
  secondCircleColor?: string;
  secondTextColor?: string;
  hourCircleBackgroundColor?: string;
  hourTextColor?: string;
  clockLinesHeightWidth?: number;
  minuteCircleStyles?: ViewStyle;
  hourCircleStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}
export interface AnimatedMinuteClockProps {
  countryZoneName?: countryName;
  circleSize?: number;
  minuteCircleStyles?: ViewStyle;
  hourCircleStyle?: ViewStyle;
  countryZoneVisible?: ViewStyle;
}
