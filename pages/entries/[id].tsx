import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { ChangeEvent, useMemo, useContext } from "react";
import { EntriesContext } from "@/context/entries";
import { dbEntries } from "@/database";
import { Layouts } from "@/components/layouts";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
} from "@mui/material";
import { Entry, EntryStatus } from "@/interfaces";
import { dateFunctions } from "@/utils";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  entry: Entry;
}
const EntryPage: React.FC<Props> = ({ entry }) => {
  const { updateEntry } = useContext(EntriesContext);

  const [inputTitleValue, setInputTitleValue] = useState(entry.title);
  const [inputDescriptionValue, setInputDescriptionValue] = useState(
    entry.description
  );
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(
    () => inputTitleValue.length <= 0 && touched,
    [inputTitleValue, touched]
  );

  const handleInputTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTitleValue(event.target.value);
  };

  const handleInputDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setInputDescriptionValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if (inputTitleValue.trim().length === 0) return;

    const updatedEntry: Entry = {
      ...entry,
      status,
      title: inputTitleValue,
      description: inputDescriptionValue,
    };
    updateEntry(updatedEntry, true);
  };

  return (
    <Layouts title={inputTitleValue.substring(0, 20) + "..."}>
      <Grid container justifyContent={"center"} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputTitleValue}`}
              subheader={` Creada ${dateFunctions.getFormatDistanceToNow(
                entry.createdAt
              )}`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nuevo titulo"
                autoFocus
                multiline
                label="Titulo"
                value={inputTitleValue}
                onChange={handleInputTitleChange}
                onBlur={() => setTouched(true)}
                helperText={isNotValid && "Ingrese un valor"}
                error={isNotValid}
              />

              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Descripción"
                autoFocus
                multiline
                label="Descripción"
                value={inputDescriptionValue}
                onChange={handleInputDescriptionChange}
                onBlur={() => setTouched(true)}
                helperText={isNotValid && "Ingrese un valor"}
                error={isNotValid}
              />
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChanged}>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputTitleValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "red",
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </Layouts>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      entry: entry,
    },
  };
};

export default EntryPage;
