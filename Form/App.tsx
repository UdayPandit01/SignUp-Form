// import 
// import { View, Text } from 'react-native'
// import React from 'react'
// import Login from './screens/login'
// import Signup from './screens/signup'


// const App = () => {
//   return (
//     <View>
//       {/* <Text>App</Text> */}
//       {/* <Login /> */}
//       <Signup/>
//     </View>
//   );
// }

// export default App;



import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Signup from './screens/signup';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown: false}} component={Login} name="Login" />
        <Stack.Screen options={{headerShown: false}} component={Signup} name="Signup" />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App