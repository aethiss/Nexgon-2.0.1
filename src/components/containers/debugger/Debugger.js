/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { connect } from 'react-redux'

// Style
import { Content, Text, View, Button, Icon } from 'native-base'

// Actions
import { resetLogin } from '../../../redux/actions/AuthActions'

// DEBUG STORAGE
import { _CLEARALLSTORAGE } from '../../../libs/Storage/AsyncStorage'
import DebuggerStyle from './DebuggerStyle'

@connect(state => ({
  user: state.auth.user,
}), { resetLogin })
export default class AnatomyExample extends Component {
  static propTypes = {
    user: PropsTypes.object.isRequired,
    navigation: PropsTypes.object.isRequired,
    resetLogin: PropsTypes.func.isRequired,
  }

  resetAllStorage = () => {
    _CLEARALLSTORAGE()
    this.props.resetLogin()
    this.props.navigation.navigate('Login')
  }

  render() {
    const { user } = this.props
    return (
      <Content contentContainerStyle={DebuggerStyle.content}>
        <View style={DebuggerStyle.viewArea}>
          <Text>
            User Logged : {user.name}
          </Text>
        </View>
        <View style={DebuggerStyle.viewArea}>
          <Button
            style={DebuggerStyle.button}
            iconLeft
            block
            danger
            onPress={() => { this.resetAllStorage() }}
          >
            <Icon name="alert" />
            <Text>RESET APP</Text>
          </Button>
        </View>
      </Content>
    )
  }
}
