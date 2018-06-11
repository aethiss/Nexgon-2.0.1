/* eslint-disable no-undef */
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Countries from '../Countries'

configure({ adapter: new Adapter() })

// Mocks
const countries = {
  AD: {
    name: 'Andorra',
    native: 'Andorra',
    phone: '376',
    continent: 'EU',
    capital: 'Andorra la Vella',
    currency: 'EUR',
    languages: [
      'ca',
    ],
    emoji: '🇦🇩',
    emojiU: 'U+1F1E6 U+1F1E9',
  },
  AE: {
    name: 'United Arab Emirates',
    native: 'دولة الإمارات العربية المتحدة',
    phone: '971',
    continent: 'AS',
    capital: 'Abu Dhabi',
    currency: 'AED',
    languages: [
      'ar',
    ],
    emoji: '🇦🇪',
    emojiU: 'U+1F1E6 U+1F1EA',
  },
}

describe('Register', () => {
  describe('renders', () => {
    it('default render', () => {
      const wrapper = shallow(<Countries
        onSelectCountry={jest.fn()}
        countriesList={countries}
      />)
      expect(wrapper.dive()).toMatchSnapshot()
    })
  })
  describe('actions', () => {
    it('should call onSelectCountry on press ', () => {
      const onSelectCountryMock = jest.fn()

      const component = shallow(<Countries
        onSelectCountry={onSelectCountryMock}
        countriesList={countries}
      />)

      component.find('TouchableOpacity').first().simulate('press')
      expect(onSelectCountryMock).toHaveBeenCalled()
    })
  })
})
