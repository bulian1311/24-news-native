import { makeObservable, observable, action } from "mobx";
import { fetchSearchNews, fetchTrendingNews } from "../api";

import { RootStore } from "./root.store";

export class NewsStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      news: observable,
      loading: observable,
      setNews: action,
      setLoading: action,
    });
  }

  news: any[] = [];
  loading: boolean = false;

  setNews = (value: any[]) => {
    this.news = value;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  fetchNews = async () => {
    try {
      this.setLoading(true);

      const data = await fetchTrendingNews();

      this.setLoading(false);
      this.setNews(data.value);
    } catch (err) {
      console.error(err);
    }
  };
}
