import * as React from 'react';
import Svg, {G, Rect, Path, Polygon} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const Pumpkin = props => (
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
        fill="#6068a4"
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
        d="M12.3232,8.03613l-1.3183-.71484a3.13222,3.13222,0,0,0-.8584-3.76563l1.0068-1.11132A4.6226,4.6226,0,0,1,12.3232,8.03613Z"
        style={{
          fill: '#c78657',
        }}
      />
      <Path
        d="M7.125,6h-.25C4.1826,6,2,9.35785,2,13.5S4.1826,21,6.875,21h.25C9.8174,21,12,17.6422,12,13.5S9.8174,6,7.125,6Z"
        style={{
          fill: '#ffab66',
        }}
      />
      <Path
        d="M17.125,6h-.25C14.1826,6,12,9.35785,12,13.5S14.1826,21,16.875,21h.25C19.8174,21,22,17.6422,22,13.5S19.8174,6,17.125,6Z"
        style={{
          fill: '#ffab66',
        }}
      />
      <Path
        d="M12.0758,6h-.1516C9.20465,6,7,9.35785,7,13.5S9.20465,21,11.9242,21h.1516C14.7954,21,17,17.6422,17,13.5S14.7954,6,12.0758,6Z"
        style={{
          fill: '#ffab66',
        }}
      />
      <Polygon
        points="10 12 5 12 6 9 10 12"
        style={{
          fill: '#fff',
        }}
      />
      <Polygon
        points="14 12 19 12 18 9 14 12"
        style={{
          fill: '#fff',
        }}
      />
      <Polygon
        points="13.5 14 10.5 14 12 12 13.5 14"
        style={{
          fill: '#fff',
        }}
      />
      <Polygon
        points="15.111 17.828 12 16.791 8.889 17.828 5.584 15.624 6.416 14.376 9.111 16.172 12 15.209 14.889 16.172 17.584 14.376 18.416 15.624 15.111 17.828"
        style={{
          fill: '#fff7c2',
        }}
      />
    </G>
  </Svg>
);
export default Pumpkin;
