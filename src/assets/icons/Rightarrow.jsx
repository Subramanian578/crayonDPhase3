import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20} // Reduce size here
    height={20} // Reduce size here
    viewBox="0 0 47 50" // Ensure this matches the original dimensions to avoid cutting
    {...props}
  >
    <Path
      fill="rgb(12, 53, 106)"
      d="M13 3c6.712.54 10.38 5.721 14.875 10.25l2.703 2.605 2.54 2.536 2.33 2.313C37 23 37 23 37 25.498c-1.23 3.076-2.778 4.798-5.113 7.147l-2.533 2.548-2.666 2.62-2.631 2.677-2.545 2.53-2.33 2.315C17 47 17 47 13 47c.51-4.172 1.595-6.08 4.598-8.988l2.177-2.139 2.288-2.185 2.298-2.245C26.232 29.62 28.111 27.806 30 26c-1.384-3.133-2.98-5.198-5.441-7.566l-2.018-1.971-2.104-2.026a817.348 817.348 0 0 1-4.128-4.003l-1.85-1.78C13 7 13 7 12 4l1-1Z"
    />
  </Svg>
);

export default RightArrow;
