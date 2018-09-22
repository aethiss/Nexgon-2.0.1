/* eslint-disable global-require,react/forbid-prop-types,react/no-string-refs */
import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { connect } from 'react-redux'

// Form Helper
import t from 'tcomb-form-native'

// Style
import { ImageBackground, TouchableOpacity } from 'react-native'
import { Content, Text, View, Button, Icon, Thumbnail } from 'native-base'
import RegisterStyle from './RegisterStyle'

// Action
import { registerNewUser } from '../../../redux/actions/AuthActions'
import ModalStandard from '../../commons/modal/ModalStandard'

// Languages Const
import eng from '../../../constant/languages/eng'

// Form Registration Manager
const { Form } = t.form
// clone the default stylesheet
const stylesheet = Object.assign({}, t.form.Form.stylesheet)
// overriding the text color
stylesheet.textbox.normal.color = '#FFF'
stylesheet.textbox.error.color = '#FFF'
stylesheet.controlLabel.normal.color = '#e3e5e5'

const Number = t.struct({
  phoneNumber: t.Number,
})

const options = {
  // auto: 'placeholders',
  fields: {
    phoneNumber: {
      error: 'Please specify a Valid Mobile Number',
      stylesheet, // overriding the style of the textbox
    },
  },
}

const defaultCounrty = {
  name: 'United Kingdom',
  native: 'United Kingdom',
  phone: '44',
  continent: 'EU',
  capital: 'London',
  currency: 'GBP',
  languages: [
    'en',
  ],
  emoji: '🇬🇧',
  emojiU: 'U+1F1EC U+1F1E7',
}

@connect(state => ({
  user: state.auth.user,
}), { registerNewUser })
export default class Register extends Component {
  static propTypes = {
    user: PropsTypes.object.isRequired,
    onRegister: PropsTypes.func.isRequired,
    navigation: PropsTypes.object.isRequired,
    registerNewUser: PropsTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      modalVisible: false,
    }
  }

  registerToNexgon = () => {
    // eslint-disable-next-line react/no-string-refs
    const phoneValue = this.refs.form.getValue()
    const countrySelected = this.props.navigation.state.params || defaultCounrty
    if (phoneValue && phoneValue !== null) {
      const deviceNumber = `00${countrySelected.phone}${phoneValue.phoneNumber}`
      this.props.registerNewUser(deviceNumber, countrySelected)
      this.props.onRegister('DashBoard')
    }
  }

  navigateOnCountries = () => {
    this.props.navigation.navigate('Countries')
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    })
  }

  render() {
    const { user, navigation } = this.props
    if (!user.name) return null
    const countrySelected = navigation.state.params || defaultCounrty
    return (
      <Content contentContainerStyle={RegisterStyle.content}>
        <ImageBackground
          source={require('../../../../assets/images/backgrounds/nextgon-bk.jpg')}
          style={RegisterStyle.imageContainer}
        >
          <ModalStandard
            onClose={this.toggleModal}
            modalVisible={this.state.modalVisible}
            trasparent
            text={eng.phoneHelper}
          />
          <View style={RegisterStyle.viewRegister}>
            <Thumbnail large source={{ uri: user.picture.data.url }} />
            <Text style={RegisterStyle.textRegister}>{user.name}</Text>
          </View>
          <View style={RegisterStyle.countryRegister}>
            <TouchableOpacity onPress={() => this.navigateOnCountries()}>
              <Text style={RegisterStyle.textRegister}>
                {countrySelected.emoji} {countrySelected.name} (+{countrySelected.phone})
              </Text>
              <Text style={RegisterStyle.textInfo}>Tap to change country</Text>
            </TouchableOpacity>
          </View>
          <View style={RegisterStyle.ViewRegisterAlign}>
            <View style={RegisterStyle.ViewRegisterForm}>
              <TouchableOpacity onPress={() => this.toggleModal()}>
                <Icon name="alert" style={{ color: '#4C79FF' }} />
              </TouchableOpacity>
            </View>
            <View style={RegisterStyle.ViewRegisterForm}>
              <Form type={Number} options={options} ref="form" />
            </View>
          </View>
          <View>
            <Button
              iconLeft
              className="button"
              block
              onPress={() => { this.registerToNexgon() }}
            >
              <Icon name="finger-print" />
              <Text>Start to NextGon!</Text>
            </Button>
          </View>
        </ImageBackground>
      </Content>
    )
  }
}
