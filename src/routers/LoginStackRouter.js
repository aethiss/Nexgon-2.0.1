import { createStackNavigator } from 'react-navigation'

// Routing
import MainTabRouter from './MainTabRouter'

// ScreenViews
import LoginScreenView from '../components/screens/LoginScreenView'

export default createStackNavigator({
  Login: {
    screen: LoginScreenView,
  },
  DashBoard: {
    screen: MainTabRouter,
  },
}, {
  headerMode: 'none',
  header: null,
})
