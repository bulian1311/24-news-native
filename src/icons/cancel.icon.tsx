import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const CancelIcon = ({ ...props }: Props) => (
  <Svg width={20} height={20} fill="none" stroke="#919191" {...props}>
    <Path
      d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666ZM12.5 7.5l-5 5M7.5 7.5l5 5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
