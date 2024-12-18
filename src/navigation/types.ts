import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Screens} from '@src/utils/constants/screens';

export type AppStackParamList = {
  [Screens.MAIN_MENU]: undefined;
  [Screens.SINGLE_MODE_MENU]: undefined;
};

export type MainMenuScreenProps = NativeStackScreenProps<
  AppStackParamList,
  Screens.MAIN_MENU
>;

export type SingleModeMenuScreenProps = NativeStackScreenProps<
  AppStackParamList,
  Screens.SINGLE_MODE_MENU
>;
