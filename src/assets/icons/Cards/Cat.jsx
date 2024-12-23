import * as React from 'react';
import Svg, {G, Rect, Path, Circle} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const Cat = props => (
  <Svg
    viewBox="-2.4 -2.4 28.80 28.80"
    data-name="Layer 1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    {...props}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0}>
      <Rect
        x={-2.4}
        y={-2.4}
        width={28.8}
        height={28.8}
        rx={4.32}
        fill="#f4beea"
        strokeWidth={0}
      />
    </G>
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M19.5,22H14a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h5.5A1.5,1.5,0,0,1,21,20.5h0A1.5,1.5,0,0,1,19.5,22Z"
        style={{
          fill: '#4b5661',
        }}
      />
      <Path
        d="M11,10h6a0,0,0,0,1,0,0V22a0,0,0,0,1,0,0H8a4,4,0,0,1-4-4V17A7,7,0,0,1,11,10Z"
        style={{
          fill: '#4b5661',
        }}
      />
      <Path
        d="M12,22h0a1,1,0,0,1-1-1V20h2v1A1,1,0,0,1,12,22Z"
        style={{
          fill: '#fff',
        }}
      />
      <Path
        d="M16,22h0a1,1,0,0,1-1-1V20h2v1A1,1,0,0,1,16,22Z"
        style={{
          fill: '#fff',
        }}
      />
      <Path
        d="M14,14h0a2.99994,2.99994,0,0,1-3-3V9h6v2A2.99994,2.99994,0,0,1,14,14Z"
        style={{
          fill: '#fff',
        }}
      />
      <Path
        d="M13,4,10,6V2.2071a.5.5,0,0,1,.8536-.3535Z"
        style={{
          fill: '#ff888b',
        }}
      />
      <Path
        d="M15,4l3,2V2.2071a.5.5,0,0,0-.8536-.3535Z"
        style={{
          fill: '#ff888b',
        }}
      />
      <Path
        d="M14,11h0a4,4,0,0,1-4-4V4h8V7A4.00005,4.00005,0,0,1,14,11Z"
        style={{
          fill: '#4b5661',
        }}
      />
      <Circle
        cx={12.25}
        cy={6.75}
        r={0.75}
        style={{
          fill: '#fff',
        }}
      />
      <Circle
        cx={16}
        cy={6.75}
        r={0.75}
        style={{
          fill: '#fff',
        }}
      />
    </G>
  </Svg>
);
export default Cat;
