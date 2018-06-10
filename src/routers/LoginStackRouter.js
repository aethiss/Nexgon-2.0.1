import { createStackNavigator } from 'react-navigation'

// Routing
import MainTabRouter from './MainTabRouter'
import RegisterStackRouter from './RegisterStackRouter'

// ScreenViews
import LoginScreenView from '../components/screens/LoginScreenView'
import InitApp from '../components/InitApp'

export default createStackNavigator({
  Init: {
    screen: InitApp,
  },
  Login: {
    screen: LoginScreenView,
  },
  Register: {
    screen: RegisterStackRouter,
  },
  DashBoard: {
    screen: MainTabRouter,
  },
}, {
  headerMode: 'none',
  header: null,
})
