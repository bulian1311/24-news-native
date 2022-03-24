import React, { Fragment } from "react";
import { Spacer } from "../../atoms";
import { CategoryItem } from "../../molecules";
import { Props } from "./category-list.props";
import { StyledWrapper, StyledFlatList } from "./category-list.styled";

export const CategoryList = ({ categories }: Props) => {
  return (
    <StyledWrapper>
      <StyledFlatList
        contentContainerStyle={{ borderWidth: 1, borderBottomColor: "#000" }}
        horizontal
        data={categories}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category: any) => category}
        renderItem={({ item, index }: any) => (
          <Fragment key={index}>
            {index > 0 && <Spacer pos="left" />}
            <CategoryItem title={item} />
          </Fragment>
        )}
      />
    </StyledWrapper>
  );
};
