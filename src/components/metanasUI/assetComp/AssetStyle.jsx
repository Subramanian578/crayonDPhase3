import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: 'rgb(0,0,0,0.5)',
  },
  header: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
    padding: 10,
  },
  assetsContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  cardContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardTitle: {
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
