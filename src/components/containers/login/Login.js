/* eslint-disable object-curly-newline,global-require */
import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { connect } from 'react-redux'

// Style
import { ImageBackground, Image } from 'react-native'
import { Content, Text, View, Button, Icon, Toast } from 'native-base'
import LoginStyle from './LoginStyle'

// Actions
import { facebookLoginRequest } from '../../../redux/actions/AuthActions'

@connect(state => ({
  authorized: state.auth.authorized,
  isNewUser: state.auth.isNewUser,
}), { facebookLoginRequest })
export default class Login extends Component {
  static propTypes = {
    authorized: PropsTypes.bool,
    isNewUser: PropsTypes.bool.isRequired,
    onLogin: PropsTypes.func.isRequired,
    facebookLoginRequest: PropsTypes.func,
  }

  static defaultProps = {
    authorized: false,
    facebookLoginRequest: () => {},
  }

  connectToNexgon = () => {
    this.props.facebookLoginRequest()
      .then(() => {
        let navigateTo = 'Dashboard'
        if (this.props.isNewUser) navigateTo = 'Register'
        this.props.onLogin(navigateTo)
      })
      .catch((error) => {
        Toast.show({
          text: error.message,
          buttonText: 'Okay',
          duration: 10000,
        })
      })
  }

  noUserRender = () =>
    (
      <ImageBackground
        source={require('../../../../assets/images/backgrounds/nextgon-bk.jpg')}
        style={LoginStyle.imageContainer}
      >
        <View style={LoginStyle.viewLogo}>
          <Image source={require('../../../../assets/images/logos/next-logo.png')} />
        </View>
        <View style={LoginStyle.fbButton}>
          <Button
            iconLeft
            className="button"
            block
            onPress={() => { this.connectToNexgon() }}
          >
            <Icon name="logo-facebook" />
            <Text>Connect To NextGon!</Text>
          </Button>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ color: '#FFF' }}>Login with Facebook</Text>
        </View>
      </ImageBackground>
    )

  render() {
    const { authorized } = this.props
    return (
      <Content contentContainerStyle={LoginStyle.content}>
        { !authorized && this.noUserRender() }
      </Content>
    )
  }
}
