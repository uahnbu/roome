import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Button,
  Icon,
  Input,
  SocialIcon
} from 'react-native-elements'
import {
  NavigationActions,
  StackActions
} from 'react-navigation'

export default class extends React.Component {
  state = {
    passHide: true
  }
  togglePass() {
    this.setState(prevState => ({
      passHide: !prevState.passHide
    }));
  }
  resetStack(route) {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: route,
          })
        ]
      })
    )
  }
  render() {
    return (
      <View style={ styles.background }>
        <View style={ styles.getbackContainer }>
          <Button
            icon={
              <Icon
                name='arrowleft'
                type='antdesign'
                size={ fontSize.small }
                color={ color.gray }
              />
            }
            buttonStyle={{ backgroundColor: '#0000' }}
            onPress={ () => this.props.navigation.goBack() }
          />
        </View>
        <Text style={ styles.title }>Log in</Text>
        <View style={ styles.socialContainer }>
          <SocialIcon
            type='facebook'
            title='Facebook'
            button
            style={ styles.social }
          />
          <SocialIcon
            type='twitter'
            title='Twitter'
            button
            style={ styles.social }
          />
        </View>
        <Button
          title='or log in with email'
          containerStyle={ styles.emailContainer }
          buttonStyle={{ backgroundColor: '#0000' }}
          titleStyle={ styles.emailText }
          onPress={() => {}}
        />
        <Input
          placeholder='Your Email'
          containerStyle={ styles.inputGrandContainer }
          inputContainerStyle={ styles.inputContainer }
        />
        <Input
          placeholder='Password'
          secureTextEntry={ this.state.passHide }
          rightIcon={
            <Icon
              name={ 'eye' + (this.state.passHide ? '' : '-off') }
              type='material-community'
              size={ fontSize.medium }
              color={ color.green }
              onPress={ () => this.togglePass() }
            />
          }
          containerStyle={ styles.inputGrandContainer }
          inputContainerStyle={ styles.inputContainer }
        />
        <Button
          title='Forgot your password?'
          containerStyle={ styles.forgotContainer }
          buttonStyle={{ backgroundColor: '#0000' }}
          titleStyle={ styles.forgotText }
          onPress={() => {}}
        />
        <View style={ styles.loginContainer }>
          <Button
            title='Log in'
            buttonStyle={ styles.login }
            titleStyle={ styles.loginText }
            onPress={ () => this.resetStack('Dashboard') }
          />
        </View>
      </View>
    );
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
  getbackContainer: {
    alignSelf: 'flex-start',
    marginLeft: width * 0.05,
    marginTop: height * 0.02,
    borderRadius: 999,
    overflow: 'hidden'
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
    marginTop: height * 0.02,
    color: color.black,
    fontSize: fontSize.medium,
    fontFamily: 'Merriweather-Black'
  },
  socialContainer: {
    marginTop: height * 0.03,
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  social: {
    margin: 0,
    width: width * 0.39
  },
  emailContainer: {
    marginTop: height * 0.02
  },
  emailText: {
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  inputGrandContainer: {
    width: width * 0.8,
    paddingHorizontal: 0
  },
  inputContainer: {
    marginTop: height * 0.02,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderRadius: 999,
    paddingHorizontal: width * 0.06,
    elevation: 4,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginRight: width * 0.1
  },
  forgotText: {
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  loginContainer: {
    marginTop: height * 0.02,
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
  }
})