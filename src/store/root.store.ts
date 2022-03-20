import { configure } from "mobx";

import { NewsStore } from "./news.store";

configure({ enforceActions: "always" });

export class RootStore {
  newsStore: NewsStore;

  constructor() {
    this.newsStore = new NewsStore(this);
  }
}
