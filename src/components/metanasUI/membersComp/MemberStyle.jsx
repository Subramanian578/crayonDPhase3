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
    padding: 10,
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
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: -10, // Overlapping effect
    borderWidth: 2,
    borderColor: '#fff', // White border around the avatar
  },
  moreCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10, // Overlapping effect
    borderWidth: 2,
    borderColor: '#fff', // White border around the circle
  },
  moreText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

