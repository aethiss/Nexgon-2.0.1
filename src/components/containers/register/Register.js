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

// DEBUG
// const userFake = {
//   email: 'aethiss@gmail.com',
//   id: '1522353421192808',
//   picture: {
//     data: {
//       is_silhouette: false,
//       width: 50,
//       url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1522353421192808&height=50&width=50&ext=1528801485&hash=AeSYuZUP3NoY8ZKj',
//       height: 50,
//     },
//   },
//   name: 'Enzo D\'Onofrio',
// }

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

  render() {
    const { user, navigation } = this.props
    const countrySelected = navigation.state.params || defaultCounrty
    return (
      <Content contentContainerStyle={RegisterStyle.content}>
        <ImageBackground
          source={require('../../../../assets/images/backgrounds/nextgon-bk.jpg')}
          style={RegisterStyle.imageContainer}
        >
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
              <Icon name="alert" style={{ color: '#4C79FF' }} />
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
