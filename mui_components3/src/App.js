import React, { useState } from "react";

import {
  Container,
  Typography,
  Tooltip,
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
  Divider,
  Fab,
  LinearProgress,
  Menu,
  MenuItem,
  Pagination,
  Popover,
  Rating,
  Skeleton,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";

function App() {

  // Menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Popover
  const [popoverAnchor, setPopoverAnchor] = useState(null);

  // Rating
  const [rating, setRating] = useState(3);


  const countries = [
    "India",
    "USA",
    "UK",
    "Australia",
    "Canada",
  ];


  return (
    <Container>

      <Typography
        variant="h3"
        align="center"
        sx={{ marginTop: 3, marginBottom: 4 }}
      >
        Material UI Components
      </Typography>


      {/* ================================= */}
      {/* 1. TOOLTIP */}
      {/* ================================= */}

      <Typography variant="h5">
        1. Tooltip
      </Typography>

      <Tooltip title="Click this button">
        <Button variant="contained">
          Hover Me
        </Button>
      </Tooltip>


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 2. ACCORDION */}
      {/* ================================= */}

      <Typography variant="h5">
        2. Accordion
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          Frequently Asked Question
        </AccordionSummary>

        <AccordionDetails>
          This is the answer inside the Accordion.
        </AccordionDetails>
      </Accordion>


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 3. ALERT */}
      {/* ================================= */}

      <Typography variant="h5">
        3. Alert
      </Typography>

      <Alert severity="success">
        Operation completed successfully!
      </Alert>


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 4. AUTOCOMPLETE */}
      {/* ================================= */}

      <Typography variant="h5">
        4. Autocomplete
      </Typography>

      <Autocomplete
        options={countries}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Country"
          />
        )}
      />


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 5. BREADCRUMBS */}
      {/* ================================= */}

      <Typography variant="h5">
        5. Breadcrumbs
      </Typography>

      <Breadcrumbs>
        <Link href="#">
          Home
        </Link>

        <Link href="#">
          Products
        </Link>

        <Typography color="text.primary">
          Details
        </Typography>
      </Breadcrumbs>


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 6. BUTTON GROUP */}
      {/* ================================= */}

      <Typography variant="h5">
        6. Button Group
      </Typography>

      <ButtonGroup variant="contained">
        <Button>
          One
        </Button>

        <Button>
          Two
        </Button>

        <Button>
          Three
        </Button>
      </ButtonGroup>


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 7. CHIP */}
      {/* ================================= */}

      <Typography variant="h5">
        7. Chip
      </Typography>

      <Chip
        label="React"
        color="primary"
      />

      <Chip
        label="Material UI"
        color="secondary"
        sx={{ marginLeft: 1 }}
      />


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 8. DIVIDER */}
      {/* ================================= */}

      <Typography variant="h5">
        8. Divider
      </Typography>

      <Typography>
        Text above the divider
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography>
        Text below the divider
      </Typography>


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 9. FAB */}
      {/* ================================= */}

      <Typography variant="h5">
        9. Floating Action Button
      </Typography>

      <Fab color="primary">
        +
      </Fab>


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 10. LINEAR PROGRESS */}
      {/* ================================= */}

      <Typography variant="h5">
        10. Linear Progress
      </Typography>

      <LinearProgress
        variant="determinate"
        value={70}
      />


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 11. MENU */}
      {/* ================================= */}

      <Typography variant="h5">
        11. Menu
      </Typography>

      <Button
        variant="contained"
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        Open Menu
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
      >

        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Home
        </MenuItem>

        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Profile
        </MenuItem>

        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Settings
        </MenuItem>

      </Menu>


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 12. PAGINATION */}
      {/* ================================= */}

      <Typography variant="h5">
        12. Pagination
      </Typography>

      <Pagination
        count={10}
        color="primary"
      />


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 13. POPOVER */}
      {/* ================================= */}

      <Typography variant="h5">
        13. Popover
      </Typography>

      <Button
        variant="contained"
        onClick={(event) => {
          setPopoverAnchor(event.currentTarget);
        }}
      >
        Open Popover
      </Button>

      <Popover
        open={Boolean(popoverAnchor)}
        anchorEl={popoverAnchor}
        onClose={() => {
          setPopoverAnchor(null);
        }}

        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >

        <Typography sx={{ padding: 2 }}>
          This is a Popover!
        </Typography>

      </Popover>


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 14. RATING */}
      {/* ================================= */}

      <Typography variant="h5">
        14. Rating
      </Typography>

      <Rating
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 15. SKELETON */}
      {/* ================================= */}

      <Typography variant="h5">
        15. Skeleton
      </Typography>

      <Skeleton
        variant="rectangular"
        width={300}
        height={100}
      />


      <Divider sx={{ marginY: 3 }} />


      {/* ================================= */}
      {/* 16. SPEED DIAL */}
      {/* ================================= */}

      <Typography variant="h5">
        16. Speed Dial
      </Typography>

      <SpeedDial
        ariaLabel="Speed Dial"
        icon={<SpeedDialIcon />}
      >

        <SpeedDialAction
          icon={<EditIcon />}
          tooltipTitle="Edit"
        />

        <SpeedDialAction
          icon={<DeleteIcon />}
          tooltipTitle="Delete"
        />

        <SpeedDialAction
          icon={<ShareIcon />}
          tooltipTitle="Share"
        />

      </SpeedDial>


    </Container>
  );
}

export default App;