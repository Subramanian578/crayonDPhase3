import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: 'rgb(0,0,0,0.5)',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  label: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  count: {
    color: 'rgb(12, 53, 106)',
    fontWeight: '900',
    fontSize: 14,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  countContainer: {
    backgroundColor: 'rgb(215, 227, 255)',
    borderRadius: 50,
  },
  taskDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
