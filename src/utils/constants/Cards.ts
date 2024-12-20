import Ball from '@src/assets/icons/Cards/Ball';
import Bat from '@src/assets/icons/Cards/Bat';
import Bell from '@src/assets/icons/Cards/Bell';
import Butterfly from '@src/assets/icons/Cards/Butterfly';
import Camera from '@src/assets/icons/Cards/Camera';
import Car from '@src/assets/icons/Cards/Car';
import Cat from '@src/assets/icons/Cards/Cat';
import Clock from '@src/assets/icons/Cards/Clock';
import Crocodile from '@src/assets/icons/Cards/Crocodile';
import Fish from '@src/assets/icons/Cards/Fish';
import Lollipop from '@src/assets/icons/Cards/Lollipop';
import Picture from '@src/assets/icons/Cards/Picture';
import Pumpkin from '@src/assets/icons/Cards/Pumpkin';
import Sun from '@src/assets/icons/Cards/Sun';
import Sword from '@src/assets/icons/Cards/Sword';
import Watermelon from '@src/assets/icons/Cards/Watermelon';
import {SvgProps} from 'react-native-svg';

type SvgComponent = React.FC<SvgProps>;

export type CardType = {
  name: string;
};

const Cards: CardType[] = [
  {name: 'Ball'},
  {name: 'Bat'},
  {name: 'Bell'},
  {name: 'Butterfly'},
  {name: 'Camera'},
  {name: 'Car'},
  {name: 'Cat'},
  {name: 'Clock'},
  {name: 'Crocodile'},
  {name: 'Fish'},
  {name: 'Lollipop'},
  {name: 'Picture'},
  {name: 'Pumpkin'},
  {name: 'Sun'},
  {name: 'Sword'},
  {name: 'Watermelon'},
];

export const cardComponentMap: Record<string, SvgComponent> = {
  Ball: Ball,
  Bat: Bat,
  Bell: Bell,
  Butterfly: Butterfly,
  Camera: Camera,
  Car: Car,
  Cat: Cat,
  Clock: Clock,
  Crocodile: Crocodile,
  Fish: Fish,
  Lollipop: Lollipop,
  Picture: Picture,
  Pumpkin: Pumpkin,
  Sun: Sun,
  Sword: Sword,
  Watermelon: Watermelon,
};

export default Cards;
