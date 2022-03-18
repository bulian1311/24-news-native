import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const BellIcon = ({ ...props }: Props) => (
  <Svg width={20} height={22} fill="none" stroke="#180E19" {...props}>
    <Path
      d="M16 7A6 6 0 1 0 4 7c0 7-3 9-3 9h18s-3-2-3-9ZM11.73 20a1.999 1.999 0 0 1-3.46 0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
