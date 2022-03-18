import React, { Fragment } from "react";
import { Spacer } from "../../atoms";
import { CategoryItem } from "../../molecules";
import { Props } from "./category-list.props";
import { StyledFlatList } from "./category-list.styled";

export const CategoryList = ({ categories, ...props }: Props) => {
  return (
    <StyledFlatList
      horizontal
      data={categories}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category: any) => category}
      renderItem={({ item, index }: any) => (
        <Fragment key={index}>
          {index > 0 && <Spacer pos="left" />}
          <CategoryItem title={item} />
        </Fragment>
      )}
    />
  );
};
