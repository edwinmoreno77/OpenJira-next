import { createContext } from "react";
import { Entry } from "../../interfaces/entry";

export interface ContextProps {
  entries: Entry[];

  //methods
  addNewEntry: (title: string, description: string) => void;
  updateEntry: (entry: Entry, showSnackbar: boolean) => void;
}

export const EntriesContext = createContext({} as ContextProps);
