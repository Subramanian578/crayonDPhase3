import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DownArrow from '../../assets/icons/downarrow';
import Uploadicon from '../../assets/icons/uploadIcon';
import RadioButton from './radioButton';
import Calendericon from '../../assets/icons/calenderIcon';

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

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'white',
    padding: 15,
    paddingBottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  Radiobuttom: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 7,
  },
  Radiobuttomtext: {
    color: 'black',
  },
  uploadfile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  Shareicon1: {
    backgroundColor: '#d7e3ff',
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
  },
  uploadtext: {
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountcry: {
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'space-between',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
    paddingLeft: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'rgb(236, 237, 238)',
    borderRadius: 5,
    marginBottom: 10,
    padding: 4,
    width: '100%',
  },
  inputContainertextfeild: {
    borderWidth: 1,
    borderColor: 'rgb(236, 237, 238)',
    borderRadius: 5,
    marginBottom: 5,
    padding: 6,
    height: '20%',
    width: '100%',
  },
  inputContainer1: {
    borderWidth: 1,
    borderColor: 'rgb(236, 237, 238)',
    borderRadius: 5,
    marginBottom: 10,
    padding: 1,
    gap: 5,
    width: '48%',
    zIndex: 1,
  },
  input: {
    paddingLeft: 10,
    height: 40,
    borderWidth: 0,
    color: 'black',
  },
  dropdown: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgb(236, 237, 238)',
    borderRadius: 10,
    position: 'absolute',
    top: 50,
    width: '100%',
    zIndex: 999,
    paddingVertical: 10,
    paddingHorizontal: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dropdownItem: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  dropdownItemText: {
    color: 'black',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 10,
    marginTop: 10,
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#2a4e7d',
  },
  submitButton: {
    backgroundColor: '#0c356a',
  },
  buttonText: {
    color: '#2a4e7d',
    fontWeight: 'bold',
  },
  buttonText1: {
    color: 'white',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgb(227, 228, 230)',
  },
});

export default ExpenseModal;
