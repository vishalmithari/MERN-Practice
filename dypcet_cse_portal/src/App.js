// src/App.js
import React, { useState, useMemo } from 'react';
import './App.css';

// All Material UI Components from Presentation PDF
import {
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField,
  Checkbox,
  Switch,
  Slider,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Badge,
  CircularProgress,
  LinearProgress,
  Drawer,
  Tabs,
  Tab,
  Box,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Breadcrumbs,
  Link,
  Chip,
  Divider,
  Fab,
  Menu,
  MenuItem,
  Pagination,
  Popover,
  Rating,
  Skeleton,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  IconButton,
  Fade,
  Grow,
  InputAdornment
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import AddIcon from '@mui/icons-material/Add';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';

// Custom DYPCET Theme Configuration
const dypcetTheme = createTheme({
  palette: {
    primary: { main: '#0f2042' },
    secondary: { main: '#800000' },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
  },
});

// Comprehensive Faculty Information (DYPCET CSE Department)
const wholeFacultyData = [
  { id: 1, name: 'Dr. K. V. Kulhalli', role: 'Vice Principal & Professor', qualification: 'Ph.D., M.Tech (CSE)', experience: '31+ Years', specialization: 'Computer Networks, Distributed Databases & Cloud Architecture', email: 'kvk@dypgroup.edu.in', rating: 5, publications: 48 },
  { id: 2, name: 'Dr. B. D. Jitkar', role: 'Professor & Head of Department', qualification: 'Ph.D., M.E. (Computer)', experience: '23+ Years', specialization: 'Machine Learning, Algorithm Design, High Performance Computing', email: 'hod.cse@dypgroup.edu.in', rating: 5, publications: 36 },
  { id: 3, name: 'Prof. A. J. Jadhav', role: 'Associate Professor', qualification: 'M.Tech (CSE), Ph.D. (Pursuing)', experience: '17+ Years', specialization: 'Information Security, Cryptography & Threat Intelligence', email: 'ajjadhav@dypgroup.edu.in', rating: 5, publications: 22 },
  { id: 4, name: 'Dr. S. V. Sankpal', role: 'Associate Professor', qualification: 'Ph.D. (CSE), M.E.', experience: '18+ Years', specialization: 'Computer Vision, Image Processing & Pattern Recognition', email: 'svs@dypgroup.edu.in', rating: 4, publications: 29 },
  { id: 5, name: 'Prof. P. B. Patil', role: 'Assistant Professor', qualification: 'M.E. (CSE)', experience: '12+ Years', specialization: 'Internet of Things (IoT), Embedded Systems & Wireless Networks', email: 'pbpatil@dypgroup.edu.in', rating: 4, publications: 14 },
  { id: 6, name: 'Prof. S. R. Mane', role: 'Assistant Professor', qualification: 'M.Tech (Computer Science)', experience: '10+ Years', specialization: 'Full Stack Engineering, DevOps & Web Technologies', email: 'srmane@dypgroup.edu.in', rating: 4, publications: 11 },
  { id: 7, name: 'Prof. M. A. Pardesi', role: 'Assistant Professor', qualification: 'M.Tech (Software Engg)', experience: '11+ Years', specialization: 'Data Warehousing, Big Data Analytics & Database Security', email: 'mapardesi@dypgroup.edu.in', rating: 5, publications: 15 },
  { id: 8, name: 'Prof. N. A. Haval', role: 'Assistant Professor', qualification: 'M.Tech (CSE)', experience: '9+ Years', specialization: 'Natural Language Processing & Deep Learning Frameworks', email: 'nahaval@dypgroup.edu.in', rating: 4, publications: 9 },
  { id: 9, name: 'Prof. R. S. Kamble', role: 'Assistant Professor', qualification: 'M.E. (Information Tech)', experience: '8+ Years', specialization: 'Operating Systems, Linux Kernel Tuning & Virtualization', email: 'rskamble@dypgroup.edu.in', rating: 4, publications: 7 },
  { id: 10, name: 'Prof. V. V. Mangave', role: 'Assistant Professor', qualification: 'M.Tech (CSE)', experience: '10+ Years', specialization: 'Cyber Security, Digital Forensics & Penetration Testing', email: 'vvmangave@dypgroup.edu.in', rating: 5, publications: 12 },
  { id: 11, name: 'Prof. T. B. Mohite', role: 'Assistant Professor', qualification: 'M.E. (Computer)', experience: '7+ Years', specialization: 'Automata Theory, Compiler Construction & Algorithms', email: 'tbmohite@dypgroup.edu.in', rating: 4, publications: 6 },
  { id: 12, name: 'Prof. S. S. Shinde', role: 'Assistant Professor', qualification: 'M.Tech (Computer Science)', experience: '8+ Years', specialization: 'Artificial Intelligence, Soft Computing & Robotics', email: 'ssshinde@dypgroup.edu.in', rating: 4, publications: 8 },
];

const dypcetPlacements = [
  { recruiter: 'TCS (Ninja & Digital)', role: 'Software Engineer', highestPackage: '7.50 LPA', selected: 58 },
  { recruiter: 'Persistent Systems', role: 'Software Dev Specialist', highestPackage: '9.00 LPA', selected: 27 },
  { recruiter: 'Cognizant', role: 'GenC Next Analyst', highestPackage: '6.75 LPA', selected: 44 },
  { recruiter: 'Capgemini', role: 'Senior Software Analyst', highestPackage: '7.00 LPA', selected: 39 },
  { recruiter: 'Infosys (HackWithInfy)', role: 'Systems Engineer', highestPackage: '8.00 LPA', selected: 31 },
];

const dypcetAnnouncements = [
  'DYPCET B.Tech CSE & Artificial Intelligence Admissions Active for 2026-27.',
  'Shivaji University Inter-College Coding Hackathon registrations open.',
  'Department Research Grant cleared for High Performance Edge Computing Cluster.',
];

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  
  // Faculty tab dynamic filters
  const [facultySearch, setFacultySearch] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [facultyPage, setFacultyPage] = useState(1);
  const itemsPerPage = 6;

  // Eligibility Screener states
  const [filterRating, setFilterRating] = useState(4);
  const [capConsentChecked, setCapConsentChecked] = useState(false);
  const [hostelSwitch, setHostelSwitch] = useState(true);
  const [cutoffSlider, setCutoffSlider] = useState(86);
  const [applicantName, setApplicantName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMenuClick = (e) => setMenuAnchorEl(e.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);
  const handlePopoverClick = (e) => setPopoverAnchorEl(e.currentTarget);
  const handlePopoverClose = () => setPopoverAnchorEl(null);

  const handleRunCalculator = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSnackbarOpen(true);
    }, 1000);
  };

  // Filtered & Paginated Faculty
  const filteredFaculty = useMemo(() => {
    return wholeFacultyData.filter(f =>
      f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.specialization.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.role.toLowerCase().includes(facultySearch.toLowerCase())
    );
  }, [facultySearch]);

  const displayedFaculty = useMemo(() => {
    const start = (facultyPage - 1) * itemsPerPage;
    return filteredFaculty.slice(start, start + itemsPerPage);
  }, [filteredFaculty, facultyPage]);

  return (
    <ThemeProvider theme={dypcetTheme}>
      <Box sx={{ minHeight: '100vh', pb: 10 }}>
        
        {/* Top Accreditation Strip */}
        <Box className="dypcet-topbar">
          <Container maxWidth="lg" className="dypcet-topbar-inner">
            <Box display="flex" alignItems="center" gap={1}>
              <VerifiedIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                D. Y. Patil College of Engineering & Technology, Kolhapur | NAAC 'A' Grade Accredited | Autonomous
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <LocationOnIcon sx={{ fontSize: 15 }} />
              <Typography variant="caption" sx={{ fontWeight: 500 }}>
                Kasaba Bawada, Kolhapur, Maharashtra 416006 | DTE Code: 6288
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Dynamic Global Header */}
        <AppBar position="sticky" elevation={0} className="dypcet-appbar">
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ minHeight: 74 }}>
              <IconButton edge="start" color="primary" sx={{ mr: 2 }} onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              
              <Box display="flex" alignItems="center" flexGrow={1} gap={1.5}>
                <Box className="dypcet-logo-shield">DYP</Box>
                <Box>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1.1 }}>
                    Department of Computer Science & Engineering
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    D. Y. PATIL COLLEGE OF ENGINEERING & TECHNOLOGY (AUTONOMOUS)
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" gap={1.5}>
                <Tooltip title="Department Circulars">
                  <IconButton color="primary" sx={{ bgcolor: '#f1f5f9' }}>
                    <Badge badgeContent={dypcetAnnouncements.length} color="secondary">
                      <NotificationsIcon fontSize="small" />
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Button variant="outlined" color="primary" onClick={handleMenuClick} sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                  Department Portals
                </Button>
                <Menu
                  anchorEl={menuAnchorEl}
                  open={Boolean(menuAnchorEl)}
                  onClose={handleMenuClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleMenuClose}>Autonomous Curriculum & Syllabi</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Shivaji University Exam Cell</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Training & Placement Cell (TPO)</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleMenuClose}>Lead College Activities</MenuItem>
                </Menu>

                <Tooltip title="HOD Desk">
                  <Avatar sx={{ bgcolor: 'secondary.main', width: 38, height: 38, fontSize: '0.85rem', fontWeight: 700 }}>
                    HOD
                  </Avatar>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Drawer Component[cite: 1] */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 320, p: 3 }} role="presentation">
            <Box display="flex" alignItems="center" gap={1.5} mb={2}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 34, height: 34, fontSize: '0.85rem' }}>DYP</Avatar>
              <Typography variant="h6" color="primary.main" fontWeight={700}>DYPCET Navigation</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <List sx={{ pt: 0 }}>
              {[
                { text: 'Laboratories & Facilities', icon: <ComputerIcon /> },
                { text: 'Complete Faculty Directory', icon: <SchoolIcon /> },
                { text: 'Placements & Recruiters', icon: <StorageIcon /> },
                { text: 'Admissions & Eligibility', icon: <MenuBookIcon /> },
              ].map((item, idx) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => { setTabIndex(idx); setDrawerOpen(false); }}
                  sx={{ borderRadius: 2, mb: 0.5, '&:hover': { bgcolor: '#f1f5f9' } }}
                >
                  <ListItemIcon sx={{ color: 'primary.main', minWidth: 40 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 600 }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Dynamic Linear Progress[cite: 1] */}
        {loading && <LinearProgress color="secondary" sx={{ height: 3 }} />}

        {/* Breadcrumbs[cite: 1] */}
        <Container maxWidth="lg" sx={{ mt: 3, mb: 2 }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="https://coek.dypgroup.edu.in/" target="_blank">
              DYPCET Kolhapur
            </Link>
            <Typography color="inherit">Engineering Departments</Typography>
            <Typography color="primary.main" fontWeight={700}>Computer Science & Engineering</Typography>
          </Breadcrumbs>
        </Container>

        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ mb: 5 }}>
          <Paper elevation={0} className="dypcet-hero-banner">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Box display="flex" gap={1} mb={2.5}>
                  <Chip label="Autonomous Status" size="small" className="dypcet-chip-gold" />
                  <Chip label="Affiliated to Shivaji University" size="small" className="dypcet-chip-maroon" />
                </Box>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: { xs: '2.1rem', md: '2.85rem' } }}>
                  Department of Computer Science & Engineering
                </Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: 680, mb: 4, lineHeight: 1.6 }}>
                  Empowering technical intellect through accredited autonomous courses, 12 specialized computing labs, and highly qualified faculty members at Kasaba Bawada, Kolhapur.
                </Typography>
                <ButtonGroup variant="contained">
                  <Button
                    size="large"
                    className="btn-dypcet-gold"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => setDialogOpen(true)}
                  >
                    Admission Enquiry
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)', '&:hover': { borderColor: '#ffffff', bgcolor: 'rgba(255,255,255,0.1)' } }}
                    onClick={handlePopoverClick}
                  >
                    DYPCET Highlights
                  </Button>
                </ButtonGroup>
              </Grid>

              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <Paper elevation={0} className="hero-stat-widget">
                  <Box position="relative" display="inline-flex" mb={1.5}>
                    <CircularProgress variant="determinate" value={92} size={110} thickness={4.5} sx={{ color: '#c89d35' }} />
                    <Box className="stat-ring-center">
                      <Typography variant="h5" component="div" sx={{ color: '#ffffff', fontWeight: 700 }}>
                        92%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 700 }}>
                    Campus Placement Record
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#cbd5e1' }}>
                    Annual Central Recruitment Drive
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        {/* Tabbed Interactive Section[cite: 1] */}
        <Container maxWidth="lg">
          <Paper elevation={0} className="dypcet-tabs-wrapper">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={tabIndex}
                onChange={(e, val) => setTabIndex(val)}
                indicatorColor="secondary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Laboratories & Facilities" />
                <Tab label={`Faculty Directory (${wholeFacultyData.length})`} />
                <Tab label="Campus Placements" />
                <Tab label="Admission Eligibility Screener" />
              </Tabs>
            </Box>

            {/* TAB 0: Specialized Labs */}
            {tabIndex === 0 && (
              <Box sx={{ p: { xs: 3, md: 4 } }}>
                <Box mb={4}>
                  <Typography variant="h5" color="primary.main" fontWeight={700}>
                    Specialized Computing Laboratories
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Industry-calibrated development centers and testbeds supporting autonomous curricula and sponsored projects.
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Card className="faculty-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>
                          <PrecisionManufacturingIcon />
                        </Avatar>
                        <Chip label="Core AI Setup" color="primary" size="small" sx={{ mb: 1.5, fontWeight: 600 }} />
                        <Typography variant="h6" gutterBottom fontWeight={700}>AI & Machine Learning Lab</Typography>
                        <Typography variant="body2" color="text.secondary">
                          High-speed GPU workstations for neural network training, computer vision algorithms, and robotic vision tasks.
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button size="small" color="secondary">Lab Specifications →</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card className="faculty-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Avatar sx={{ bgcolor: '#1e3a6d', mb: 2 }}>
                          <StorageIcon />
                        </Avatar>
                        <Chip label="Enterprise Systems" color="info" size="small" sx={{ mb: 1.5, fontWeight: 600 }} />
                        <Typography variant="h6" gutterBottom fontWeight={700}>Cloud & High Performance Center</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Distributed server rack infrastructure hosting multi-tenant private clouds, containers, and database kernels.
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button size="small" color="secondary">Hardware Details →</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card className="faculty-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Avatar sx={{ bgcolor: 'secondary.main', mb: 2 }}>
                          <SecurityIcon />
                        </Avatar>
                        <Chip label="Cyber Operations" color="secondary" size="small" sx={{ mb: 1.5, fontWeight: 600 }} />
                        <Typography variant="h6" gutterBottom fontWeight={700}>Network Security & IoT Center</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Dedicated sandboxed local network for ethical hacking, intrusion analysis, and embedded IoT controllers.
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button size="small" color="secondary">Equipment Stack →</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 5 }}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                    Frequently Asked Questions (DYPCET CSE)
                  </Typography>
                  <Accordion sx={{ mb: 1, border: '1px solid #e2e8f0', '&:before': { display: 'none' } }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight={600}>What are the advantages of DYPCET Autonomous Status?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">
                        Autonomy allows DYPCET to formulate curriculum upgrades matching industry demands, introduce elective pathways, and conduct streamlined examinations with Shivaji University certification.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ border: '1px solid #e2e8f0', '&:before': { display: 'none' } }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight={600}>How are student internships structured?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">
                        Students undertake continuous mandatory semester-long industry internships in the 8th semester facilitated by the DYPCET Training & Placement Cell.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            )}

            {/* TAB 1: Complete Faculty Directory */}
            {tabIndex === 1 && (
              <Box sx={{ p: { xs: 3, md: 4 } }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2} mb={3}>
                  <Box>
                    <Typography variant="h5" color="primary.main" fontWeight={700}>
                      Department Faculty Members
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Showing {displayedFaculty.length} of {filteredFaculty.length} full-time faculty members at DYPCET CSE.
                    </Typography>
                  </Box>
                  <TextField
                    size="small"
                    placeholder="Search by name or specialization..."
                    value={facultySearch}
                    onChange={(e) => {
                      setFacultySearch(e.target.value);
                      setFacultyPage(1);
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: { xs: '100%', sm: 300 } }}
                  />
                </Box>

                <Grid container spacing={3}>
                  {displayedFaculty.map((faculty, index) => (
                    <Grid item xs={12} sm={6} md={4} key={faculty.id}>
                      <Grow in timeout={(index + 1) * 200}>
                        <Card className="faculty-card" sx={{ p: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                              <Avatar className="faculty-avatar-box">
                                {faculty.name.split(' ')[1]?.[0] || 'D'}
                              </Avatar>
                              <Box>
                                <Typography variant="subtitle1" fontWeight={700} sx={{ color: 'primary.main', lineHeight: 1.2 }}>
                                  {faculty.name}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                                  {faculty.role}
                                </Typography>
                              </Box>
                            </Box>
                            <Divider sx={{ mb: 1.5 }} />
                            
                            <Typography variant="body2" sx={{ fontSize: '0.82rem', mb: 0.5, color: '#334155' }}>
                              <strong>Degree:</strong> {faculty.qualification}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '0.82rem', mb: 1, minHeight: 40, color: '#475569' }}>
                              <strong>Domain:</strong> {faculty.specialization}
                            </Typography>
                            
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                              <Chip label={`Exp: ${faculty.experience}`} size="small" variant="outlined" sx={{ fontWeight: 600, fontSize: '0.72rem' }} />
                              <Chip label={`${faculty.publications} Papers`} size="small" color="primary" sx={{ fontWeight: 600, fontSize: '0.72rem' }} />
                            </Box>
                            
                            <Box display="flex" justifyContent="space-between" alignItems="center" pt={0.5}>
                              <Typography variant="caption" color="text.secondary">Academic Feedback:</Typography>
                              <Rating value={faculty.rating} readOnly size="small" />
                            </Box>
                          </CardContent>

                          <CardActions sx={{ px: 2, pb: 2 }}>
                            <Button
                              size="small"
                              variant="outlined"
                              color="primary"
                              fullWidth
                              onClick={() => setSelectedFaculty(faculty)}
                            >
                              Contact & Details
                            </Button>
                          </CardActions>
                        </Card>
                      </Grow>
                    </Grid>
                  ))}
                </Grid>

                {/* Pagination Component[cite: 1] */}
                <Box display="flex" justifyContent="center" mt={4}>
                  <Pagination
                    count={Math.ceil(filteredFaculty.length / itemsPerPage)}
                    page={facultyPage}
                    onChange={(e, val) => setFacultyPage(val)}
                    color="primary"
                    shape="rounded"
                  />
                </Box>
              </Box>
            )}

            {/* TAB 2: Campus Placements */}
            {tabIndex === 2 && (
              <Box sx={{ p: { xs: 3, md: 4 } }}>
                <Box mb={3}>
                  <Typography variant="h5" color="primary.main" fontWeight={700}>
                    Campus Recruitment Records
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Official records for Computer Science & Engineering students from recent placement seasons.
                  </Typography>
                </Box>
                <TableContainer component={Paper} elevation={0} className="dypcet-table-container">
                  <Table className="dypcet-table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Company / Corporate Partner</TableCell>
                        <TableCell>Role Offered</TableCell>
                        <TableCell align="right">Package (CTC)</TableCell>
                        <TableCell align="right">Students Selected</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dypcetPlacements.map((row) => (
                        <TableRow key={row.recruiter} className="dypcet-table-row">
                          <TableCell sx={{ fontWeight: 700, color: 'primary.main' }}>{row.recruiter}</TableCell>
                          <TableCell>{row.role}</TableCell>
                          <TableCell align="right" sx={{ fontWeight: 700 }}>{row.highestPackage}</TableCell>
                          <TableCell align="right">
                            <Chip label={`${row.selected} Offers`} color="primary" size="small" variant="outlined" sx={{ fontWeight: 600 }} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}

            {/* TAB 3: Eligibility Calculator */}
            {tabIndex === 3 && (
              <Box sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" color="primary.main" fontWeight={700} gutterBottom>
                  DYPCET Admission Eligibility Screener
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Verify estimated merit parameters for DTE Maharashtra Centralized Admission Process (CAP) rounds.
                </Typography>
                
                <Paper elevation={0} sx={{ p: 4, maxWidth: 640, bgcolor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 2 }}>
                  <Box mb={3}>
                    <Typography variant="subtitle2" gutterBottom>
                      MHT-CET / JEE Main Percentile: <strong>{cutoffSlider}%</strong>
                    </Typography>
                    <Slider
                      value={cutoffSlider}
                      onChange={(e, val) => setCutoffSlider(val)}
                      valueLabelDisplay="auto"
                      min={60}
                      max={100}
                      color="secondary"
                    />
                  </Box>

                  <Box mb={2}>
                    <Typography variant="subtitle2" gutterBottom>Minimum Faculty Experience Level:</Typography>
                    <Rating
                      value={filterRating}
                      onChange={(e, val) => setFilterRating(val)}
                    />
                  </Box>

                  <Box mb={2}>
                    <FormControlLabel
                      control={<Switch checked={hostelSwitch} onChange={(e) => setHostelSwitch(e.target.checked)} color="secondary" />}
                      label={<Typography variant="body2">Include DYPCET Campus Hostel Facility Information</Typography>}
                    />
                  </Box>

                  <Box mb={3}>
                    <FormControlLabel
                      control={<Checkbox checked={capConsentChecked} onChange={(e) => setCapConsentChecked(e.target.checked)} color="primary" />}
                      label={<Typography variant="body2">I verify that my 12th PCM aggregate scores meet AICTE/DTE criteria</Typography>}
                    />
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={!capConsentChecked}
                    onClick={handleRunCalculator}
                    fullWidth
                    className="btn-dypcet-gold"
                  >
                    Check Seat Allocation Chances
                  </Button>
                </Paper>

                <Box sx={{ mt: 4, maxWidth: 640 }}>
                  <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                    LIVE ADMISSIONS BUFFER FEED:
                  </Typography>
                  <Skeleton variant="rounded" width="100%" height={50} animation="wave" />
                </Box>
              </Box>
            )}
          </Paper>
        </Container>

        {/* Popover Component[cite: 1] */}
        <Popover
          open={Boolean(popoverAnchorEl)}
          anchorEl={popoverAnchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Box sx={{ p: 2.5, maxWidth: 300 }}>
            <Typography variant="subtitle2" color="primary.main" fontWeight={700} gutterBottom>
              DYPCET at a Glance
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
              • Founded in 1984 under D. Y. Patil Group
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
              • 40+ Years of Academic Excellence
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
              • NAAC 'A' Grade Accredited Autonomous Campus
            </Typography>
          </Box>
        </Popover>

        {/* Dialog Component (General Enquiry)[cite: 1] */}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle sx={{ fontWeight: 700, color: 'primary.main' }}>
            DYPCET CSE Admission Enquiry
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 2, fontSize: '0.9rem' }}>
              Submit your name to receive the autonomous CSE curriculum book and direct counselling assistance from the department.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Full Name of Candidate"
              type="text"
              fullWidth
              variant="outlined"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button onClick={() => setDialogOpen(false)} color="inherit">Cancel</Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setDialogOpen(false);
                setSnackbarOpen(true);
              }}
            >
              Submit Application
            </Button>
          </DialogActions>
        </Dialog>

        {/* Faculty Bio Detail Dialog */}
        <Dialog open={Boolean(selectedFaculty)} onClose={() => setSelectedFaculty(null)} maxWidth="sm" fullWidth>
          {selectedFaculty && (
            <>
              <DialogTitle sx={{ fontWeight: 700, color: 'primary.main' }}>
                {selectedFaculty.name}
              </DialogTitle>
              <DialogContent dividers>
                <Typography variant="subtitle2" color="secondary.main" gutterBottom>
                  {selectedFaculty.role} — DYPCET CSE
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  <strong>Educational Background:</strong> {selectedFaculty.qualification}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  <strong>Total Experience:</strong> {selectedFaculty.experience}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  <strong>Research Specialization:</strong> {selectedFaculty.specialization}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  <strong>Peer-Reviewed Publications:</strong> {selectedFaculty.publications}
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mt={2}>
                  <EmailIcon fontSize="small" color="primary" />
                  <Typography variant="body2" color="primary.main">
                    {selectedFaculty.email}
                  </Typography>
                </Box>
              </DialogContent>
              <DialogActions sx={{ p: 2 }}>
                <Button onClick={() => setSelectedFaculty(null)} variant="contained" color="primary">
                  Close Profile
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Snackbar Feedback[cite: 1] */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
          message="Candidate records logged. The DYPCET Admission Cell will reach out shortly."
        />

        {/* FAB Component[cite: 1] */}
        <Tooltip title="Admission Assistance">
          <Fab
            color="secondary"
            aria-label="add"
            className="fab-help-btn"
            onClick={() => setDialogOpen(true)}
          >
            <AddIcon />
          </Fab>
        </Tooltip>

        {/* SpeedDial Component[cite: 1] */}
        <SpeedDial
          ariaLabel="DYPCET Tools"
          className="speeddial-tools"
          icon={<SpeedDialIcon />}
          direction="up"
        >
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Download Syllabus Brochure" />
          <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save Coursework" />
          <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print Scheme" />
          <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share DYPCET CSE Portal" />
        </SpeedDial>
      </Box>
    </ThemeProvider>
  );
}

export default App;