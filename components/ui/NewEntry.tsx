import { Box, Button, TextField } from "@mui/material";
import { useState, ChangeEvent, useContext } from "react";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { EntriesContext } from "../../context/entries/EntrisContext";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
    setTouched(true);
  };

  const { addNewEntry } = useContext(EntriesContext);
  const { setIsAddingEntry, isAddingEntry } = useContext(UIContext);

  const onSave = () => {
    if (inputValue.length === 0) {
      setTouched(true);
      return;
    }
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setTouched(false);
    setInputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={touched && inputValue.length === 0 && "Campo requerido"}
            error={touched && inputValue.length === 0}
            value={inputValue}
            onChange={handleInputChange}
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
