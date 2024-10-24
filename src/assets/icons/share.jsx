import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Shareicon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#4E585E"
      {...props}
    >
      <Path d="M120-160v-640l760 320-760 320zm80-120l474-200-474-200v140l240 60-240 60v140zm0 0v-400 400z" />
    </Svg>
  )
}

export default Shareicon
