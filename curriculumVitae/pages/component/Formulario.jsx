import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Formulario = () => {
  const formik = useFormik({
    // variales siempre en ingles
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      affair: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Nombre es requerido"),
      lastName: Yup.string().required("Apellido es requerido"),
      email: Yup.string().email().required("Correo electronico es requerido"),
      affair: Yup.string().required("Asunto es requerido"),
      message: Yup.string().required("Mensaje es requerido"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: "60px",
            pb: "280px",
            bgcolor: "#2e4975",
            width: "50%",
            height: "100%",
          }}
        >
          {/* ////////////INFO////////////////////// */}

          <Typography
            variant="h3"
            color="initial"
            sx={{
              color: "#fff",
              textAlign: "center",
              mb: "90px",
            }}
          >
            INFO
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              width: "100%",
              height: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "60%",
                height: "auto",
                mb: "25px",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "#fff",
                  width: "25%",
                  fontWeight: "600",
                }}
              >
                Telefono
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "#fff",
                  width: "75%",
                }}
              >
                0414-6653696
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "60%",
                height: "auto",
                mb: "25px",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "#fff",
                  width: "25%",
                  fontWeight: "600",
                }}
              >
                Email
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "#fff",
                  width: "75%",
                }}
              >
                svkenier@gmail.com
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "60%",
                height: "auto",
                mb: "25px",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "#fff",
                  width: "25%",
                  fontWeight: "600",
                }}
              >
                Sitio web
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "#fff",
                  width: "75%",
                }}
              >
                ----------------------------
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "60%",
                height: "auto",
                mb: "15px",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "#fff",
                  width: "25%",
                  fontWeight: "600",
                }}
              >
                Direccion
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "#fff",
                  width: "80%",
                }}
              >
                Av 11 Padilla calle 91c Maracaibo Venezuela{" "}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* //////CONTACTO////////////////////// */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#bbc8dd",
            width: "50%",
            height: "auto",
          }}
        >
          <Typography
            variant="h3"
            color="initial"
            sx={{
              m: "60px",
            }}
          >
            CONTACTO
          </Typography>

          {/* mui recomienda usar la etiqueta form normal de html para el submit */}
          <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              spacing={3}
              sx={{
                paddingX: "60px",
              }}
            >
              <Grid item md={6} xs={6}>
                {/* si estas usando MUI usa los componentes MUI */}
                <TextField
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="Nombre"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  variant="standard"
                  value={formik.values.name}
                />
              </Grid>

              <Grid item md={6} xs={6}>
                <TextField
                  error={Boolean(
                    formik.touched.lastName && formik.errors.lastName
                  )}
                  fullWidth
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  label="Apellido"
                  name="lastName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  variant="standard"
                  value={formik.values.lastName}
                />
              </Grid>

              <Grid item md={12} xs={12}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  variant="standard"
                  value={formik.values.email}
                />
              </Grid>

              <Grid item md={12} xs={12}>
                <TextField
                  error={Boolean(formik.touched.affair && formik.errors.affair)}
                  fullWidth
                  helperText={formik.touched.affair && formik.errors.affair}
                  label="Asunto"
                  name="affair"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  variant="standard"
                  value={formik.values.affair}
                />
              </Grid>

              <Grid item md={12} xs={12}>
                <TextField
                  error={Boolean(
                    formik.touched.message && formik.errors.message
                  )}
                  fullWidth
                  helperText={formik.touched.message && formik.errors.message}
                  label="Mensaje"
                  name="message"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  variant="standard"
                  value={formik.values.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                sx={{
                  mt: 5,
                  width: "80%",
                  height: "50px",
                }}
                variant="outlined"
              >
                Enviar
              </Button>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};
