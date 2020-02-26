import React from 'react'
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import {
  Button,
  Icon
} from 'react-native-elements'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const entries = [
  {
    title: 'Plan your trips',
    subtitle: 'Book one of our unique hotel to escape the ordinary',
    illustration: require('./assets/site1.png')
  }, {
    title: 'Find best deals',
    subtitle: 'Find deals for any season from cosy country homes to city flats',
    illustration: require('./assets/site2.png')
  }
]

export default class extends React.Component {
  state = {
    activeSlide: 0,
    fade: [
      new Animated.Value(1),
      new Animated.Value(0)
    ]
  }
  renderImage({ item }) {
    return (
      <Image
        source={ item.illustration }
        style={{ width: '100%', height: '100%' }}
      />
    )
  }
  snap = index => {
    Animated.parallel([
      Animated.timing(this.state.fade[this.state.activeSlide], {
        toValue: 0,
        duration: 1000
      }),
      Animated.timing(this.state.fade[index], {
        toValue: 1,
        duration: 1000
      })
    ]).start()
    this.setState({ activeSlide: index })
  }
  renderText(item, index) {
    return (
      <View style={ styles.contentContainer }>
        <Text style={ styles.title }>
          { item[index].title }
        </Text>
        <Text style={ styles.subtitle }>
          { item[index].subtitle }
        </Text>
      </View>
    )
  }
  render() {
    return (
      <View style={ styles.background }>
        <View style={ styles.carousel }>
          <Carousel
            data={ entries }
            renderItem={ this.renderImage }
            sliderWidth={ width }
            itemWidth={ height * 0.4 }
            loop
            autoplay
            autoplayInterval={5000}
            onSnapToItem={ this.snap }
          />
        </View>
        <Pagination
          activeDotIndex={ this.state.activeSlide }
          dotsLength={ entries.length }
          dotColor={ color.green }
          dotStyle={ styles.paginationDot }
          inactiveDotColor={ color.gray }
          inactiveDotScale={0.8}
          containerStyle={ styles.pagination }
        />
        <View style={ styles.contentsContainer }>
          {entries.map((entry, index) => (
            <Animated.View
              key={ index }
              style={[
                styles.contentContainer,
                { opacity: this.state.fade[index] }
              ]}
            >
              <Text style={ styles.title }>
                { entry.title }
              </Text>
              <Text style={ styles.subtitle }>
                { entry.subtitle }
              </Text>
            </Animated.View>
          ))}
        </View>
        <View style={ styles.loginContainer }>
          <Button
            title='Log in'
            buttonStyle={ styles.login }
            titleStyle={ styles.loginText }
            onPress={ () => this.props.navigation.navigate('Login') }
          />
        </View>
        <View style={ styles.signupContainer }>
          <Button
            title='Create account'
            buttonStyle={ styles.signup }
            titleStyle={ styles.signupText }
            onPress={() => {}}
          />
        </View>
      </View>
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
  white: '#dff9fb'
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center'
  },
  carousel: {
    marginTop: height * 0.05,
    height: height * 0.4
  },
  pagination: {
    justifyContent: 'center'
  },
  paginationDot: {
    width: height * 0.015,
    height: height * 0.015,
    borderRadius: 999
  },
  contentsContainer: {
    width: width * 0.7
  },
  contentContainer: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: color.black,
    fontSize: fontSize.medium,
    fontFamily: 'Merriweather-Black',
    textAlign: 'center'
  },
  subtitle: {
    marginTop: height * 0.02,
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center'
  },
  loginContainer: {
    marginTop: 'auto',
    marginBottom: height * 0.02,
    width: width * 0.8,
    backgroundColor: '#0000',
    borderRadius: 999,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    overflow: 'hidden'
  },
  login: {
    backgroundColor: color.green,
    borderRadius: 999
  },
  loginText: {
    color: color.white,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  signupContainer: {
    marginBottom: height * 0.08,    
    width: width * 0.8,
    backgroundColor: '#0000',
    borderRadius: 999,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    overflow: 'hidden'
  },
  signup: {
    backgroundColor: '#fff',
    borderRadius: 999
  },
  signupText: {
    color: color.black,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
})