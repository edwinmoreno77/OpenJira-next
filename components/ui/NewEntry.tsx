import { Box, Button, TextField } from "@mui/material";
import { useState, ChangeEvent, useContext } from "react";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { EntriesContext } from "../../context/entries/EntrisContext";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const [inputTitleValue, setinputTitleValue] = useState("");
  const [inputDescriptionValue, setinputDescriptionValue] = useState("");
  const [touched, setTouched] = useState(false);

  const handleInputTitleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setinputTitleValue(e.target.value);
    setTouched(true);
  };

  const handleInputDescriptionChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setinputDescriptionValue(e.target.value);
    setTouched(true);
  };

  const { addNewEntry } = useContext(EntriesContext);
  const { setIsAddingEntry, isAddingEntry } = useContext(UIContext);

  const onSave = () => {
    if (inputTitleValue.length === 0 || inputDescriptionValue.length === 0) {
      setTouched(true);
      return;
    }

    addNewEntry(inputTitleValue.toLocaleUpperCase(), inputDescriptionValue);
    setIsAddingEntry(false);
    setTouched(false);
    setinputTitleValue("");
    setinputDescriptionValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Titulo"
            autoFocus
            multiline
            label="Titulo"
            helperText={
              touched && inputTitleValue.length === 0 && "Campo requerido"
            }
            // error={touched && inputTitleValue.length === 0}
            value={inputTitleValue}
            onChange={handleInputTitleChange}
            onBlur={() => setTouched(true)}
          />
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Descripción"
            autoFocus
            multiline
            label="Descripción"
            helperText={
              touched && inputDescriptionValue.length === 0 && "Campo requerido"
            }
            // error={touched && inputDescriptionValue.length === 0}
            value={inputDescriptionValue}
            onChange={handleInputDescriptionChange}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => setIsAddingEntry(false)}
            >
              Cancelar
            </Button>
            <Button
              endIcon={<SaveIcon />}
              color="secondary"
              variant="outlined"
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Button
            color="secondary"
            fullWidth
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => setIsAddingEntry(true)}
          >
            Agregar Tarea
          </Button>
        </>
      )}
    </Box>
  );
};
