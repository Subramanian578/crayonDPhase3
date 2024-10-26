import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DownArrow from '../../../assets/icons/downarrow'; // Adjust the import based on your folder structure
import UploadIcon from '../../../assets/icons/uploadIcon'; // Adjust the import based on your folder structure
import RadioButton from './RadioButton'; // Adjust the import based on your folder structure
import CalendarIcon from '../../../assets/icons/calenderIcon'; // Adjust the import based on your folder structure
import { styles } from './ExpenseModalStyle'; // Adjust the import based on your folder structure
import DatePicker from 'react-native-date-picker';

const ExpenseModal = ({ visible, onClose, onSubmit }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [description, setDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [billable, setBillable] = useState(false);
  const [currency, setCurrency] = useState('AED');
  const [category, setCategory] = useState('Education');
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [currentSelection, setCurrentSelection] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const currencies = ['AED', 'INR', 'EUR'];
  const categories = ['Education', 'Food', 'Home', 'Hotels'];

  const toggleBottomSheet = (type) => {
    setCurrentSelection(type);
    setIsBottomSheetVisible(!isBottomSheetVisible);
  };

  const handleSelect = (value) => {
    if (currentSelection === 'Currency') setCurrency(value);
    else setCategory(value);
    setIsBottomSheetVisible(false);
  };

  const handleSubmit = () => {
    const expense = {
      name: expenseName,
      date: expenseDate,
      amount: expenseAmount,
      currency,
      category,
    };
    onSubmit(expense);
    // Reset form fields
    setExpenseName('');
    setExpenseDate('');
    setExpenseAmount('');
    setCurrency('AED');
    setCategory('Education');
    setDescription('');
  };

  const renderOptions = (options) =>
    options.map((item) => (
      <TouchableOpacity key={item} onPress={() => handleSelect(item)}>
        <View
          style={[
            styles.option,
            (currentSelection === 'Currency' && currency === item) ||
            (currentSelection === 'Category' && category === item)
              ? styles.selectedOption
              : null,
          ]}
        >
          <Text
            style={[
              styles.optionText,
              (currentSelection === 'Currency' && currency === item) ||
              (currentSelection === 'Category' && category === item)
                ? styles.selectedOptionText
                : null,
            ]}
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    ));

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Create Expense</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Expense Name<Text style={{ color: 'red' }}> *</Text>
            </Text>
            <TextInput
              placeholder="Enter expense"
              placeholderTextColor="grey"
              value={expenseName}
              onChangeText={setExpenseName}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Date<Text style={{ color: 'red' }}> *</Text>
            </Text>
            <View style={styles.row}>
              <TextInput
                placeholder="Select date"
                placeholderTextColor="grey"
                value={expenseDate}
                onChangeText={setExpenseDate}
                style={[styles.input, { flex: 1 }]}
              />
              <TouchableOpacity onPress={() => setOpen(true)}>
                <CalendarIcon />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.amountcry}>
            <View style={styles.inputContainer1}>
              <Text style={styles.label}>
                Currency<Text style={{ color: 'red' }}> *</Text>
              </Text>
              <TouchableOpacity onPress={() => toggleBottomSheet('Currency')}>
                <View style={styles.row}>
                  <Text style={styles.input}>{currency}</Text>
                  <DownArrow />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer1}>
              <Text style={styles.label}>Amount</Text>
              <TextInput
                placeholder="Enter Amount"
                placeholderTextColor="grey"
                value={expenseAmount}
                onChangeText={setExpenseAmount}
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Category<Text style={{ color: 'red' }}> *</Text>
            </Text>
            <TouchableOpacity onPress={() => toggleBottomSheet('Category')}>
              <View style={styles.row}>
                <Text style={styles.input}>{category}</Text>
                <DownArrow />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.Radiobuttom}>
            <RadioButton
              label="Billable"
              selected={billable}
              onPress={() => setBillable(!billable)}
            />
          </View>

          <View style={styles.inputContainertextfeild}>
            <TextInput
              placeholder="Description"
              placeholderTextColor="grey"
              value={description}
              onChangeText={setDescription}
              style={styles.input}
              multiline
            />
          </View>

          <View style={styles.uploadfile}>
            <View style={styles.Shareicon1}>
              <UploadIcon />
            </View>
            <Text style={styles.uploadtext}>Upload Receipts</Text>
          </View>

          <View style={styles.divider} />
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitButton]}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText1}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Sheet for Currency and Category Selection */}
      {isBottomSheetVisible && (
        <Modal transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select {currentSelection}</Text>
              {renderOptions(
                currentSelection === 'Currency' ? currencies : categories,
              )}
            </View>
          </View>
        </Modal>
      )}

      {/* Date Picker */}
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(selectedDate) => {
          setOpen(false);
          setDate(selectedDate);
          setExpenseDate(selectedDate.toLocaleDateString()); // Format the date as needed
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </Modal>
  );
};

export default ExpenseModal;
