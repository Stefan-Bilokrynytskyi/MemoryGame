import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';
const HardSmile = props => (
  <Svg
    fill="#000000"
    viewBox="-2.4 -2.4 28.80 28.80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G
      id="SVGRepo_bgCarrier"
      strokeWidth={0}
      transform="translate(3.24,3.24), scale(0.73)">
      <Rect
        x={-2.4}
        y={-2.4}
        width={28.8}
        height={28.8}
        rx={14.4}
        fill="#bc1a1a"
        strokeWidth={0}
      />
    </G>
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path d="M7.105,9.553a1,1,0,0,1,1.342-.448l2,1a1,1,0,0,1-.894,1.79l-2-1A1,1,0,0,1,7.105,9.553Zm8.448-.448-2,1a1,1,0,0,0,.894,1.79l2-1a1,1,0,1,0-.894-1.79Zm-.328,5.263a4,4,0,0,1-6.45,0,1,1,0,0,0-1.55,1.264,6,6,0,0,0,9.55,0,1,1,0,1,0-1.55-1.264ZM23,2V12A11,11,0,0,1,1,12V2a1,1,0,0,1,1.316-.949l4.229,1.41a10.914,10.914,0,0,1,10.91,0l4.229-1.41A1,1,0,0,1,23,2ZM21,12a9,9,0,1,0-9,9A9.029,9.029,0,0,0,21,12Z" />
    </G>
  </Svg>
);
export default HardSmile;
