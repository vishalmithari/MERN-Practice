import React, { useState } from "react";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Autocomplete,
  TextField,
  Breadcrumbs,
  Link,
  Button,
  ButtonGroup,
  Chip,
  Stack,
  Paper,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./App.css";

function App() {

  // Autocomplete options
  const cities = [
    "Kolhapur",
    "Pune",
    "Mumbai",
    "Bangalore",
    "Delhi",
    "Hyderabad",
  ];

  // Selected city
  const [selectedCity, setSelectedCity] = useState(null);

  // Alert state
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Box className="app-container">

      {/* =========================================
          TITLE
      ========================================= */}

      <Typography
        variant="h3"
        className="main-title"
      >
        Material UI Components
      </Typography>

      <Typography
        variant="body1"
        className="main-subtitle"
      >
        Accordion, Alert, Autocomplete, Breadcrumbs,
        ButtonGroup and Chip
      </Typography>


      {/* =========================================
          1. ACCORDION
      ========================================= */}

      <Paper className="component-card">

        <Typography
          variant="h5"
          className="component-heading"
        >
          1. Accordion
        </Typography>

        <Accordion className="accordion">

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className="accordion-title">
              What is React?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography className="accordion-content">
              React is a JavaScript library used for
              building user interfaces and web applications.
            </Typography>
          </AccordionDetails>

        </Accordion>


        <Accordion className="accordion">

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className="accordion-title">
              What is Material UI?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography className="accordion-content">
              Material UI is a React component library
              based on Google's Material Design.
            </Typography>
          </AccordionDetails>

        </Accordion>

      </Paper>


      {/* =========================================
          2. ALERT
      ========================================= */}

      <Paper className="component-card">

        <Typography
          variant="h5"
          className="component-heading"
        >
          2. Alert
        </Typography>

        <Typography className="component-description">
          Click the button to display an alert.
        </Typography>

        {/* Show Alert Button */}

        <Button
          variant="contained"
          onClick={() => setShowAlert(true)}
          sx={{
            marginBottom: 2,
            backgroundColor: "#212529",
            "&:hover": {
              backgroundColor: "#343a40",
            },
          }}
        >
          Show Alert
        </Button>

        {/* Alert */}

        {showAlert && (
          <Alert
            severity="success"
            onClose={() => setShowAlert(false)}
          >
            Operation completed successfully!
          </Alert>
        )}

      </Paper>


      {/* =========================================
          3. AUTOCOMPLETE
      ========================================= */}

      <Paper className="component-card">

        <Typography
          variant="h5"
          className="component-heading"
        >
          3. Autocomplete
        </Typography>

        <Typography className="component-description">
          Select a city from the available options.
        </Typography>

        <Autocomplete
          options={cities}
          value={selectedCity}
          onChange={(event, newValue) => {
            setSelectedCity(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select City"
              placeholder="Search city..."
            />
          )}
          className="autocomplete"
        />

        {selectedCity && (
          <Typography className="selected-text">
            Selected City: {selectedCity}
          </Typography>
        )}

      </Paper>


      {/* =========================================
          4. BREADCRUMBS
      ========================================= */}

      <Paper className="component-card">

        <Typography
          variant="h5"
          className="component-heading"
        >
          4. Breadcrumbs
        </Typography>

        <Breadcrumbs
          aria-label="breadcrumb"
          className="breadcrumbs"
        >

          <Link
            underline="hover"
            color="inherit"
            href="#"
          >
            Home
          </Link>

          <Link
            underline="hover"
            color="inherit"
            href="#"
          >
            Products
          </Link>

          <Typography color="text.primary">
            Details
          </Typography>

        </Breadcrumbs>

      </Paper>


      {/* =========================================
          5. BUTTON GROUP
      ========================================= */}

      <Paper className="component-card">

        <Typography
          variant="h5"
          className="component-heading"
        >
          5. Button Group
        </Typography>

        <ButtonGroup
          variant="contained"
          className="button-group"
        >

          <Button>
            Add
          </Button>

          <Button>
            Edit
          </Button>

          <Button>
            Delete
          </Button>

        </ButtonGroup>

      </Paper>


      {/* =========================================
          6. CHIP
      ========================================= */}

      <Paper className="component-card">

        <Typography
          variant="h5"
          className="component-heading"
        >
          6. Chip
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          className="chip-container"
        >

          <Chip
            label="React"
            color="primary"
          />

          <Chip
            label="Material UI"
            color="secondary"
          />

          <Chip
            label="JavaScript"
            variant="outlined"
          />

          <Chip
            label="Frontend"
            variant="outlined"
          />

        </Stack>

      </Paper>
    </Box>
  );
}

export default App;