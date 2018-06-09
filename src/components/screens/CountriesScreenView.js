/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropsTypes from 'prop-types'

// Helper
import { filter } from 'ramda'

// Style
import { Container } from 'native-base'

// Commons
import HeaderSearch from '../commons/header/HeaderSearch'

// Container
import Countries from '../containers/countries/Countries'

// Countries List Data
import CountriesFullList from '../../constant/countries/countriesCode'

class CountriesScreenView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countriesList: CountriesFullList,
    }
  }

  onSelectCountry = (country) => {
    this.props.navigation.navigate('Register', { ...country })
  }

  onSearch = (value) => {
    if (!value) {
      this.setState({
        countriesList: CountriesFullList,
      })
    } else {
      const filterCountries = this.searchCountry(value)
      if (Object.keys(filterCountries).length) {
        this.setState({
          countriesList: filterCountries,
        })
      }
    }
  }

  onType = (value) => {
    if (value && value.length > 3) {
      const filterCountries = this.searchCountry(value)
      if (Object.keys(filterCountries).length) {
        this.setState({
          countriesList: filterCountries,
        })
      }
    } else {
      this.setState({
        countriesList: CountriesFullList,
      })
    }
  }

  searchCountry = (countryName) => {
    const filterCountries = filter(
      (country => country.name.indexOf(countryName) !== -1),
      CountriesFullList,
    )
    return filterCountries
  }

  render() {
    console.log(this.state.countriesList)
    return (
      <Container>
        <HeaderSearch
          navigation={this.props.navigation}
          onSearch={this.onSearch}
          onType={this.onType}
          placeholder="Search Country"
        />
        <Countries
          onSelectCountry={this.onSelectCountry}
          countriesList={this.state.countriesList}
        />
      </Container>
    )
  }
}

CountriesScreenView.propTypes = {
  navigation: PropsTypes.object.isRequired,
}

export default CountriesScreenView
