import { createStackNavigator } from 'react-navigation'

// ScreenViews
import LoginScreenView from '../components/screens/LoginScreenView'
import DashBoardsScreenView from '../components/screens/DashBoardsScreenView'

export default createStackNavigator({
  Login: {
    screen: LoginScreenView,
  },
  DashBoard: {
    screen: DashBoardsScreenView,
  },
}, {
  headerMode: 'none',
  header: null,
})
