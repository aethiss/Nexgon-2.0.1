/* eslint-disable no-use-before-define */
import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { Container } from 'native-base'

// Containers
import Login from '../containers/login/Login'

const LoginScreenView = ({ navigation }) => {
  const onLogin = () => {
    navigation.push('Register')
  }

  return (
    <Container>
      <Login onLogin={onLogin} />
    </Container>
  )
}

LoginScreenView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropsTypes.object.isRequired,
}

export default LoginScreenView
