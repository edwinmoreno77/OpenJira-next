import { FC, DragEvent, useContext } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Entry } from "../../interfaces/entry";
import { UIContext } from "../../context/ui/UIContext";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", entry._id);
    //todo: modify the state to indicate that the entry is being dragged
    startDragging();
  };

  const onDragEnd = () => {
    //todo: modify the state to indicate that the entry is not being dragged
    endDragging();
  };

  return (
    <Card
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable
      sx={{ margin: "10px 2px" }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "end",
            paddingRight: 2,
          }}
        >
          <Typography variant="body2">Hace 30 min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
