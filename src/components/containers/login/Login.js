import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { connect } from 'react-redux'

// Style
import { Content, Text, View, Button } from 'native-base'

// Actions
import { facebookLoginRequest } from '../../../redux/actions/AuthActions'

// Helpers
// import { facebookLoginManager } from '../../../libs/FacebookSDK'

@connect(state => ({
  authorized: state.auth.authorized,
}), { facebookLoginRequest })
export default class Login extends Component {
  static propTypes = {
    authorized: PropsTypes.bool,
    onLogin: PropsTypes.func.isRequired,
    facebookLoginRequest: PropsTypes.func,
  }

  static defaultProps = {
    authorized: false,
    facebookLoginRequest: () => {},
  }

  componentWillMount() {
    const { authorized, onLogin } = this.props
    if (authorized) onLogin()
  }

  connectToNexgon = () => {
    this.props.facebookLoginRequest()
      .then((result) => {
        console.log('Result :', result)
      })
      .catch((error) => {
        console.log(error)
      })
    // this.props.loginRequest()
    // this.props.onLogin()
  }

  noUserRender = () =>
    (
      <View>
        <Text>No user connected !</Text>
        <Button
          className="button"
          iconLeft
          full
          info
          onPress={() => { this.connectToNexgon() }}
        >
          <Text>Connect To NextGon!</Text>
        </Button>
      </View>
    )

  render() {
    const { authorized } = this.props
    return (
      <Content>
        { !authorized && this.noUserRender() }
        { authorized &&
          <Text>Welcome User !</Text>
        }
      </Content>
    )
  }
}
