import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'
import { entries, history } from '../assets/data'

export default class extends React.Component {
  renderHistory({ item }, parallaxProps) {
    const random = data => data[Math.floor(Math.random() * data.length)]
    return (
      <TouchableOpacity style={ styles.historyContainer }>
        <ParallaxImage
          source={ random(item.illustrations) }
          containerStyle={{ width: '100%', height: '70%' }}
          showSpinner
          { ...parallaxProps }
        />
        <View style={{ height: '30%', justifyContent: 'center' }}>
          <Text style={ styles.historyText }>
            { item.title }
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  renderSuggestions({ item }, parallaxProps) {
    const random = data => data[Math.floor(Math.random() * data.length)]
    return (
      <TouchableOpacity style={ styles.suggestionsContainer }>
        <ParallaxImage
          source={ random(item.illustrations) }
          containerStyle={{ width: '100%', height: '100%' }}
          showSpinner
          { ...parallaxProps }
        />
        <Text style={ styles.suggestionsText }>
          { item.title }
        </Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View
        style={{ flex: 1, marginTop: this.props.marginTop }}
      >
        <Text style={ styles.title }>Last searches</Text>
        <View style={ styles.historyCarousel }>
          <Carousel
            data={ history }
            renderItem={ this.renderHistory }
            sliderWidth={ width }
            itemWidth={ width * 0.4 }
            enableSnap={ false }
            hasParallaxImages={ true }
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            slideStyle={{ marginRight: width * 0.05 }}
            contentContainerCustomStyle={{ paddingLeft: width * 0.05 }}
          />
        </View>
        <Text style={ styles.title }>Popular destinations</Text>
        <View style={ styles.suggestionsCarousel }>
          <Carousel
            data={ entries }
            renderItem={ this.renderSuggestions }
            sliderWidth={ width }
            itemWidth={ width * 0.7 }
            enableSnap={ false }
            hasParallaxImages
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            slideStyle={{ marginRight: width * 0.05 }}
            contentContainerCustomStyle={{ paddingLeft: width * 0.05 }}
          />
        </View>
        <Text style={ styles.title }>Best deals</Text>
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window')
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
  white: '#dff9fb'
}

const styles = StyleSheet.create({
  title: {
    marginLeft: width * 0.05,
    marginTop: height * 0.03,
    color: color.black,
    fontSize: fontSize.small,
    fontFamily: 'Merriweather-Black'
  },
  historyCarousel: {
    marginTop: height * 0.03,
    height: height * 0.2,
  },
  historyContainer: {
    height: height * 0.2 - 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  historyText: {
    marginLeft: width * 0.04,
    fontSize: fontSize.xSmall
  },
  suggestionsCarousel: {
    marginTop: height * 0.03,
    height: height * 0.25,
  },
  suggestionsContainer: {
    height: height * 0.25 - 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  suggestionsText: {
    position: 'absolute',
    left: width * 0.04,
    bottom: height * 0.02,
    color: '#fff',
    fontSize: fontSize.small,
    fontFamily: 'Merriweather-Black'
  },
})