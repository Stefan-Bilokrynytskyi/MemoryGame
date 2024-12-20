import Timer from '@src/assets/icons/Timer';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

type ProgressTimerProps = {
  totalTime: number;
  onTimeEnd: () => void;
  height?: number;
  color?: string;
};

const ProgressTimer = ({
  totalTime,
  onTimeEnd,
  height = 10,
  color = '#750e77',
}: ProgressTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(totalTime);

  useEffect(() => {
    if (remainingTime <= 0) {
      onTimeEnd();
    }
  }, [remainingTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const progress = remainingTime / totalTime;

  return (
    <View style={styles.container}>
      <Timer width={50} height={50} />

      <View style={[styles.timerContainer, {height}]}>
        <View
          style={[
            styles.progressBar,
            {width: `${progress * 100}%`, height, backgroundColor: color},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  timerContainer: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
    marginBottom: 30,
  },
  progressBar: {
    borderRadius: 5,
  },
});

export default ProgressTimer;
