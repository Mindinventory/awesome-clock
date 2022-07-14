import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

export const animatedClockViewStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  minuteText: {
    fontSize: 20,
    color: Colors.pink,
    includeFontPadding: false,
    textAlign: 'center',
  },
  textViewContainer: {
    borderRadius: 5,
    width: 10,
    height: 10,
    backgroundColor: Colors.green,
  },
  hourText: {
    position: 'absolute',
    includeFontPadding: false,
    color: Colors.white,
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
    borderColor: Colors.green,
    shadowOffset: {width: 0.1, height: 0.1},
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.pink,
  },
  countryText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '600',
  },
  countryZoneSelectBtn: {
    borderRadius: 2,
    borderWidth: 0.5,
    shadowOffset: {width: 5, height: 5},
    shadowColor: Colors.black,
    shadowOpacity: 0.5,
  },
});
