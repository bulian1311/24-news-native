import React, { Fragment, useEffect } from "react";
import { useStore } from "../../../hooks";
import { Spacer } from "../../atoms";
import { NewsItem } from "../../molecules";
import { Props } from "./news-list.props";
import { StyledFlatList } from "./news-list.styled";

export const NewsList = ({ news }: Props) => {
  const store = useStore();

  useEffect(() => {
    store.newsStore.fetchNews();
  });

  return (
    <StyledFlatList
      data={news}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: any) => item.id}
      renderItem={() => (
        <Fragment>
          <NewsItem />
          <Spacer />
        </Fragment>
      )}
    />
  );
};
