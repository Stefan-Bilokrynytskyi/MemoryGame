import {SvgProps} from 'react-native-svg';

type SmileProps = {
  SvgComponent: React.FC<SvgProps>;
};

const Smile = ({SvgComponent}: SmileProps) => {
  return <SvgComponent width={150} height={150} />;
};

export default Smile;
