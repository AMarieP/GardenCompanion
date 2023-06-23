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
          fill="#000"
          stroke="#000"
          strokeLinecap="round"
          d="M40.493 36.38c-1.495-.662-2.764-1.227-3.844-1.711-1.756-.787-3.673 1.12-2.771 2.77l2.213 4.049c1.204 2.199 2.61 4.635 5.116 5.233 3.21.765 5.936-1.575 5.638-4.576-.294-2.947-3.553-4.528-6.352-5.765Zm-18.445-7.434-6.06-6.887c-1.1-1.243-2.807-.641-2.807.989v8.912c0 2.016.008 4.253 1.493 5.678 3.282 3.16 10.06 1.025 10.114-3.588.022-1.965-1.421-3.605-2.74-5.103Zm14.82-15.765H25.4c-1.692 0-2.25 1.566-.92 2.57l6.449 4.87c2.613 1.973 6.056 4.184 8.786 2.362 3.75-2.497 3.78-9.42-2.847-9.802Z"
        />
      </Svg>
   </View>
)
export { SvgComponent as WaterEffect }
