import { borderRadius, Box } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from '@mui/material/IconButton'

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "200px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            bgcolor: "#fff",
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              width: "80%",
              height: "50px",
              borderRadius: "0",
            }}
          >
            DESCARGAR CV COMPLETO
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            bgcolor: "#fff",
          }}
        >
          <Box></Box>

          <Box>
            <IconButton aria-label="LinkedInIconv">
               <LinkedInIcon fontSize="large" sx={{m:"3px"}} />

            </IconButton>

           
            <TwitterIcon fontSize="large" sx={{m:"3px"}} />

            <FacebookIcon fontSize="large" sx={{m:"3px"}}/>
          </Box>

          <Typography variant="subtitle1" color="initial">
            Sigueme en mis redes sociales
          </Typography>
        </Box>
      </Box>
    </>
  );
};
