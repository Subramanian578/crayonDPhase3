import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
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
    justifyContent: 'space-between',
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
    paddingTop: 7,
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
  option: {
    paddingVertical: 15,
    backgroundColor: 'white', // Default background color
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: 'rgb(215, 227, 255)', // Background color for selected item
  },
  optionText: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 15,
  },
  selectedOptionText: {
    fontWeight: 'bold',
    color: 'rgb(12, 53, 106)',
  },
});
