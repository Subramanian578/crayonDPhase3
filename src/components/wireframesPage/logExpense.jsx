import {StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import TaskDetailHeader from '../metanasUI/taskDetailHeader';
import ExpenseModal from './expenseModal';
import Addicon from '../../assets/icons/addicon';

export default function Logexpense() {
  const [modalVisible, setModalVisible] = useState(false);
  const [expenses, setExpenses] = useState([
    {name: 'Expense name', date: '04/09/23', amount: '1050'},
    {name: 'Note buying', date: '01/09/23', amount: '241'},
  ]);

  const handleAddIconClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmitExpense = expense => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
    handleCloseModal();
  };

  const Separator = () => <View style={styles.divider} />;
  const formatCount = count => {
    return count < 10 ? `0${count}` : count.toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TaskDetailHeader
          title={'Log expense'}
          count={formatCount(expenses.length)}
        />
        <View style={styles.iconContainer} onTouchEnd={handleAddIconClick}>
          <Addicon />
        </View>
      </View>
      <View style={{paddingBottom: 15}}></View>

      <ExpenseModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onSubmit={handleSubmitExpense}
      />

      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.expenseDetailsContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <View style={styles.dot} />
            <Text style={styles.rowText}>{item.date}</Text>
            <View style={styles.dot} />
            <Text style={styles.rowText}>{item.amount} AED</Text>
          </View>
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
