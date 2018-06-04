/**
 * NextGon React Native App
 * @flow
 */

import React, { Component } from 'react'

// Styles
import SplashScreen from 'react-native-splash-screen'
import { StyleProvider, Root } from 'native-base'
// import { View, Text } from 'react-native'

// Redux / Store
import { Provider } from 'react-redux'
import configureStore from './src/redux/lib/ConfigureStore'

import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'

// Routing
import LoginStackRouter from './src/routers/LoginStackRouter'

export default class NexGon extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <StyleProvider style={getTheme(platform)}>
          <Root>
            <LoginStackRouter />
          </Root>
        </StyleProvider>
      </Provider>
    )
  }
}

