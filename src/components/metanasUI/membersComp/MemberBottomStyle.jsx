import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomSheet: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      padding: 20,
    },
    sheetTitle: {
      color: 'black',
      fontSize: 24,
      marginBottom: 20,
      fontWeight: '900',
    },
    memberName: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },
    memberEmail: {
      fontSize: 16,
      color: '#888',
    },
    closeButton: {
      borderColor: 'rgb(12, 53, 106)',
      borderWidth: 2,
      padding: 15,
      borderRadius: 15,
      alignItems: 'center',
    },
    closeButtonText: {
      color: 'rgb(12, 53, 106)',
      fontSize: 16,
      fontWeight: '900',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginLeft: 1,
      borderWidth: 2,
      borderColor: '#fff',
      margin: 15,
    },
    modalContent: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      borderColor: 'rgb(222, 224, 225)',
      borderRadius: 15,
      borderWidth: 1,
      marginBottom: 15,
    },
    memberCount: {
      color: 'rgb(78, 88, 94)',
      fontSize: 16,
      marginBottom: 20, // Added margin for spacing below member count
      fontWeight: '800',
    },
  });