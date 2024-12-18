import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

type MyButtonProps = {
  text: string;
  onClickHandler: () => void;
  customContainerStyle?: StyleProp<ViewStyle>;
  customTextstyle?: StyleProp<TextStyle>;
  disabled?: boolean;
};

const MyButton = ({
  text,
  onClickHandler,
  customContainerStyle,
  customTextstyle,
  disabled,
}: MyButtonProps) => {
  return (
    <Pressable
      onPress={onClickHandler}
      style={({pressed}) => [
        pressed && styles.buttonPressed,
        customContainerStyle || styles.container,
        !!disabled && styles.disabled,
      ]}>
      <Text
        style={[
          customTextstyle || styles.title,
          !!disabled && styles.disabledText,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#750e77',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  disabled: {
    backgroundColor: '#595959',
  },
  disabledText: {
    color: '#a7a7a7',
  },
});

export default MyButton;
