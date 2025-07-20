import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
  fill: string;
}

const SVGComponent: React.FC<Props> = ({ fill ="#9D9D9D" }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
   
  >
    <Path
      d="M12 14V6"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 14H14V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V14Z"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 2H14L13 6H11L10 2Z"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
