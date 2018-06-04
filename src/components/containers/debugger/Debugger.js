import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { connect } from 'react-redux'

// Style
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base'

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
        <Content>
          <Text>
            Debugger: {user}
          </Text>
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
