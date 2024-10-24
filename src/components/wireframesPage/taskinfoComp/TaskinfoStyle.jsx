import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: 'rgb(0,0,0,0.5)',
  },
  desc: {
    color: 'rgb(106, 113, 117)',
    paddingTop: 15,
    fontSize: 12,
    paddingBottom: 5,
  },
  ordercss: {
    color: 'grey',
    fontWeight: '900',
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  boxes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 15,
  },
  data: {
    color: 'rgb(78, 88, 94)',
    fontSize: 12,
    fontWeight: '900',
  },
  taskDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  all: {
    color: 'rgb(12, 53, 106)',
  },
  allBox: {
    borderColor: 'rgb(12, 53, 106)',
    borderWidth: 1,
    borderRadius: 5,
  },
});
