import React from "react";
import { Container, Typography, Button } from "@mui/material";

function App() {
  return (
      // Slider value
  const [sliderValue, setSliderValue] = useState(50);

  // Switch value
  const [switchValue, setSwitchValue] = useState(false);

  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Tab value
  const [tabValue, setTabValue] = useState(0);


  // ==================================================
  // SLIDER CHANGE
  // ==================================================

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };


  // ==================================================
  // SWITCH CHANGE
  // ==================================================

  const handleSwitchChange = (event) => {
    setSwitchValue(event.target.checked);
  };


  // ==================================================
  // TAB CHANGE
  // ==================================================

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };


  // ==================================================
  // DRAWER
  // ==================================================

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };


  return (

    <Box
      sx={{
        padding: 4,
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >

      {/* ==================================================
          TITLE
      ================================================== */}

      <Typography
        variant="h3"
        gutterBottom
      >
        Material UI Components
      </Typography>

      <Typography
        variant="body1"
        sx={{ marginBottom: 4 }}
      >
        Slider, Switch, Avatar, Badge, Progress, Drawer,
        Tabs and Tooltip
      </Typography>


      {/* ==================================================
          1. SLIDER
      ================================================== */}

      <Box
        sx={{
          maxWidth: 400,
          marginBottom: 5,
        }}
      >

        <Typography
          variant="h6"
          gutterBottom
        >
          1. Slider
        </Typography>

        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={100}
        />

        <Typography>
          Value: {sliderValue}
        </Typography>

      </Box>


      {/* ==================================================
          2. SWITCH
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h6"
          gutterBottom
        >
          2. Switch
        </Typography>

        <Switch
          checked={switchValue}
          onChange={handleSwitchChange}
        />

        <Typography>
          Switch is {switchValue ? "ON" : "OFF"}
        </Typography>

      </Box>


      {/* ==================================================
          3. AVATAR
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h6"
          gutterBottom
        >
          3. Avatar
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >

          {/* Letter Avatar */}
          <Avatar>
            A
          </Avatar>

          {/* Image Avatar */}
          <Avatar
            alt="User"
            src="https://i.pravatar.cc/150?img=50"
          />

          {/* Custom Avatar */}
          <Avatar
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            M
          </Avatar>

          <Avatar
            alt="My Avatar"
            src="/shubham.jpeg"
            sx={{
              width: 40,
              height: 40,
            }}
          />

        </Box>

      </Box>


      {/* ==================================================
          4. BADGE
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h6"
          gutterBottom
        >
          4. Badge
        </Typography>

        <Badge
          badgeContent={4}
          color="primary"
        >

          <Avatar>
            U
          </Avatar>

        </Badge>

      </Box>


      {/* ==================================================
          5. CIRCULAR PROGRESS
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h6"
          gutterBottom
        >
          5. Circular Progress
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
          }}
        >

          {/* Indeterminate */}
          <CircularProgress />

          {/* Determinate */}
          <CircularProgress
            variant="determinate"
            value={75}
          />

          <Typography>
            75%
          </Typography>

        </Box>

      </Box>


      {/* ==================================================
          6. DRAWER
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h6"
          gutterBottom
        >
          6. Drawer
        </Typography>

        <Button
          variant="contained"
          onClick={() => toggleDrawer(true)}
        >
          Open Drawer
        </Button>


        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >

          <Box
            sx={{
              width: 250,
              padding: 3,
            }}
          >

            <Typography
              variant="h5"
              gutterBottom
            >
              Menu
            </Typography>

            <Divider />

            <Typography
              sx={{ marginTop: 2 }}
            >
              Home
            </Typography>

            <Typography
              sx={{ marginTop: 2 }}
            >
              About
            </Typography>

            <Typography
              sx={{ marginTop: 2 }}
            >
              Contact
            </Typography>

            <Button
              sx={{ marginTop: 3 }}
              variant="outlined"
              onClick={() => toggleDrawer(false)}
            >
              Close
            </Button>

          </Box>

        </Drawer>

      </Box>


      {/* ==================================================
          7. TABS
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h6"
          gutterBottom
        >
          7. Tabs
        </Typography>

        <Tabs
          value={tabValue}
          onChange={handleTabChange}
        >

          <Tab label="Home" />

          <Tab label="About" />

          <Tab label="Contact" />

        </Tabs>


        <Box sx={{ marginTop: 2 }}>

          {tabValue === 0 && (
            <Typography>
              Welcome to the Home tab.
            </Typography>
          )}

          {tabValue === 1 && (
            <Typography>
              This is the About tab.
            </Typography>
          )}

          {tabValue === 2 && (
            <Typography>
              This is the Contact tab.
            </Typography>
          )}

        </Box>

      </Box>


      {/* ==================================================
          8. TOOLTIP
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h6"
          gutterBottom
        >
          8. Tooltip
        </Typography>

        <Tooltip
          title="Click this button"
          arrow
        >

          <Button
            variant="contained"
          >
            Hover Over Me
          </Button>

        </Tooltip>

      </Box>


    </Box>
  );
}


// ==================================================
// RENDER APP
// ==================================================

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default App;
