import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { Container } from 'native-base'

// Commons
import HeaderCommon from '../commons/header/HeaderCommon'

// Container
import Debugger from '../containers/debugger/Debugger'

const DebuggerScreenView = ({ navigation }) => (
  <Container>
    <HeaderCommon
      navigation={navigation}
      title="Debugger"
      leftAction="none"
    />
    <Debugger navigation={navigation} />
  </Container>
)

DebuggerScreenView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropsTypes.object.isRequired,
}

export default DebuggerScreenView
