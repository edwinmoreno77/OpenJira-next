import { FC, PropsWithChildren, useReducer, useEffect } from "react";
import { useSnackbar } from "notistack";
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
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (title: string, description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>("/entries", {
        title,
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

  const updateEntry = async (entry: Entry, showSnackbar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(
        `/entries/${entry._id}`,
        entry
      );
      dispatch({
        type: "[Entries] -Entry-Updated",
        payload: data,
      });

      //  mostrar snackbar
      if (showSnackbar)
        enqueueSnackbar(`Entrada actualizada ${entry.title}`, {
          variant: "success",
          autoHideDuration: 1500,
          // anchorOrigin: {
          //   vertical: "top",
          //   horizontal: "right",
          // },
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
