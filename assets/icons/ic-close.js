import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({ color = '#2c3942', ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </Svg>
);
export default SvgComponent;
