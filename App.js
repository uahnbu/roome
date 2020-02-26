import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import GettingStarted from './components/GettingStarted/GettingStarted'
import Introduction from './components/Introduction/Introduction'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

const MainNavigator = createStackNavigator(
  {
    GettingStarted: GettingStarted,
    Introduction: Introduction,
    Login: Login,
    Dashboard: Dashboard
  }, {
    defaultNavigationOptions: {
      headerShown: false
    }
  }
)

export default createAppContainer(MainNavigator)