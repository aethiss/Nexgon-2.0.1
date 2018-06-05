import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { Container, Content, View, Text } from 'native-base'

// Commons
import HeaderCommon from '../commons/header/HeaderCommon'

const GroupScreenView = ({ navigation }) => (
  <Container>
    <HeaderCommon
      navigation={navigation}
      title="Groups"
      leftAction="back"
    />
    <Content>
      <View>
        <Text>Group Screen</Text>
      </View>
    </Content>
  </Container>
)

GroupScreenView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropsTypes.object.isRequired,
}

export default GroupScreenView
