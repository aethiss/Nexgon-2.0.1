import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { connect } from 'react-redux'

// Style
import { Content, Text, View, Button } from 'native-base'

// Actions
import { loginRequest } from '../../../redux/actions/AuthActions'

// Helpers
import { facebookLoginManager, FacebookProfile } from '../../../libs/FacebookSDK'

@connect(state => ({
  authorized: state.auth.authorized,
}), { loginRequest })
export default class Login extends Component {
  static propTypes = {
    authorized: PropsTypes.bool,
    onLogin: PropsTypes.func.isRequired,
    loginRequest: PropsTypes.func,
  }

  static defaultProps = {
    authorized: false,
    loginRequest: () => {},
  }

  componentWillMount() {
    const { authorized, onLogin } = this.props
    if (authorized) onLogin()
  }

  connectToNexgon = () => {
    this.props.loginRequest()
    this.props.onLogin()
  }

  noUserRender = () =>
    (
      <View>
        <Text>No user connected !</Text>
        <Button
          iconLeft
          full
          info
          onPress={() => { facebookLoginManager() }}
        >
          <Text>Connect To NextGon</Text>
        </Button>
      </View>
    )

  render() {
    const { authorized } = this.props
    return (
      <Content>
        { !authorized && this.noUserRender() }
      </Content>
    )
  }
}
