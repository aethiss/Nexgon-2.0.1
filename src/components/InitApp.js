/* eslint-disable global-require,react/forbid-prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropsTypes from 'prop-types'

// Style
import { ImageBackground, StyleSheet } from 'react-native'
import { Container, Spinner } from 'native-base'

// Actions
import { setUserFromStore } from '../redux/actions/AuthActions'

// Helpers
import { getUserFromStorage } from '../libs/Storage/Handlers/Auth'

// Check if the app is full ready to start (avoid double routing)
let appIsFullReady = false

const style = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: null,
    height: null,
  },
})

@connect(() => ({}), { setUserFromStore })
export default class InitApp extends Component {
  static propTypes = {
    navigation: PropsTypes.object.isRequired,
    setUserFromStore: PropsTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      appIsReady: false,
    }
  }

  componentDidMount() {
    this.setupAppStorage()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.appIsReady && !appIsFullReady) {
      appIsFullReady = true
      this.startAppRouting()
    }
    return (nextState.appIsReady !== this.state.appIsReady)
  }

  setupAppStorage = () => {
    this.setState({
      appIsReady: true,
    })
  }

  startAppRouting = () => {
    const { navigation } = this.props
    console.log('-------- lets start !!! ----------')
    getUserFromStorage()
      .then((data) => {
        if (!data || data === null) { // No user
          navigation.navigate('Login')
        } else {
          this.props.setUserFromStore(JSON.parse(data))
          navigation.navigate('DashBoard')
        }
      })
      .catch(() => {
        navigation.navigate('Login')
        // TODO : reset storage incase of error
      })
  }

  render() {
    return (
      <Container contentContainerStyle={style.content}>
        <ImageBackground
          source={require('../../assets/images/backgrounds/nextgon-bk.jpg')}
          style={style.imageContainer}
        >
          <Spinner color="white" />
        </ImageBackground>
      </Container>
    )
  }
}
