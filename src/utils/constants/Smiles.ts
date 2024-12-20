import EasySmile from '@src/assets/icons/EasySmile';
import HardSmile from '@src/assets/icons/HardSmile';
import MediumSmile from '@src/assets/icons/MediumSmile';
import {SvgProps} from 'react-native-svg';

type SvgComponent = React.FC<SvgProps>;

const Smiles: Record<string, SvgComponent> = {
  easy: EasySmile,
  medium: MediumSmile,
  hard: HardSmile,
};

export default Smiles;
