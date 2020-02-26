import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Icon } from 'react-native-elements'
import Explore from './components/Explore/Explore'
import Trips from './components/Trips/Trips'
import Profile from './components/Profile/Profile'

const color = {
  black: '#222f3e',
  gray : '#8395a7',
  green: '#54d3c2',
  white: '#dff9fb'
}

export default createMaterialBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name='search'
            type='feather'
            color={ tintColor }
          />
        )
      }
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name='heart'
            type='feather'
            color={ tintColor }
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name='user'
            type='feather'
            color={ tintColor }
          />
        )
      }
    }
  }, {
    activeColor: color.green,
    barStyle: {
      backgroundColor: '#fff',
      elevation: 4
    },
    
  }
)