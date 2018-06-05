import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { FooterTab, Button, Icon, Footer } from 'native-base'

// Helpers
import { getActiveRouteName } from '../../../libs/NavigationHelper'

const MainTab = ({ navigation }) => {
  const isActive = routeName => (getActiveRouteName(navigation.state) === routeName)

  return (
    <Footer>
      <FooterTab>
        <Button
          onPress={() => { navigation.navigate('DashBoard') }}
        >
          <Icon active={isActive('DashBoard')} name="apps" />
        </Button>
        <Button
          onPress={() => { navigation.navigate('Groups') }}
        >
          <Icon active={isActive('Groups')} name="camera" />
        </Button>
        <Button
          onPress={() => { navigation.navigate('Debugger') }}
        >
          <Icon active={isActive('Debugger')} name="person" />
        </Button>
      </FooterTab>
    </Footer>
  )
}

MainTab.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropsTypes.object.isRequired,
}

export default MainTab
