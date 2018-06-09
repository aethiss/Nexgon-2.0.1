import { createStackNavigator } from 'react-navigation'

// ScreenViews
import RegisterScreenView from '../components/screens/RegisterScreenView'
import CountriesScreenView from '../components/screens/CountriesScreenView'

export default createStackNavigator({
  Register: {
    screen: RegisterScreenView,
  },
  Countries: {
    screen: CountriesScreenView,
  },
}, {
  headerMode: 'none',
  header: null,
})
