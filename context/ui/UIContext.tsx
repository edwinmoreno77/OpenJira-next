import { createContext } from "react";

export interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  ilumination: boolean;

  //methods
  openSidemenu: () => void;
  closeSidemenu: () => void;

  setIsAddingEntry: (isAdding: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
  iluminationOpen: (ilumination: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
