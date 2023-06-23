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
      <Path stroke="#000" strokeLinecap="round" d="M30 9v29" />
      <Circle
        cx={1}
        cy={1}
        r={1}
        fill="#000"
        transform="matrix(1 0 0 -1 29 46)"
      />
    </Svg>
  </View>
)
export { SvgComponent as CustomStatus }
