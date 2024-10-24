import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownArrow(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="rgb(12, 53, 106)"
      {...props}
    >
      <Path d="M480-344L240-584l56-56 184 184 184-184 56 56-240 240z" />
    </Svg>
  )
}

export default DownArrow
