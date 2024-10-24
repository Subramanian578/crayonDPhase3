import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: 'rgb(0,0,0,0.5)',
  },
  ordercss: {
    color: 'grey',
    fontWeight: '900',
  },
  rowText: {
    color: 'rgb(106, 113, 117)',
  },
  boxes: {
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    color: 'rgb(78, 88, 94)',
    fontSize: 14,
    fontWeight: '900',
  },
  separator: {
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 5,
  },
  noDataContainer: {
    flex: 1,
    marginTop: 15,
  },
  noDataText: {
    fontSize: 16,
    color: '#666',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'grey',
    marginHorizontal: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expenseDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expenseName: {
    fontSize: 16,
    color: '#333',
  },
  expenseDate: {
    fontSize: 14,
    color: '#666',
  },
  expenseAmount: {
    fontSize: 16,
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgb(217, 219, 221)',
    marginVertical: 15,
  },
});
    