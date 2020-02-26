import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import Upcoming from './components/Upcoming/Upcoming'
import Favorites from './components/Favorites/Favorites'

export default class extends React.Component {
  state = {
    activeTab: 0
  }
  updateTab = index => {
    this.setState({ activeTab: index })
  }
  render() {
    return (
      <View style={ styles.background }>
        <Text style={ styles.title }>My trips</Text>
        <ButtonGroup
          onPress={ this.updateTab }
          selectedIndex={ this.state.activeTab }
          buttons={[ 'Upcoming', 'Finished', 'Favorites' ]}
          containerStyle={ styles.tabContainer }
          buttonStyle={ styles.tab }
          selectedButtonStyle={ styles.activeTab }
          innerBorderStyle={{ width: 0 }}
          textStyle={ styles.tabText }
          selectedTextStyle={ styles.activeTabText }
        />
        {
          this.state.activeTab === 0
            ? <Upcoming/>
            : this.state.activeTab === 2
              ? <Favorites/>
              : null
        }
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
  white: '#dff9fb',
  ltGray: '#dfe4ea'
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  title: {
    marginLeft: width * 0.1,
    marginTop: height * 0.06,
    color: color.black,
    fontSize: fontSize.medium,
    fontFamily: 'Merriweather-Black'
  },
  tabContainer: {
    marginTop: height * 0.03,
    height: height * 0.08,
    backgroundColor: color.ltGray,
    borderRadius: 999
  },
  tab: {
    backgroundColor: '#0000',
  },
  activeTab: {
    backgroundColor: '#0000'
  },
  tabText: {
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  activeTabText: {
    color: color.green,
    fontFamily: 'OpenSans-ExtraBold'
  }
})