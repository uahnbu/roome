import React from 'react'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native'
import Card from './components/Card'

import { hotels } from './assets/data'

export default class extends React.Component {
  render() {
    return (
      <ScrollView style={ styles.background }>
        {
          hotels.map((hotel, i) => (
            <Card
              key={i}
              title={ hotel.title }
              subtitle={ hotel.subtitle }
              illustration={ hotel.illustration }
              distance={ hotel.distance }
              stars={ hotel.stars }
              price={ hotel.price }
              currency='$'
              style={{
                marginTop: i > 0 ? height * 0.03 : 0
              }}
            />
          ))
        }
      </ScrollView>
    )
  }
}

const { width, height } = Dimensions.get('window');
const fontSize = {
  xSmall: height * 0.02,
   small: height * 0.03,
  medium: height * 0.04,
   large: height * 0.05,
  xLarge: height * 0.06
}
const color = {
  black: '#222f3e',
  gray : '#8395a7',
  green: '#54d3c2',
  white: '#dff9fb',
  ltGray: '#dfe4ea'
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginLeft: width * 0.05,
    marginTop: height * 0.03,
    width: width * 0.9
  }
})