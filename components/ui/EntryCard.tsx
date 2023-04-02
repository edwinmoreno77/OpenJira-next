import { FC, DragEvent, useContext } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Entry } from "../../interfaces/entry";
import { UIContext } from "../../context/ui/UIContext";
import { dateFunctions } from "@/utils";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const router = useRouter();
  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", entry._id);
    //todo: modify the state to indicate that the entry is being dragged
    startDragging();
  };

  const onDragEnd = () => {
    //todo: modify the state to indicate that the entry is not being dragged
    endDragging();
  };

  const onEntryPage = () => {
    router.push(`/entries/${entry._id}`);
  };

  return (
    <Card
      onClick={onEntryPage}
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
          <Typography variant="body2">
            {dateFunctions.getFormatDistanceToNow(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
