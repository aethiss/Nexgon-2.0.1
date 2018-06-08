/* eslint-disable no-undef,import/first */
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Login from '../Login'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
configure({ adapter: new Adapter() })

const initialState = {
  auth: {
    user: false,
    authorized: false,
  },
}
//
jest.mock('../../../../redux/actions/AuthActions')
import { facebookLoginRequest } from '../../../../redux/actions/AuthActions'

describe('<Login />', () => {
  // beforeEach(() => {
  //   jest.resetAllMocks()
  // })

  describe('Redender', () => {
    it('Default render', () => {
      const wrapper = shallow(
        <Login />,
        { context: { store: mockStore(initialState) } },
      )
      expect(wrapper.dive()).toMatchSnapshot()
    })
  })
  describe('Events', () => {
    it('click on connect button call facebook login', () => {
      const mocked = facebookLoginRequest.mockImplementation(() =>
        new Promise(resolve => resolve(null)))
      const wrapper = shallow(
        <Login facebookLoginRequest={facebookLoginRequest} />,
        { context: { store: mockStore(initialState) } },
      ).dive()
      wrapper.setProps({ facebookLoginRequest: mocked })
      const button = wrapper.find('.button')
      button.simulate('press')
      expect(facebookLoginRequest).toHaveBeenCalledTimes(1)
    })
  })
})
