/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropsTypes from 'prop-types'

// Style
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base'

const noop = () => {}

export default class HeaderCommon extends Component {
  static propTypes = {
    navigation: PropsTypes.object.isRequired,
    title: PropsTypes.string,
    leftAction: PropsTypes.string,
  }

  static defaultProps = {
    title: 'NextGon',
    leftAction: 'back',
  }

  leftAction = () => {
    const { leftAction, navigation } = this.props
    if (leftAction === 'back') {
      navigation.goBack()
    } else {
      noop()
    }
  }

  render() {
    const { title } = this.props
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => { this.leftAction() }}
          >
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
