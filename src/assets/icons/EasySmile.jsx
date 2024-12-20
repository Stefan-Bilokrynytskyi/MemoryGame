import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';
const EasySmile = props => (
  <Svg
    fill="#000000"
    viewBox="-2.4 -2.4 28.80 28.80"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000000"
    strokeWidth={0.72}
    {...props}>
    <G
      id="SVGRepo_bgCarrier"
      strokeWidth={0}
      transform="translate(2.879999999999999,2.879999999999999), scale(0.76)">
      <Rect
        x={-2.4}
        y={-2.4}
        width={28.8}
        height={28.8}
        rx={14.4}
        fill="#55d510"
        strokeWidth={0}
      />
    </G>
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.01,9.01,0,0,1,12,21ZM8,11V9a1,1,0,0,1,2,0v2a1,1,0,0,1-2,0Zm8-2v2a1,1,0,0,1-2,0V9a1,1,0,0,1,2,0ZM8,14h8a4,4,0,0,1-8,0Z" />
    </G>
  </Svg>
);
export default EasySmile;
