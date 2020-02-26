import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Avatar,
  Button,
  ListItem
} from 'react-native-elements'

const data = {
  name: 'Chrystal',
  avatar: require('./assets/avatar.jpg')
}

const options = [
  {
    title: 'Change Password',
    icon: 'lock',
    type: 'feather'
  }, {
    title: 'Invite Friends',
    icon: 'users',
    type: 'feather'
  }, {
    title: 'Credits & Coupons',
    icon: 'present',
    type: 'simple-line-icon'
  }, {
    title: 'Help Center',
    icon: 'questioncircleo',
    type: 'antdesign'
  }, {
    title: 'Payments',
    icon: 'credit-card',
    type: 'feather'
  }, {
    title: 'Setings',
    icon: 'settings',
    type: 'feather'
  }, 
]

export default class extends React.Component {
  render() {
    return (
      <View style={ styles.background }>
        <View style={ styles.header }>
          <View>
            <Text style={ styles.title }>
              { data.name }
            </Text>
            <Button
              title='View and edit profile'
              buttonStyle={{ backgroundColor: '#0000' }}
              titleStyle={ styles.profile }
              onPress={() => {}}
            />
          </View>
          <Avatar
            source={ data.avatar }
            title={ data.name[0] }
            size='large'
            avatarStyle={ styles.avatar }
            overlayContainerStyle={{ marginLeft: -height * 0.1 }}
            containerStyle={ styles.avatarContainer }
          />
        </View>
        <View style={ styles.optionsContainer }>
          {
            options.map((option, i) => (
              <ListItem
                key={i}
                title={ option.title }
                rightIcon={{
                  name: option.icon,
                  type: option.type
                }}
                bottomDivider
                containerStyle={{ backgroundColor: '#0000' }}
                style={{ alignItems: 'center' }}
                onPress={ () => alert(option.title) }
              />
            ))
          }
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
  header: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    alignSelf: 'flex-start',
    marginTop: height * 0.07,
    color: color.black,
    fontSize: fontSize.medium,
    fontFamily: 'Merriweather-Black'
  },
  profile: {
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular',
  },
  avatarContainer: {
    marginTop: height * 0.02,
    width: height * 0.2,
    height: height * 0.2,
    borderRadius: 999,
    overflow: 'hidden'
  },
  avatar: {
    width: height * 0.4,
    height: height * 0.4 / 750 * 937,
  },
  optionsContainer: {
    marginTop: height * 0.03,
    width: width * 0.9,
    alignItems: 'center'
  }
})