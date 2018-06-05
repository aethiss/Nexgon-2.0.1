import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

// Screens
import DashBoardsScreenView from '../components/screens/DashBoardsScreenView'
import DebuggerScreenView from '../components/screens/DebuggerScreenView'
import GroupsScreenView from '../components/screens/GroupsScreenView'

// Common Tab
import MainTab from '../components/commons/tab/MainTab'

export default createBottomTabNavigator({
  DashBoard: DashBoardsScreenView,
  Debugger: DebuggerScreenView,
  Groups: GroupsScreenView,
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  // eslint-disable-next-line react/prop-types
  tabBarComponent: ({ navigation }) => (
    <MainTab
      navigation={navigation}
    />
  ),
})
