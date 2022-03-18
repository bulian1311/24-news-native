import React, { ComponentProps } from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const LogoIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#180E19">
      <Path d="m23.384 10.649-3.2-3.2a1.897 1.897 0 0 0-2.682 0l-3.2 3.2a1.897 1.897 0 0 0 0 2.683l3.2 3.199c.74.74 1.942.74 2.683 0l3.2-3.2c.74-.74.74-1.941 0-2.682Z" />
      <Path d="m16.531 17.502-1.556-1.557-3.996-3.996 2.312-2.311 3.2-3.2c.74-.74.74-1.942 0-2.683l-3.2-3.2a1.897 1.897 0 0 0-2.683 0l-2.18 2.181-1.02 1.02-3.653 3.652-.506.506-2.693 2.694c-.741.74-.741 1.942 0 2.683l3.2 3.2 3.693 3.694.46.46 1.04 1.04 1.7 1.699c.74.74 1.942.74 2.683 0l3.2-3.2c.74-.74.74-1.942 0-2.682Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
