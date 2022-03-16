import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const HomeIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" stroke="#180E19" {...props}>
    <Path
      d="M14.25 19.5V15a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-8.672a.778.778 0 0 1 .244-.553l7.5-6.816a.75.75 0 0 1 1.012 0l7.5 6.816a.776.776 0 0 1 .244.553V19.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
