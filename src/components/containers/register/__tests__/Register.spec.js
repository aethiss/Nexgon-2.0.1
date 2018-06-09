/* eslint-disable no-undef */
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Register from '../Register'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
configure({ adapter: new Adapter() })

const initialState = {
  auth: {
    user: {
      name: 'Enzo Dono',
      picture: 'picture.jpg',
      facebookid: 1232131231231,
      email: 'test@register.com',
    },
    authorized: false,
  },
}

describe('Register', () => {
  describe('renders', () => {
    it('default render', () => {
      const wrapper = shallow(
        <Register onRegister={jest.fn()} />,
        { context: { store: mockStore(initialState) } },
      )
      expect(wrapper.dive()).toMatchSnapshot()
    })
  })
})
