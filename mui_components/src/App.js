import React from "react";
import './App.css';
import {AppBar,Toolbar,Typography,Container,Button,TextField,Checkbox,FormControlLabel,Card,CardContent} from "@mui/material";

import {ThemeProvider,createTheme} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212529"
    },
    secondary: {
      main: "#889FFA"
    }
  },
  typography: {
    h2: {
      fontSize: 36
    }
  }
});

function App() {

  return (

  <ThemeProvider theme={theme}>

    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My MUI App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <br></br>
        <Typography variant="h2">
          Welcome to React MUI
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          This is a sample example using MUI.
        </Typography>

        <TextField
          label="Enter your Name"
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
        />

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h5">
              Anuj Powar
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Final Year B.Tech Student
            </Typography>
          </CardContent>
        </Card>

        <FormControlLabel
          control={<Checkbox />}
          label="Accept terms and conditions"
        />
        <br></br>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Click Me
        </Button>

      </Container>
    </div>

  </ThemeProvider>
  );
}

export default App;
