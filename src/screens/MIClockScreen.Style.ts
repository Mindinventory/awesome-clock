import {StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: Colors.black,
    fontWeight: 'bold',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handle: {
    backgroundColor: Colors.darkGray,
    borderRadius: 3,
    height: 4,
    marginTop: 9,
    width: 40,
  },
  handleContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  bottomSheet: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  },
  headerView: {
    padding: 10,
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  zoneListView: {
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  sectionContainer: {
    marginHorizontal: 10,
  },
  zoneText: {
    fontSize: 15,
  },
  fixClockView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  Circle: {
    position: 'absolute',
  },
  centerCircle: {
    position: 'absolute',
  },
  containerStyle1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 20,
  },
  containerStyle2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 20,
  },
});
