import {StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import TaskDetailHeader from '../../metanasUI/taskdetailsComp/taskDetailHeader';
import ExpenseModal from './ExpenseModal';
import Addicon from '../../../assets/icons/addicon';
import { styles } from './LogexpenseStyle';

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
      <View st yle={styles.headerContainer}>
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
