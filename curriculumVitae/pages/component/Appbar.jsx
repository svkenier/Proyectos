import { Grid, Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { bgcolor, textAlign, width } from "@mui/system";

export const Appbar = () => {
  return (
    <>
      <Box
        color="transparent"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "50px",
          position: "fixed",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            color: "#fff",
            fontSize: "22px",
          }}
        >
          <Link href="/">
            <a>inicio</a>
          </Link>
        </Box>

        <Box>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderColor: "#fff",
              color: "#fff",
              borderRadius: "0",
            }}
          >
            DESCARGAR CV COMPLETO
          </Button>
        </Box>
      </Box>
    </>
  );
};
