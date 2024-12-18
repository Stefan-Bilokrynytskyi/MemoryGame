import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenuScreen from '@src/screens/MainMenuScreen';
import SingleModeMenuScreen from '@src/screens/SingleModeMenuScreen';
import {Screens} from '@src/utils/constants/screens';
import {AppStackParamList} from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.MAIN_MENU} component={MainMenuScreen} />
        <Stack.Screen
          name={Screens.SINGLE_MODE_MENU}
          component={SingleModeMenuScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
