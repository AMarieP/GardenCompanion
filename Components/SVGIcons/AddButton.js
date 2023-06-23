import * as React from "react"
import { View } from 'react-native'
import Svg, { Circle, Path } from "react-native-svg"

const SvgComponent = ({props}) => (
  <View style={{ aspectRatio: 1, width: props.width }}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={'100%'}
      height={'100%'}
      fill="none"
      viewBox="0 0 61 61"
    >
      <Circle cx={30.024} cy={30.024} r={29.524} fill="#fff" stroke="#000" />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M30 11v38m19-19H11"
      />
    </Svg>
  </View>
)

export { SvgComponent as AddButton }