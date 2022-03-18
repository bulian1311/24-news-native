import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const SearchIcon = ({ ...props }: Props) => (
  <Svg width={25} height={24} fill="none" stroke="#180E19" {...props}>
    <Path
      d="M11.667 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21.667 21l-4.35-4.35"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
