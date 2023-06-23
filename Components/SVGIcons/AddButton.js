import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={61}
    height={61}
    fill="none"
    {...props}
  >
    <Circle cx={30.024} cy={30.024} r={29.524} fill="#fff" stroke="#000" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M30 11v38m19-19H11"
    />
  </Svg>
)
export { SvgComponent as AddButton }