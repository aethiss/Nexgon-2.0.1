/* eslint-disable no-undef */
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import ModalStandard from '../ModalStandard'

configure({ adapter: new Adapter() })

describe('Register', () => {
  const onCloseModalMock = jest.fn()

  describe('renders', () => {
    it('default render', () => {
      const wrapper = shallow(<ModalStandard
        onClose={onCloseModalMock}
        modalVisible
      />)
      expect(wrapper.dive()).toMatchSnapshot()
    })
  })
  describe('actions', () => {
    it('should call close callback modal onPress ', () => {
      const component = shallow(<ModalStandard
        onClose={onCloseModalMock}
        modalVisible
      />)

      component.find('TouchableHighlight').simulate('press')
      expect(onCloseModalMock).toHaveBeenCalled()
    })
  })
})
