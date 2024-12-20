import React, {useEffect, useState, useRef, useCallback} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/store';
import Card from '@src/components/Card';
import {cardComponentMap} from '@src/utils/constants/Cards';
import {SingleModeGameScreenProps} from '@src/navigation/types';
import ModalVictory from '@src/components/ModalVictory';
import ModalDefeat from '@src/components/ModalDefeat';
import ProgressTimer from '@src/components/ProgressTimer';
import CircularButton from '@src/components/CircularButton';

const {height} = Dimensions.get('window');

const SingleModeGameScreen = ({
  navigation,
  route,
}: SingleModeGameScreenProps) => {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const {time} = route.params;
  console.log('time', time);
  const [firstCard, setFirstCard] = useState<{name: string; id: string} | null>(
    null,
  );
  const [secondCard, setSecondCard] = useState<{
    name: string;
    id: string;
  } | null>(null);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [isVictory, setIsVictory] = useState(false);

  const startTimeRef = useRef<number>(Date.now());

  const modalTranslateY = useRef(new Animated.Value(-height)).current;

  const handleChoice = (name: string, id: string) => {
    if (!firstCard) {
      setFirstCard({name, id});
    } else {
      setSecondCard({name, id});
    }
  };

  const isFlipped = (id: string) => {
    return (
      (firstCard && firstCard.id === id) ||
      (secondCard && secondCard.id === id) ||
      matchedCards.includes(id)
    );
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.name === secondCard.name) {
        setMatchedCards(prev => [...prev, firstCard.id, secondCard.id]);
        setFirstCard(null);
        setSecondCard(null);
      } else {
        const timeout = setTimeout(() => {
          setFirstCard(null);
          setSecondCard(null);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (cards && matchedCards.length === cards.flat().length) {
      setIsVictory(true);
    }
  }, [matchedCards, cards]);

  useEffect(() => {
    if (gameOver || isVictory) {
      Animated.spring(modalTranslateY, {
        toValue: 0,
        useNativeDriver: true,
        tension: 20,
        friction: 8,
      }).start();
    }
  }, [gameOver, isVictory]);

  const handleRestart = () => {
    navigation.goBack();
  };

  const onTimeEnd = useCallback(() => setGameOver(true), []);

  const elapsedTime = isVictory
    ? ((Date.now() - startTimeRef.current) / 1000).toFixed(2)
    : '';

  return (
    <View style={styles.container}>
      {!isVictory && !gameOver && (
        <ProgressTimer totalTime={time} onTimeEnd={onTimeEnd} />
      )}
      <View style={styles.cardsContainer}>
        {cards &&
          cards.map((cardRow, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {cardRow.map(card => (
                <Card
                  SvgComponent={cardComponentMap[card.name]}
                  key={card.id}
                  id={card.id}
                  handleChoice={handleChoice}
                  name={card.name}
                  flipped={isFlipped(card.id)}
                  disabled={!!(firstCard && secondCard)}
                />
              ))}
            </View>
          ))}
        {!isVictory && !gameOver && (
          <View style={styles.circularButtonContainer}>
            <CircularButton
              size={50}
              duration={1000}
              onComplete={handleRestart}
            />
          </View>
        )}
      </View>
      {gameOver && (
        <ModalDefeat
          modalTranslateY={modalTranslateY}
          handleRestart={handleRestart}
        />
      )}
      {isVictory && (
        <ModalVictory
          modalTranslateY={modalTranslateY}
          handleRestart={handleRestart}
          elapsedTime={elapsedTime}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccb8d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    gap: 5,
  },
  cardsContainer: {
    position: 'relative',
    width: '100%',
  },
  circularButtonContainer: {
    position: 'absolute',
    top: '50%', // Центрирование по вертикали
    transform: [{translateY: -25}],
    right: 0,
    zIndex: 10,
  },
});

export default SingleModeGameScreen;
