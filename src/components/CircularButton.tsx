// CircularButton.tsx
import Cross from '@src/assets/icons/Cross';
import React, {useRef} from 'react';
import {Pressable, StyleSheet, Animated, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

type CircularButtonProps = {
  size: number; // Диаметр кнопки
  duration: number; // Время анимации в мс
  onComplete: () => void; // Функция, вызываемая по завершении анимации
  color?: string; // Цвет прогресс-круга (по умолчанию полупрозрачный фиолетовый)
  backgroundColor?: string; // Фоновый цвет кнопки (по умолчанию белый)
  children?: React.ReactNode; // Содержимое кнопки (например, иконка или текст)
  strokeWidth?: number; // Толщина прогресс-круга (по умолчанию 30)
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularButton: React.FC<CircularButtonProps> = ({
  size,
  duration,
  onComplete,
  color = '#750e77', // Полупрозрачный фиолетовый
  backgroundColor = '#fff',
  children,
  strokeWidth = 7, // Увеличенная толщина прогресс-круга
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const isCompleted = useRef(false);

  // Радиус прогресс-круга с учётом толщины
  const progressRadius = (size + strokeWidth * 2) / 2; // Радиус прогресс-круга
  const progressCircumference = 2 * Math.PI * progressRadius;

  const startAnimation = () => {
    isCompleted.current = false;
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished && !isCompleted.current) {
        isCompleted.current = true;
        onComplete();
      }
    });
  };

  const resetAnimation = () => {
    if (!isCompleted.current) {
      animatedValue.stopAnimation();
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [progressCircumference, 0],
  });

  return (
    <View
      style={[
        styles.container,
        {width: size + strokeWidth * 2, height: size + strokeWidth * 2},
      ]}>
      {/* Прогресс-круг */}
      <Svg
        width={size + strokeWidth * 2}
        height={size + strokeWidth * 2}
        style={StyleSheet.absoluteFill}>
        {/* Фоновый круг */}
        <Circle
          stroke="#eee"
          fill="none"
          cx={(size + strokeWidth * 2) / 2}
          cy={(size + strokeWidth * 2) / 2}
          r={(size + strokeWidth * 2) / 2 - strokeWidth}
          strokeWidth={strokeWidth}
        />
        {/* Анимированный круг */}
        <AnimatedCircle
          stroke={color}
          fill="none"
          cx={(size + strokeWidth * 2) / 2}
          cy={(size + strokeWidth * 2) / 2}
          r={(size + strokeWidth * 2) / 2 - strokeWidth}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progressCircumference} ${progressCircumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      {/* Кнопка */}
      <Pressable
        onPressIn={startAnimation}
        onPressOut={resetAnimation}
        style={[
          styles.button,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
          },
        ]}>
        <Cross />
        {children && <View style={styles.content}>{children}</View>}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Размещаем кнопку поверх SVG
  },
  content: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircularButton;
