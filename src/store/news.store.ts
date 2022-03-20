import { makeAutoObservable } from "mobx";
import { fetchSearchNews } from "../api";

import { RootStore } from "./root.store";

export class NewsStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  news: any[] = [];
  loading: boolean = false;

  fetchNews = async () => {
    try {
      const data = await fetchSearchNews();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
}
