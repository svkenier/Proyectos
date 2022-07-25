import { Box, Typography } from "@mui/material";

export const Grafico = () => {
  return (
    <>
      <Typography
        variant="h4"
        color="initial"
        sx={{
          color: "#fff",
          margin: "20px",
        }}
      >
        APTITUDES
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            bgcolor: "#fff",
            width: "80%",
            height: "500px",
            mb: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "35%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "Center",
                width: "50%",
                height: "30%",
                bgcolor: "#edeff5",
              }}
            >
              <Typography variant="Body2" color="initial">
                HTML
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  color: "#df3143",
                }}
              >
                Intermedio
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "Center",
                width: "50%",
                height: "30%",
                bgcolor: "#bbc8dd",
              }}
            >
              <Typography variant="Body2" color="initial">
                Java script
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  color: "#2e4975",
                }}
              >
                Avanzado
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "Center",
                height: "70%",
                width: "100%",
                bgcolor: "#edeff5",
              }}
            >
              <Typography variant="Body2" color="initial">
                CCS
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  color: "#df3143",
                }}
              >
                Intermedio
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "26%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "50%",
                bgcolor: "#bbc8dd",
              }}
            >
              <Typography variant="Body2" color="initial">
                React
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  color: "#2e4975",
                }}
              >
                Avanzado
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "50%",
                bgcolor: "#edeff5",
              }}
            >
              <Typography variant="Body2" color="initial">
                Español
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  color: "#df3143",
                }}
              >
                Lengua materna
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "40%",
              bgcolor: "#bbc8dd",
            }}
          >
            <Typography variant="Body2" color="initial">
              NEXT
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              sx={{
                color: "#2e4975",
              }}
            >
              Intermedio
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
