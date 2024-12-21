import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Screens} from '@src/utils/constants/screens';
import {CardItem} from '@src/utils/generateCardArray';

export type AppStackParamList = {
  [Screens.MAIN_MENU]: undefined;
  [Screens.SINGLE_MODE_MENU]: undefined;
  [Screens.SINGLE_MODE_GAME]: {
    time: number;
  };
};

export type MainMenuScreenProps = NativeStackScreenProps<
  AppStackParamList,
  Screens.MAIN_MENU
>;

export type SingleModeMenuScreenProps = NativeStackScreenProps<
  AppStackParamList,
  Screens.SINGLE_MODE_MENU
>;

export type SingleModeGameScreenProps = NativeStackScreenProps<
  AppStackParamList,
  Screens.SINGLE_MODE_GAME
>;
