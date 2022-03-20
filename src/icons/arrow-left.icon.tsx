import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const ArrowLeftIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" stroke="#180E19" {...props}>
    <Path
      d="m15 18-6-6 6-6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
