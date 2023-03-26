import { FC, PropsWithChildren, useReducer, useEffect } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces/entry";
import { entriesApi } from "@/apis";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>("/entries", {
        description,
      });

      dispatch({
        type: "[Entries] -AddEntry",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateEntry = async (entry: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(
        `/entries/${entry._id}`,
        entry
      );
      dispatch({
        type: "[Entries] -Entry-Updated",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  async function refreshEntries() {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entries] -Refresh-Data", payload: data });
  }

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
