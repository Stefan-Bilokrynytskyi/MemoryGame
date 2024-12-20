import Card from '@src/components/Card';
import {SingleModeGameScreenProps} from '@src/navigation/types';
import {AppStore, RootState} from '@src/redux/store';
import {cardComponentMap} from '@src/utils/constants/Cards';
import generateCardArray, {CardItem} from '@src/utils/generateCardArray';
import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {useSelector} from 'react-redux';

const SingleModeGameScreen = ({
  navigation,
  route,
}: SingleModeGameScreenProps) => {
  const cards = useSelector((state: RootState) => state.cards.cards);
  console.log(cards);
  const [firstCard, setFirstCard] = useState<{name: string; id: string} | null>(
    null,
  );
  const [secondCard, setSecondCard] = useState<{
    name: string;
    id: string;
  } | null>(null);
  const [matchedCards, setmatchedCards] = useState<string[]>([]);

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
        setmatchedCards(prev => [...prev, firstCard.id, secondCard.id]);
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

  return (
    <View style={styles.container}>
      {cards &&
        cards.map((cardRow, index) => {
          return (
            <View key={index} style={styles.rowContainer}>
              {cardRow.map((card, index) => {
                return (
                  <Card
                    SvgComponent={cardComponentMap[card.name]}
                    key={card.id}
                    id={card.id}
                    handleChoice={handleChoice}
                    name={card.name}
                    flipped={isFlipped(card.id)}
                    disabled={!!(firstCard && secondCard)}
                  />
                );
              })}
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccb8d3',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    gap: 5,
  },
});

export default SingleModeGameScreen;
