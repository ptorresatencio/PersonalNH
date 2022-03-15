import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

const SettingsStl = ({ userData, handleChange, update }) => {
  return (
    <Box>   
      <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <TextField
          label="Nombres"
          value={userData.name}
          onChange={(event) => {
            handleChange(event.target.value, "name");
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
          ),
          }}
          variant="standard"
        />
      </Box>
      <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <TextField
          label="Apellidos"
          value={userData.last_name}
          onChange={(event) => {
            handleChange(event.target.value, "last_name");
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
          ),
          }}
          variant="standard"
        />
      </Box>
      <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <TextField
          label="DNI"
          value={userData.document_number}
          onChange={(event) => {
            handleChange(event.target.value, "document_number");
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
          ),
          }}
          variant="standard"
        />
      </Box>
      

      
      <Box>
        <Button sx={{ mt: "1rem" }} onClick={update}>
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsStl;
