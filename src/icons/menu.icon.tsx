import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const MenuIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="#180E19" {...props}>
    <Path d="M12.375 13.875a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18.375 13.875a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6.375 13.875a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </Svg>
);
