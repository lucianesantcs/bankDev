import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 25
  },

  menuContainer: {
    flex: 1,
    alignItems:'flex-end',
  },

  menuContent: {
    width: '50%',
    minWidth: '50%',
    maxHeight: '90%',
    height: 'auto',
    backgroundColor: '#000',
    marginRight: 2,
    marginTop: 54,
    borderBottomLeftRadius: 5
  },

  menuText: {
    padding: 15,
    textAlign: 'right',
    marginBottom: 15,
    color: '#fff'
  },

  menuBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  }
});

export default styles;