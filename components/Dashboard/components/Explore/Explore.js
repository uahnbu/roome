import React from 'react'
import {
  Animated,
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'

import { entries, history } from './assets/data'
import Header from './components/Header'
import Main from './components/Main'

const { width, height } = Dimensions.get('window')

const headerMinHeight = height * 0.13
const headerMaxHeight = height * 0.6

export default class extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
    refreshing: false,
    currentIndex: Math.floor(Math.random() * entries.length)
  }
  scrolling() {
    Animated.event([
      {
        nativeEvent: {
          contentOffset: { y: this.state.scrollY }
        }
      }
    ])
  }
  refresh = () => {
    this.setState({ refreshing: true })
    setTimeout(() => {
      this.setState({
        refreshing: false,
        currentIndex: Math.floor(Math.random() * entries.length)
      })
    }, 1000)
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, headerMaxHeight - headerMinHeight],
      outputRange: [headerMaxHeight, headerMinHeight],
      extrapolate: 'clamp'
    })
    const headerTop = Animated.multiply(this.state.scrollY, -1)
    const headerOpacity = this.state.scrollY.interpolate({
      inputRange: [0, (headerMaxHeight - headerMinHeight) / 3],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
    const refreshControl = (
      <RefreshControl
        refreshing={ this.state.refreshing }
        progressViewOffset={ headerMaxHeight }
        onRefresh={ this.refresh }
      />
    )
    const entry = entries[this.state.currentIndex]
    return (
      <View style={ styles.background }>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={
            Animated.event([
              {
                nativeEvent: {
                  contentOffset: { y: this.state.scrollY }
                }
              }
            ])
          }
          refreshControl={ refreshControl }
          style={{ flex: 1 }}
        >
          <Main marginTop={ headerMaxHeight } />
        </ScrollView>
        <Header
          height={ headerHeight }
          topping={ headerTop }
          illustrations={ entry.illustrations }
          opacity={ headerOpacity }
          title={ entry.title }
          subtitle={ entry.subtitle }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center'
  }
})