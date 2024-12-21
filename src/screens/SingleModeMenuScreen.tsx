import Arrow from '@src/assets/icons/Arrow';
import MyButton from '@src/components/MyButton';
import Smile from '@src/components/Smile';
import {SingleModeMenuScreenProps} from '@src/navigation/types';
import {setCards} from '@src/redux/slices/CardsSlice';
import {Screens} from '@src/utils/constants/screens';
import Smiles from '@src/utils/constants/Smiles';
import generateCardArray from '@src/utils/generateCardArray';
import {getTimeDependsToLevel} from '@src/utils/getTimeDependsToLevel';
import {useState} from 'react';
import {
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

const SingleModeMenuScreen = ({navigation}: SingleModeMenuScreenProps) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('easy');
  const dispatch = useDispatch();
  const goBackHandler = () => navigation.goBack();
  const navigateToGame = () => {
    const cards = generateCardArray(selectedLevel);
    const time = getTimeDependsToLevel(selectedLevel);
    dispatch(setCards(cards));
    navigation.navigate(Screens.SINGLE_MODE_GAME, {time});
  };

  return (
    <ImageBackground
      source={require('@src/assets/images/background-menu.jpg')}
      style={styles.container}
      resizeMode="cover">
      <View style={styles.headerContainer}>
        <View style={styles.textAndButtonContainer}>
          <Pressable
            onPress={goBackHandler}
            style={({pressed}) => [pressed ? styles.buttonPressed : null]}>
            <Arrow width={24} height={24} />
          </Pressable>

          <Text style={styles.textInfo}>GAME INFORMATION</Text>
        </View>

        <View style={styles.separator}></View>
      </View>

      <ImageBackground
        source={require('@src/assets/images/background-rules.jpg')}
        resizeMode="cover"
        style={styles.rulesContainer}>
        <LinearGradient
          colors={['rgba(4, 37, 54,1)', 'rgba(4, 37, 54,0.5)']}
          style={styles.backgroundContainer}>
          <View style={styles.rulesTextContainer}>
            <Text style={styles.rulesCaption}>MEMORY</Text>
            <Text style={styles.rulesText}>Flip 2 cards and find pairs.</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.smileContainer}>
        <Smile SvgComponent={Smiles[selectedLevel]} />
      </View>
      <View style={styles.chooseDifficultyContainer}>
        <MyButton
          text="Easy"
          onClickHandler={() => setSelectedLevel('easy')}
          customContainerStyle={styles.difficultyButtonContainer}
          customTextstyle={styles.difficultyButtonText}
          disabled={selectedLevel !== 'easy'}
        />
        <MyButton
          text="Medium"
          onClickHandler={() => setSelectedLevel('medium')}
          customContainerStyle={styles.difficultyButtonContainer}
          customTextstyle={styles.difficultyButtonText}
          disabled={selectedLevel !== 'medium'}
        />
        <MyButton
          text="Hard"
          onClickHandler={() => setSelectedLevel('hard')}
          customContainerStyle={styles.difficultyButtonContainer}
          customTextstyle={styles.difficultyButtonText}
          disabled={selectedLevel !== 'hard'}
        />
      </View>
      <View style={styles.difficultyTextContainer}>
        <Text style={styles.difficultyText}>Choose difficulty</Text>
      </View>
      <View style={styles.playButtonContainer}>
        <MyButton text="Start Game" onClickHandler={navigateToGame} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 10,
    position: 'relative',
  },
  textAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  separator: {
    position: 'absolute',
    height: 0,
    width: '100%',
    bottom: 0,
    backgroundColor: '#750e77',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  textInfo: {
    fontSize: 28,
    color: '#750e77',
    fontWeight: 'bold',
  },
  rulesContainer: {
    flex: 0.7,
    position: 'relative',
  },
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rulesTextContainer: {
    marginTop: 20,
    textAlign: 'center',
  },
  rulesCaption: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 32,
    textAlign: 'center',
  },
  rulesText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  smileContainer: {
    alignItems: 'center',

    transform: [{translateY: -50}],
  },
  chooseDifficultyContainer: {
    flexDirection: 'row',

    paddingHorizontal: 20,
    gap: 20,
  },
  difficultyButtonContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#750e77',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  difficultyButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  difficultyTextContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  difficultyText: {
    fontSize: 36,
    color: '#750e77',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  playButtonContainer: {
    marginTop: 25,
    paddingHorizontal: 30,
  },
});

export default SingleModeMenuScreen;
