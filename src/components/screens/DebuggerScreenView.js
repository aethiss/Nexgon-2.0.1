import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { Container, Content, View, Text } from 'native-base'

// Commons
import HeaderCommon from '../commons/header/HeaderCommon'

const DebuggerScreenView = ({ navigation }) => (
  <Container>
    <HeaderCommon
      navigation={navigation}
      title="Debugger"
      leftAction="back"
    />
    <Content>
      <View>
        <Text>Debugger Screen</Text>
      </View>
    </Content>
  </Container>
)

DebuggerScreenView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropsTypes.object.isRequired,
}

export default DebuggerScreenView
