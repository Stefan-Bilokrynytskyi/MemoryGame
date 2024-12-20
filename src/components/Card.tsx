import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Animated, Pressable} from 'react-native';
import {SvgProps} from 'react-native-svg';

type CardProps = {
  SvgComponent: React.FC<SvgProps>;
  handleChoice: (name: string, id: string) => void;
  flipped: boolean;
  name: string;
  id: string;
  disabled: boolean;
};

const Card = ({
  SvgComponent,
  handleChoice,
  flipped,
  name,
  id,
  disabled,
}: CardProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    handleChoice(name, id);

    Animated.timing(animatedValue, {
      toValue: 180,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!flipped) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [flipped]);

  return (
    <Pressable onPress={flipCard} disabled={disabled}>
      <View>
        <Animated.View
          style={[
            styles.card,
            {
              transform: [{rotateY: frontInterpolate}],
            },
          ]}>
          <View style={styles.backSide} />
        </Animated.View>

        <Animated.View
          style={[
            styles.card,
            styles.cardAbsolute,
            {
              transform: [{rotateY: backInterpolate}],
            },
          ]}>
          <View style={styles.frontSide}>
            <SvgComponent width={75} height={75} />
          </View>
        </Animated.View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 75,
    height: 75,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#750e77',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  cardAbsolute: {
    position: 'absolute',
    top: 0,
  },
  frontSide: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  backSide: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Card;
