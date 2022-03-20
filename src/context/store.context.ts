import React from "react";
import { RootStore } from "../store/root.store";

export const defaultStore = new RootStore();

export const StoreContext = React.createContext(defaultStore);
