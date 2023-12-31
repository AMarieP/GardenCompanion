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
        d="M38.176 14.825c.607-.639.91-.957 1.212-1.17A3.563 3.563 0 0 1 41.44 13c.73 0 1.444.228 2.05.654.303.214.606.532 1.213 1.171.606.637.908.958 1.111 1.274.406.639.623 1.39.623 2.158 0 .769-.217 1.52-.623 2.159-.203.316-.505.637-1.11 1.274L24.705 42.727c-.487.515-.733.771-1.015.975-.284.204-.6.35-1.231.64l-1.698.787c-3.666 1.697-5.5 2.546-6.392 1.608-.893-.94-.086-2.868 1.527-6.726l.747-1.787c.277-.664.417-.996.61-1.293.195-.3.438-.555.928-1.068l19.994-21.038Z"
      />
      <Path stroke="#000" d="m33.113 20.082 6.527 6.866" />
    </Svg>
  </View>
)

export { SvgComponent as EditButton }
