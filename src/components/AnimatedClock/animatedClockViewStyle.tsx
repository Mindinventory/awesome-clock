import { StyleSheet } from 'react-native';

export const animatedClockViewStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  minuteText: {
    fontSize: 20,
    includeFontPadding: false,
    textAlign: 'center',
  },
  textViewContainer: {
    borderRadius: 5,
    width: 10,
    height: 10,
  },
  hourText: {
    position: 'absolute',
    includeFontPadding: false,
    textAlign: 'center',
  },
  selectView: {
    position: 'absolute',
    flexDirection: 'row',
    top: 50,
  },
  countrySelectBtn: {
    marginHorizontal: 20,
    height: 40,
    borderRadius: 2,
    borderWidth: 1,
    shadowOffset: { width: 0.1, height: 0.1 },
    shadowOpacity: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  countryText: {
    fontSize: 20,
    fontWeight: '600',
  },
  countryZoneSelectBtn: {
    borderRadius: 2,
    borderWidth: 0.5,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
});
