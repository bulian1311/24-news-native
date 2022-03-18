import React from "react";
import { Container } from "../../../containers";
import { Spacer, Headline, NavLink, CategoryList } from "../../../components";
import { LogoIcon, BellIcon } from "../../../icons";
import { StyledHeader, StyledIconWrapper } from "./home.styled";

export const HomeScreen = () => {
  return (
    <Container>
      <Spacer />
      <StyledHeader>
        <LogoIcon />
        <Spacer pos="left" size="s" />
        <Headline size="h2" weight="bold">
          News 24
        </Headline>
        <StyledIconWrapper>
          <NavLink navigateTo="Home">
            <BellIcon />
          </NavLink>
        </StyledIconWrapper>
      </StyledHeader>

      <Spacer size="xl" />
      <CategoryList
        categories={[
          "All",
          "World",
          "Top",
          "Top1",
          "Top2",
          "Top3",
          "Top4",
          "Top5",
          "Top6",
          "Top7",
        ]}
      />

      <Spacer />
    </Container>
  );
};
