import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DownArrow from '../../../assets/icons/downarrow';
import Uploadicon from '../../../assets/icons/uploadIcon';
import RadioButton from './RadioButton';
import Calendericon from '../../../assets/icons/calenderIcon';
import {styles} from './ExpenseModalStyle';

const ExpenseModal = ({visible, onClose, onSubmit}) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [description, setDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [currency, setCurrency] = useState('AED');
  const [category, setCategory] = useState('Education');
  const [isCurrencyDropdownVisible, setIsCurrencyDropdownVisible] =
    useState(false);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] =
    useState(false);

  const [selectedValue, setSelectedValue] = useState(null);

  const handlePress = value => {
    setSelectedValue(prevValue => (prevValue === value ? null : value));
  };

  const handleSubmit = () => {
    const expense = {
      name: expenseName,
      date: expenseDate,
      amount: expenseAmount,
      currency: currency,
      category: category,
    };
    onSubmit(expense);
    setExpenseName('');
    setExpenseDate('');
    setExpenseAmount('');
    setCurrency('AED');
    setCategory('Education');
  };

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownVisible(!isCurrencyDropdownVisible);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  const handleCurrencySelect = selectedCurrency => {
    setCurrency(selectedCurrency);
    setIsCurrencyDropdownVisible(false);
  };

  const handleCategorySelect = selectedCategory => {
    setCategory(selectedCategory);
    setIsCategoryDropdownVisible(false);
  };

  const currencies = ['AED', 'INR', 'EUR'];
  const categories = ['Education', 'Food', 'Home', 'Hotels'];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create Expense</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Expense Name<Text style={{color: 'red'}}> *</Text>
              </Text>
              <TextInput
                placeholder="Enter expense"
                placeholderTextColor={'grey'}
                value={expenseName}
                onChangeText={setExpenseName}
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Date<Text style={{color: 'red'}}> *</Text>
              </Text>
              <View style={styles.row}>
                <TextInput
                  placeholder="Enter date"
                  placeholderTextColor={'grey'}
                  value={expenseDate}
                  onChangeText={setExpenseDate}
                  style={[styles.input, {flex: 1}]}
                />
                <TouchableOpacity>
                  <Calendericon />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.amountcry}>
              <View style={[styles.inputContainer1, {zIndex: 2}]}>
                <Text style={styles.label}>
                  Currency<Text style={{color: 'red'}}> *</Text>
                </Text>
                <TouchableOpacity onPress={toggleCurrencyDropdown}>
                  <View style={styles.row}>
                    <TextInput
                      placeholder="Currency"
                      value={currency}
                      editable={false}
                      style={[styles.input, {flex: 1}]}
                    />
                    <DownArrow />
                  </View>
                </TouchableOpacity>
                {isCurrencyDropdownVisible && (
                  <View style={styles.dropdown}>
                    <FlatList
                      data={currencies}
                      keyExtractor={item => item}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          style={styles.dropdownItem}
                          onPress={() => handleCurrencySelect(item)}>
                          <Text style={styles.dropdownItemText}>{item}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                )}
              </View>

              <View style={styles.inputContainer1}>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                  placeholder="Enter Amount"
                  value={expenseAmount}
                  onChangeText={setExpenseAmount}
                  keyboardType="numeric"
                  style={styles.input}
                />
              </View>
            </View>

            <View style={[styles.inputContainer, {zIndex: 1}]}>
              <Text style={styles.label}>
                Category<Text style={{color: 'red'}}> *</Text>
              </Text>
              <View style={styles.row}>
                <TextInput
                  placeholder="Select Category"
                  placeholderTextColor={'grey'}
                  value={category}
                  editable={false}
                  style={[styles.input, {flex: 1}]}
                />
                <TouchableOpacity onPress={toggleCategoryDropdown}>
                  <DownArrow />
                </TouchableOpacity>
              </View>
              {isCategoryDropdownVisible && (
                <View style={styles.dropdown}>
                  <FlatList
                    data={categories}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => handleCategorySelect(item)}>
                        <Text style={styles.dropdownItemText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
            </View>
            <View style={styles.Radiobuttom}>
              <View>
                <RadioButton
                  label="Billable"
                  selected={selectedValue === 'option1'}
                  onPress={() => handlePress('option1')}
                />
              </View>
            </View>

            <View style={styles.inputContainertextfeild}>
              <TextInput
                placeholder="Description"
                placeholderTextColor={'grey'}
                value={description}
                onChangeText={setDescription}
                style={styles.input}
              />
            </View>
            <View style={styles.uploadfile}>
              <View style={styles.Shareicon1}>
                <Uploadicon />
              </View>
              <View style={styles.uploadtext}>
                <Text style={{color: 'black'}}>Upload Recipits</Text>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={{padding: 10, backgroundColor: '#fff'}}>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={onClose}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={handleSubmit}>
                <Text style={styles.buttonText1}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExpenseModal;
