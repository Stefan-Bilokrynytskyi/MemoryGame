import Trophy from '@src/assets/icons/Trophy';
import {Animated, Pressable, StyleSheet, View, Text} from 'react-native';

type ModalVictoryProps = {
  modalTranslateY: Animated.Value;
  handleRestart: () => void;
  elapsedTime: string;
};

const ModalVictory = ({
  modalTranslateY,
  handleRestart,
  elapsedTime,
}: ModalVictoryProps) => {
  return (
    <Animated.View
      style={[
        styles.modalContainer,
        {transform: [{translateY: modalTranslateY}]},
      ]}>
      <View style={styles.modalContent}>
        <Trophy width={150} height={150} />
        <Text style={styles.modalText}>You win!</Text>
        <Text style={styles.modalText}>Your time: {elapsedTime}s</Text>
        <Pressable style={styles.modalButton} onPress={handleRestart}>
          <Text style={styles.modalButtonText}>Restart</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
  },
  modalText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#750e77',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#750e77',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default ModalVictory;
