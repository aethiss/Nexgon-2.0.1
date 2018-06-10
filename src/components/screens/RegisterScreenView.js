/* eslint-disable no-use-before-define */
import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { Container } from 'native-base'

// Containers
import Register from '../containers/register/Register'

const RegisterScreenView = ({ navigation }) => {
  const onRegister = (location) => {
    navigation.navigate(location)
  }

  return (
    <Container>
      <Register
        onRegister={onRegister}
        navigation={navigation}
      />
    </Container>
  )
}

RegisterScreenView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropsTypes.object.isRequired,
}

export default RegisterScreenView
