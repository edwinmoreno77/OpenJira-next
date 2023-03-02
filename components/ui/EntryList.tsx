import { List, Paper } from "@mui/material";
import { useMemo, DragEvent } from "react";
import { EntryCard } from "./";
import { EntryStatus } from "../../interfaces/entry";
import { FC, useContext } from "react";
import { EntriesContext } from "../../context/entries/EntrisContext";
import { UIContext } from "../../context/ui/UIContext";
import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { isDragging, endDragging } = useContext(UIContext);
  const { entries, updateEntry } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const entryId = event.dataTransfer.getData("text");

    const entry = entries.find((entry) => entry._id === entryId)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div
      className={isDragging ? styles.dragging : ""}
      onDrop={onDropEntry}
      onDragOver={allowDrop}
    >
      <Paper
        sx={{
          height: "85vh",
          overflow: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
          backgroundColor: "transparent",
          padding: "3px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.4 : 1, transition: "all 0.3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
