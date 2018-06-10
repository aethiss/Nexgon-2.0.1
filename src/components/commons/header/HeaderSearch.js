/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropsTypes from 'prop-types'

// Styles
import { TouchableOpacity } from 'react-native'
import { Header, Item, Input, Icon, Button, Text } from 'native-base'

export default class HeaderSearch extends Component {
  static propTypes = {
    placeholder: PropsTypes.string,
    onSearch: PropsTypes.func.isRequired,
    onType: PropsTypes.func,
    navigation: PropsTypes.object.isRequired,
  }

  static defaultProps = {
    placeholder: 'Search',
    onType: () => true,
  }

  constructor(props) {
    super(props)
    this.state = {
      inputSearch: '',
    }
  }

  setSearchInput = (ele) => {
    this.setState({
      inputSearch: ele,
    })
    this.props.onType(ele)
  }

  render() {
    const { placeholder, navigation } = this.props
    return (
      <Header searchBar rounded>
        <Item>
          <TouchableOpacity onPress={() => this.props.onSearch(this.state.inputSearch)}>
            <Icon name="ios-search" />
          </TouchableOpacity>
          <Input
            placeholder={placeholder}
            onChangeText={this.setSearchInput}
          />
          <TouchableOpacity onPress={() => this.props.onSearch(false)}>
            <Icon name="ios-close" />
          </TouchableOpacity>
        </Item>
        <Button
          transparent
          onPress={() => navigation.goBack()}
        >
          <Text>Cancel</Text>
        </Button>
      </Header>
    )
  }
}
