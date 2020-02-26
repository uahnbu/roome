import React from 'react'
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Button,
  SearchBar
} from 'react-native-elements'
import
  Carousel,
  { ParallaxImage, Pagination }
from 'react-native-snap-carousel'

export default class extends React.Component {
  state = {
    searchContent: '',
    activeSlide: 0
  }
  updateSearch = content => {
    this.setState({
      searchContent: content
    })
  }
  snap = index => {
    this.setState({ activeSlide: index })
  }
  renderImage({ item, index }, parallaxProps) {
    return (
      <ParallaxImage
        source={ item }
        containerStyle={{ width: '100%', height: '100%' }}
        showSpinner
        { ...parallaxProps }
      />
    )
  }
  render() {
    return (
      <View style={ styles.header }>
        <Animated.View
          style={[ styles.carousel, { top: this.props.topping } ]}
        >
          <Carousel
            data={ this.props.illustrations }
            renderItem={ this.renderImage }
            firstItem={
              Math.min(
                this.state.activeSlide,
                this.props.illustrations.length
              )
            }
            sliderWidth={ width }
            itemWidth={ width }
            hasParallaxImages={ true }
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            loop
            onSnapToItem={ this.snap }
          />
          <View
            style={ styles.overlay }
            pointerEvents='none'
          ></View>
        </Animated.View>
        <Animated.View
          style={[
            styles.contentContainer,
            {
              opacity: this.props.opacity,
              height: this.props.height
            }
          ]}
          pointerEvents='none'
        >
          <View style={ styles.titleContainer }>
            <Text style={ styles.title }>
              { this.props.title}
            </Text>
            <Text style={ styles.subtitle }>
              { this.props.subtitle}
            </Text>
            <View style={ styles.buttonContainer }>
              <Button
                title='View Hotels'
                buttonStyle={ styles.button }
                titleStyle={ styles.buttonText }
                onPress={ () => {} }
              />
            </View>
          </View>
          <Pagination
            activeDotIndex={ this.state.activeSlide }
            dotsLength={ this.props.illustrations.length }
            dotColor={ color.green }
            dotStyle={ styles.paginationDot }
            inactiveDotColor={ color.black }
            inactiveDotScale={0.8}
            containerStyle={ styles.pagination }
          />
        </Animated.View>
        <SearchBar
          placeholder='Where are you going?'
          onChangeText={ this.updateSearch }
          value={ this.state.searchContent }
          round
          containerStyle={ styles.searchGrandContainer }
          inputContainerStyle={ styles.searchContainer }
          inputStyle={{ color: color.black }}
          searchIcon={{
            type: 'feather',
            color: color.green
          }}
        />
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
  header: {
    position: 'absolute',
    width: width,
    justifyContent: 'space-between'
  },
  carousel: {
    position: 'absolute',
    height: height * 0.6
  },
  overlay: {
    position: 'absolute',
    width: width,
    height: height * 0.6,
    backgroundColor: '#0003',
  },
  searchGrandContainer: {
    position: 'absolute',
    top: height * 0.03,
    width: width,
    backgroundColor: '#0000',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: width * 0.05,
    paddingVertical: 0
  },
  searchContainer: {
    height: height * 0.07,
    backgroundColor: '#fff',
    borderRadius: 999,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    paddingHorizontal: width * 0.03
  },
  contentContainer: {
    position: 'absolute',
    width: width,
    height: height * 0.6,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  titleContainer: {
    marginLeft: width * 0.05,
    marginBottom: height * 0.03,
    width: width * 0.6
  },
  title: {
    color: '#fff',
    fontSize: fontSize.large,
    fontFamily: 'Merriweather-Black'
  },
  subtitle: {
    marginTop: height * 0.02,
    color: '#fff',
    fontSize: fontSize.xSmall,
    fontFamily: 'Merriweather-Black'
  },
  buttonContainer: {
    marginTop: height * 0.02,
    width: width * 0.3,
    backgroundColor: '#0000',
    borderRadius: 999,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    overflow: 'hidden'
  },
  button: {
    backgroundColor: color.green,
    borderRadius: 999
  },
  buttonText: {
    color: color.white,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  pagination: {
    justifyContent: 'center'
  },
  paginationDot: {
    width: height * 0.015,
    height: height * 0.015,
    borderRadius: 999
  },
})