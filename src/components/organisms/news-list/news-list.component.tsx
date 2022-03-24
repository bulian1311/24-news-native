import React, { Fragment, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../hooks";
import { Spacer } from "../../atoms";
import { NewsItem } from "../../molecules";
import { NewsLoadingList } from "../news-loading-list";
import { StyledFlatList } from "./news-list.styled";

export const NewsList = observer(() => {
  const { newsStore } = useStore();

  useEffect(() => {
    newsStore.fetchNews();
  }, []);

  if (newsStore.loading) return <NewsLoadingList />;

  return (
    <StyledFlatList
      data={newsStore.news}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: any) => item.id}
      renderItem={({ item }) => (
        <Fragment>
          <NewsItem newsItem={item} />
          <Spacer />
        </Fragment>
      )}
    />
  );
});
