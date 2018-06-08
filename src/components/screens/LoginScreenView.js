/* eslint-disable no-use-before-define */
import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'

// Containers
import Login from '../containers/login/Login'

// Commons
import HeaderCommon from '../commons/header/HeaderCommon'

const LoginScreenView = ({ navigation }) => {
  const onLogin = () => {
    navigation.push('DashBoard')
  }

  return (
    <Container>
      <HeaderCommon
        navigation={navigation}
        title="Login"
        leftAction="noop"
      />
      <Login onLogin={onLogin} />
    </Container>
  )
}

LoginScreenView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropsTypes.object.isRequired,
}

export default LoginScreenView

// const styles = StyleSheet.create({
//   Container: {
//     '-webkit-flex-direction': 'column', /* Safari */
//     'flex-direction': 'column',
//   },
// })
