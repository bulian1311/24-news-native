import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { SearchIcon, CancelIcon } from "../../../icons";
import {
  StyledView,
  StyledTextInput,
  StyledTouchableOpacity,
} from "./search-field.styled";

export const SearchField = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const theme = useTheme();

  return (
    <StyledView>
      <SearchIcon
        stroke={theme.colors.ui.disabled}
        width={17}
        height={17}
        viewBox="0 0 22 22"
      />

      <StyledTextInput
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        value={search}
        onChangeText={(value) => setSearch(value)}
      />

      {search.length > 0 && (
        <StyledTouchableOpacity onPress={() => setSearch("")}>
          <CancelIcon stroke={theme.colors.ui.disabled} />
        </StyledTouchableOpacity>
      )}
    </StyledView>
  );
};
