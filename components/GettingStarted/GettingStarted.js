import React from 'react'
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Button,
  Icon
} from 'react-native-elements'

export default class extends React.Component {
  render() {
    return (
      <ImageBackground
        source={ require('./assets/bg.jpg') }
        style={ styles.background }
      >
        <Icon
          name='home'
          type='feather'
          size={ fontSize.large }
          color={ color.white }
          containerStyle={ styles.iconContainer }
        />
        <Text style={ styles.title }>
          Roome
        </Text>
        <Text style={ styles.subtitle }>
          Best hotel deals for your holiday
        </Text>
        <View style={ styles.signupContainer }>
          <Button
            title='Get started'
            buttonStyle={ styles.signup }
            titleStyle={ styles.signupText }
            onPress={ () => this.props.navigation.navigate('Introduction') }
          />
        </View>
        <Button
          title='Already have account? Login'
          containerStyle={ styles.loginContainer }
          buttonStyle={ styles.login }
          titleStyle={ styles.loginText }
            onPress={ () => this.props.navigation.navigate('Login') }
        />
      </ImageBackground>
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
  iconContainer: {
    marginTop: height * 0.1,
    width: height * 0.08,
    height: height * 0.08,
    backgroundColor: '#54d3c2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginTop: height * 0.02,
    color: color.black,
    fontSize: fontSize.large,
    fontFamily: 'Merriweather-Black'
  },
  subtitle: {
    marginTop: height * 0.02,
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  signupContainer: {
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
  signup: {
    backgroundColor: color.green,
    borderRadius: 999
  },
  signupText: {
    color: color.white,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  loginContainer: {
    marginBottom: height * 0.05,
  },
  login: {
    backgroundColor: '#0000'
  },
  loginText: {
    color: '#fff',
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Bold'
  }
})