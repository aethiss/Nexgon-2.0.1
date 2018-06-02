import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { connect } from 'react-redux'

// Style
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

@connect(state => ({
  user: state.auth.user,
}), {})
export default class AnatomyExample extends Component {
  static propTypes = {
    user: PropsTypes.bool,
  }

  static defaultProps = {
    user: false,
  }

  render() {
    const { user } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
          {
            !user &&
            <Text>
              No user connected !
            </Text>
          }
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
