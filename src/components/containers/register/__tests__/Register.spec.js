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

const userFake = {
  email: 'aethiss@gmail.com',
  id: '1522353421192808',
  picture: {
    data: {
      is_silhouette: false,
      width: 50,
      url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1522353421192808&height=50&width=50&ext=1528801485&hash=AeSYuZUP3NoY8ZKj',
      height: 50,
    },
  },
  name: 'Enzo D\'Onofrio',
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

const initialState = {
  auth: {
    user: userFake,
    authorized: false,
  },
}

describe('Register', () => {
  describe('renders', () => {
    it('default render', () => {
      const wrapper = shallow(
        <Register
          onRegister={jest.fn()}
          registerNewUser={jest.fn()}
          navigation={{ state: { params: defaultCounrty } }}
        />,
        { context: { store: mockStore(initialState) } },
      )
      expect(wrapper.dive()).toMatchSnapshot()
    })
  })
})
