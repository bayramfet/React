import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

const TextFieldComp = () => {
  let error1 = true;
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" color="error">
          TEXT-FIELD
        </Typography>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <TextField
            id="email"
            type="email"
            placeholder="Hello World"
            fullWidth
            margin="dense"
          />
          <TextField
            error={error1}
            id="password"
            type="password"
            placeholder="Password"
            helperText={error1 && "yanlış girdiniz"}
            fullWidth
          />

          <Button variant="contained">SUBMİT</Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
