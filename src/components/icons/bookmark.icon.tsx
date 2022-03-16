import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const BookmarkIcon = ({ ...props }: Props) => (
  <Svg width={21} height={20} fill="none" stroke="#180E19" {...props}>
    <Path
      d="m16.167 17.5-5.834-4.167L4.5 17.5V4.167A1.667 1.667 0 0 1 6.167 2.5H14.5a1.667 1.667 0 0 1 1.667 1.667V17.5Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
