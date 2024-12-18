import Brain from '@src/assets/icons/Brain';
import MyButton from '@src/components/MyButton';
import {MainMenuScreenProps} from '@src/navigation/types';
import {Screens} from '@src/utils/constants/screens';
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Screen} from 'react-native-screens';

const MainMenuScreen = ({navigation}: MainMenuScreenProps) => {
  const navigateToSingleModeMenu = () =>
    navigation.navigate(Screens.SINGLE_MODE_MENU);

  return (
    <ImageBackground
      source={require('@src/assets/images/background-menu.jpg')}
      style={styles.container}
      resizeMode="cover">
      <View style={styles.logoContainer}>
        <Brain width={150} height={150} />
        <Text style={styles.logoText}>Memory Game</Text>
      </View>
      <MyButton
        text="Single Player"
        onClickHandler={navigateToSingleModeMenu}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bee3eb',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  logoContainer: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginTop: 24,
  },
  logoText: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#750e77',
  },
});

export default MainMenuScreen;
