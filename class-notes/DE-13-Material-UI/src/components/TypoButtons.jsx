import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{ background: "#eee", mt: 4, border: "1px solid green" }}
          color="error"
          align="center"
        >
          Typography, Button, Container, Box
        </Typography>

        {/* body: p etiketidir,body1 daha büyük fs ,body2 daha küçük font lu.  button=span etiketidir+büyük harf */}

        <Typography variant="button" color="primary.light">
          Lorem ipsum dolor sit amet
        </Typography>

        <Typography variant="body1" color="purple" align="center">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque, doloribus?{" "}
        </Typography>
      </Container>

      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 4 }}
      >
        <Button variant="contained" color="error" startIcon={<SendIcon />}>
          SEND
        </Button>
        <Button variant="outlined" color="success" endIcon={<DeleteIcon />}>
          DELETE
        </Button>
      </Box>
    </div>
  );
};

export default TypoButtons;
