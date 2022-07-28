import type { ViewStyle } from 'react-native';

export interface AnimatedClockViewProps {
  /* to specified country */
  countryZoneName?: string;
  /* to show country */
  countryZoneVisible?: boolean;
  /* to applying country name style*/
  countryZoneNameStyle?: ViewStyle;
  /* to main circle size */
  circleSize: number;
  /* to applying minute circle color */
  minuteCircleColor?: string;
  /* to applying minute text color */
  minuteTextColor?: string;
  /* to applying cut clock color for gradient mixture */
  gradientLinesColor1?: string;
  /* to applying cut clock color for gradient mixture */
  gradientLinesColor0?: string;
  /* to applying second circle color */
  secondCircleColor?: string;
  /* to applying second text colo */
  secondTextColor?: string;
  /* to applying background color for hour circle */
  hourCircleBackgroundColor?: string;
  /* to applying hour text color */
  hourTextColor?: string;
  /* to applying clock line height and width in number */
  clockLinesHeightWidth?: number;
  /* applying for minute circle style */
  minuteCircleStyles?: ViewStyle;
  /*  applying for hour circle style*/
  hourCircleStyle?: ViewStyle;
  /*  applying for main view of clock*/
  containerStyle?: ViewStyle;
}
