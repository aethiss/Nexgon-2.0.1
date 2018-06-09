import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textRegister: {
    color: '#FFF',
  },
  textInfo: {
    color: '#FFF',
    fontSize: 11,
  },
  viewRegister: {
    marginTop: 170,
  },
  countryRegister: {
    marginTop: 290,
  },
  ViewRegisterAlign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: '#d6d7da',
    maxHeight: 90,
  },
  ViewRegisterForm: {
    alignSelf: 'center',
    padding: 10,
  },
})
