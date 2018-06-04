import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { Container, Content, View, Text } from 'native-base'

// Commons
import HeaderCommon from '../commons/header/HeaderCommon'

const DashBoardsScreenView = ({ navigation }) => (
  <Container>
    <HeaderCommon
      navigation={navigation}
      title="DashBoard"
      leftAction="back"
    />
    <Content>
      <View>
        <Text>Dashboard Ciao</Text>
      </View>
    </Content>
  </Container>
)

DashBoardsScreenView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropsTypes.object.isRequired,
}

export default DashBoardsScreenView
