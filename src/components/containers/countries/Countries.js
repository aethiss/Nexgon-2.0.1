/* eslint-disable array-callback-return,
    consistent-return,
    react/forbid-prop-types */
import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { ScrollView, TouchableOpacity } from 'react-native'
import { Content, Text, View, Icon, ListItem, Left, Body, Right } from 'native-base'

const Countries = ({ onSelectCountry, countriesList }) => {
  const renderCountryItem = country => (
    <ListItem icon key={`${country.phone}${country.name}`}>
      <Left>
        <Text>{country.emoji}</Text>
      </Left>
      <Body>
        <TouchableOpacity onPress={() => onSelectCountry(country)}>
          <Text>{country.name}</Text>
          <Text note>+{country.phone}</Text>
        </TouchableOpacity>
      </Body>
      <Right>
        <TouchableOpacity onPress={() => onSelectCountry(country)}>
          <Icon name="ios-arrow-forward" style={{ color: 'black' }} />
        </TouchableOpacity>
      </Right>
    </ListItem>
  )

  return (
    <Content>
      <View>
        <Text>Countries</Text>
      </View>
      <View>
        <ScrollView>
          { Object.keys(countriesList).map((country) => {
            if (countriesList[country].phone) {
              return renderCountryItem(countriesList[country])
            }
          })}
        </ScrollView>
      </View>
    </Content>
  )
}

Countries.propTypes = {
  onSelectCountry: PropsTypes.func.isRequired,
  countriesList: PropsTypes.object.isRequired,
}

export default Countries
