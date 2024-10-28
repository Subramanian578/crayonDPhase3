import {StyleSheet, View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import TaskDetailHeader from '../../metanasUI/taskdetailsComp/taskDetailHeader';
import ExpenseModal from './ExpenseModal';
import Addicon from '../../../assets/icons/addicon';
import {useDispatch, useSelector} from 'react-redux';
import {addExpense as addExpenseToRedux} from '../../../redux/store/ExpenseSlice';
import useExpenseStore from '../../../zustand/useExpenseStore';
import {styles} from './LogexpenseStyle';

export default function Logexpense() {
  const [modalVisible, setModalVisible] = useState(false);

  // Redux state and dispatch
  const expenses = useSelector(state => state.expenses);
  const dispatch = useDispatch();

  // Zustand actions
  const addExpenseToZustand = useExpenseStore(state => state.addExpense);

  const handleAddIconClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmitExpense = expense => {
    dispatch(addExpenseToRedux(expense)); // Redux
    addExpenseToZustand(expense); // Zustand
    handleCloseModal();
  };

  const Separator = () => <View style={styles.divider} />;
  const formatCount = count => (count < 10 ? `0${count}` : count.toString());

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TaskDetailHeader
          title="Log expense"
          count={formatCount(expenses.length)}
        />
        <View style={styles.iconContainer} onTouchEnd={handleAddIconClick}>
          <Addicon />
        </View>
      </View>
      <View style={{paddingBottom: 15}} />

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
            <Text style={styles.rowText}>
              {item.amount} {item.currency}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}
