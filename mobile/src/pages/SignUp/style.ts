import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },

  input: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: 16,
    borderColor: '#eee',
    borderWidth: 1
  },

  button: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  buttonLink: {
    width: '100%',
    alignItems: 'flex-end',
    margin: 16,
    paddingVertical: 12
  },

  buttonTextLink: {
    fontWeight: 'bold',
    color: '#4e97e5',
    fontSize: 16
  }
});

export default styles;