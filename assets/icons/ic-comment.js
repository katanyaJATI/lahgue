import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({ color = '#2c3942', ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill={color}
    stroke={color}
    strokeWidth={0}
    {...props}
  >
    <Path stroke="none" d="M7 7h10v2H7zm0 4h7v2H7z" />
    <Path
      stroke="none"
      d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"
    />
  </Svg>
);
export default SvgComponent;
