
import React, { useMemo, useState } from "react";
import {
  Accordion, AccordionDetails, AccordionSummary, Alert, AppBar, Autocomplete,
  Avatar, Badge, Box, Breadcrumbs, Button, ButtonGroup, Card, CardContent,
  CardMedia, Checkbox, Chip, CircularProgress, Container, Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Fab, Grid,
  IconButton, LinearProgress, Link, List, ListItem, ListItemText, Menu,
  MenuItem, Pagination, Paper, Popover, Rating, Skeleton, Slider, Snackbar,
  SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Switch, Tab, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField,
  Toolbar, Tooltip, Typography
} from "@mui/material";
import {
  Add, ArrowForward, Code, Email, Event, ExpandMore, GitHub, Instagram,
  KeyboardArrowUp, LinkedIn, LocationOn, Menu as MenuIcon, PlayArrow,
  School, Search, SmartToy, WhatsApp, YouTube, Close, Download, Science,
  Groups, BusinessCenter, Lightbulb, Cloud, Security, Storage, Public,
  CalendarMonth, Phone, Computer, CheckCircle, Launch, MailOutline
} from "@mui/icons-material";
import { FaApple } from "react-icons/fa";
import faculty from "./facultyData";

const campusVideo = "https://www.youtube.com/embed/AntTdf4o7qM";
const virtualTour = "https://www.youtube.com/embed/CcEccQElTR0";

const programs = [
  { title: "B.Tech Computer Science & Engineering", tag: "UG", icon: <Computer />, text: "Core computing foundations with programming, algorithms, systems, databases, networks and software engineering." },
  { title: "B.Tech CSE (AI & ML)", tag: "UG", icon: <SmartToy />, text: "Artificial intelligence, machine learning, deep learning and intelligent systems." },
  { title: "B.Tech CSE (Data Science)", tag: "UG", icon: <Science />, text: "Data engineering, analytics, visualization, statistics and machine learning." },
  { title: "M.Tech Computer Science & Engineering", tag: "PG", icon: <School />, text: "Advanced postgraduate study and research in contemporary computing." },
];

const researchAreas = [
  ["Artificial Intelligence & Machine Learning", <SmartToy />],
  ["Data Science & Big Data", <Storage />],
  ["Cyber Security & Networks", <Security />],
  ["Cloud & Distributed Computing", <Cloud />],
  ["Computer Vision & NLP", <Science />],
  ["Software Engineering", <Code />],
];

const labs = [
  ["AI & Machine Learning Lab", "Hands-on intelligent systems, model development and experimentation."],
  ["Data Science Lab", "Analytics, visualization, databases and applied data engineering."],
  ["Networking & Cyber Security Lab", "Networks, security, protocols and infrastructure experimentation."],
  ["Programming & Software Lab", "Programming, web development, software engineering and projects."],
  ["Cloud Computing Lab", "Virtualized environments, distributed applications and cloud platforms."],
  ["Project Innovation Lab", "Capstone projects, student research, prototypes and startup ideas."],
];

const news = [
  { title: "International Conference on Computing Sciences", date: "2024", text: "DYPCET organized ICCS-2024, bringing experts together around advances in computing technologies." },
  { title: "Distinguished Guest Lecture", date: "Recent", text: "A distinguished lecture focused on Python and C programming inspired students through practical learning." },
  { title: "Industrial & Innovation Visits", date: "2026", text: "CSE students continue to connect classroom learning with innovation ecosystems and industry." },
];

const achievements = [
  ["64 LPA", "Highest package at institute level (official DYPCET site source)"],
  ["2,265+", "Students placed in the 4-year overview"],
  ["520+", "Companies visited campus"],
  ["92%", "Placement rate for eligible students"],
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <Box className="sectionTitle" sx={{ mb: 5 }}>
      <Chip label={eyebrow} size="small" color="primary" sx={{ mb: 1.5, fontWeight: 800 }} />
      <Typography variant="h2">{title}</Typography>
      {text && <Typography color="text.secondary" sx={{ mt: 1.2, maxWidth: 760 }}>{text}</Typography>}
    </Box>
  );
}

function Hero({ onVideo }) {
  return (
    <Box id="home" className="hero">
      <Box className="heroGrid" />
      <Box className="heroOrb orb1" /><Box className="heroOrb orb2" />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Breadcrumbs sx={{ color: "rgba(255,255,255,.72)", mb: 3 }}>
          <Link underline="hover" color="inherit" href="#home">DYPCET</Link>
          <Typography color="inherit">CSE Department</Typography>
        </Breadcrumbs>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <Chip icon={<Code />} label="COMPUTER SCIENCE & ENGINEERING" className="heroChip" />
            <Typography className="heroTitle" component="h1">
              Build the <span>future</span><br />with code.
            </Typography>
            <Typography className="heroText">
              Department of Computer Science & Engineering at D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
              <Button href="#academics" size="large" variant="contained" endIcon={<ArrowForward />} className="glowBtn">Explore Academics</Button>
              <Button size="large" variant="outlined" onClick={onVideo} startIcon={<PlayArrow />} className="heroOutline">Campus Video</Button>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mt: 4, flexWrap: "wrap" }}>
              {["Autonomous Institute", "NAAC A", "NBA Accredited", "AICTE Approved"].map(x => <Chip key={x} label={x} variant="outlined" sx={{ color:"#fff", borderColor:"rgba(255,255,255,.28)", mt:1 }} />)}
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper className="heroPanel" elevation={0}>
              <Box className="codeWindow">
                <Box className="dots"><i/><i/><i/></Box>
                <Typography component="pre" sx={{ m:0, fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace", fontSize:{xs:12,sm:14}, lineHeight:1.8 }}>
{`const future = {
  skills: ["AI", "Cloud", "Cyber"],
  mindset: "innovate",
  campus: "DYPCET"
};

build(future);`}
                </Typography>
              </Box>
              <Grid container spacing={1.5} sx={{ mt: 1 }}>
                {["AI / ML","Cloud","Cyber Security","Data Science"].map((x,i)=>
                  <Grid item xs={6} key={x}><Paper className="miniTech"><Typography variant="caption">{["01","02","03","04"][i]}</Typography><Typography fontWeight={800}>{x}</Typography></Paper></Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Stats() {
  return <Box className="statsStrip"><Container maxWidth="lg"><Grid container spacing={2}>
    {achievements.map(([n,t]) => <Grid item xs={6} md={3} key={n}><Box className="stat"><Typography variant="h3">{n}</Typography><Typography variant="body2">{t}</Typography></Box></Grid>)}
  </Grid></Container></Box>;
}

function FacultySection() {
  const [query, setQuery] = useState("");
  const [designation, setDesignation] = useState("All");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 8;
  const designations = ["All", ...new Set(faculty.map(f => f.designation))];
  const filtered = useMemo(() => faculty.filter(f =>
    (designation === "All" || f.designation === designation) &&
    `${f.name} ${f.specialization} ${f.qualification}`.toLowerCase().includes(query.toLowerCase())
  ), [query, designation]);
  const pages = Math.max(1, Math.ceil(filtered.length/perPage));
  const shown = filtered.slice((page-1)*perPage, page*perPage);
  return <Box id="faculty" className="section alt">
    <Container maxWidth="lg">
      <SectionTitle eyebrow="PEOPLE" title="Faculty & mentors" text="A searchable, filterable faculty directory inspired by the people-first structure of the IIT Hyderabad CSE website." />
      <Paper className="filterBar">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={5}><TextField fullWidth value={query} onChange={e=>{setQuery(e.target.value);setPage(1)}} label="Search faculty" placeholder="Name, specialization..." InputProps={{startAdornment:<Search sx={{mr:1}}/>}} /></Grid>
          <Grid item xs={12} md={4}><Autocomplete options={designations} value={designation} onChange={(_,v)=>{setDesignation(v||"All");setPage(1)}} renderInput={p=><TextField {...p} label="Designation filter" />} /></Grid>
          <Grid item xs={12} md={3}><Box sx={{p:1}}><Typography variant="caption" color="text.secondary">Directory size</Typography><Typography variant="h6">{filtered.length} profiles shown</Typography><Slider size="small" defaultValue={75} disabled aria-label="directory indicator" /></Box></Grid>
        </Grid>
      </Paper>
      <Grid container spacing={2.5} sx={{ mt: 2 }}>
        {shown.map((f,i)=><Grid item xs={12} sm={6} md={3} key={f.name}>
          <Card className="facultyCard">
            <CardMedia component="img" height="210" image={`https://i.pravatar.cc/500?img=${20+i}`} alt={f.name} />
            <CardContent>
              <Chip size="small" label={f.designation} color={f.designation.includes("Professor") ? "primary":"secondary"} sx={{mb:1}} />
              <Typography variant="h6" fontWeight={900}>{f.name}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt:.7, minHeight:44}}>{f.specialization}</Typography>
              <Button onClick={()=>setSelected(f)} sx={{mt:1}} endIcon={<ArrowForward />}>View profile</Button>
            </CardContent>
          </Card>
        </Grid>)}
      </Grid>
      <Stack alignItems="center" sx={{mt:4}}><Pagination count={pages} page={page} onChange={(_,v)=>setPage(v)} color="primary" /></Stack>
      <Typography variant="caption" color="text.secondary" sx={{display:"block", mt:2}}>
        Faculty data is seeded from publicly available DYPCET official faculty profiles and DYPCET IRINS records. Add the remaining department records to src/facultyData.js as they are verified.
      </Typography>
    </Container>
    <Dialog open={!!selected} onClose={()=>setSelected(null)} maxWidth="sm" fullWidth>
      {selected && <><DialogTitle>{selected.name}</DialogTitle><DialogContent dividers>
        <Stack direction="row" spacing={2} alignItems="center" sx={{mb:2}}><Avatar sx={{width:64,height:64}}>{selected.name.split(" ").map(x=>x[0]).slice(0,2).join("")}</Avatar><Box><Typography fontWeight={800}>{selected.designation}</Typography><Typography variant="body2" color="text.secondary">{selected.source}</Typography></Box></Stack>
        <List>
          <ListItem><ListItemText primary="Qualification" secondary={selected.qualification || "Not listed in source"} /></ListItem>
          <ListItem><ListItemText primary="Specialization" secondary={selected.specialization || "Not listed in source"} /></ListItem>
          <ListItem><ListItemText primary="Email" secondary={selected.email || "Not listed in source"} /></ListItem>
        </List>
      </DialogContent><DialogActions><Button onClick={()=>setSelected(null)}>Close</Button></DialogActions></>}
    </Dialog>
  </Box>;
}

function Academics() {
  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState(true);
  return <Box id="academics" className="section">
    <Container maxWidth="lg">
      <SectionTitle eyebrow="ACADEMICS" title="Learning that compounds" text="A department hub for programs, curriculum, academic resources and student learning." />
      <Tabs value={tab} onChange={(_,v)=>setTab(v)} variant="scrollable" scrollButtons="auto" sx={{mb:3}}><Tab label="Programs"/><Tab label="Curriculum"/><Tab label="Academic resources"/></Tabs>
      {tab===0 && <Grid container spacing={3}>{programs.map(p=><Grid item xs={12} sm={6} key={p.title}><Card className="programCard"><CardContent><Avatar className="iconAvatar">{p.icon}</Avatar><Chip label={p.tag} size="small" sx={{float:"right"}}/><Typography variant="h5" sx={{mt:2}}>{p.title}</Typography><Typography color="text.secondary" sx={{mt:1}}>{p.text}</Typography><Button sx={{mt:2}} endIcon={<ArrowForward />}>Explore</Button></CardContent></Card></Grid>)}</Grid>}
      {tab===1 && <Paper className="curriculumPanel"><Grid container spacing={3}><Grid item xs={12} md={7}><Typography variant="h5" fontWeight={900}>Outcome-based curriculum</Typography><Typography color="text.secondary" sx={{mt:1}}>Organize semester-wise subjects, credits, outcomes, electives and academic documents here. The table component below is ready for dynamic data.</Typography><TableContainer component={Paper} sx={{mt:3}}><Table size="small"><TableHead><TableRow><TableCell>Year</TableCell><TableCell>Focus</TableCell><TableCell>Progress</TableCell></TableRow></TableHead><TableBody>{[["I","Programming foundations","92%"],["II","Data structures & systems","86%"],["III","AI / cloud / security","78%"],["IV","Projects & industry","71%"]].map(r=><TableRow key={r[0]}><TableCell>{r[0]}</TableCell><TableCell>{r[1]}</TableCell><TableCell>{r[2]}</TableCell></TableRow>)}</TableBody></Table></TableContainer></Grid><Grid item xs={12} md={5}><Alert severity="info">Use this section for official syllabus PDFs and academic circulars.</Alert><FormLabelRow label="Notify me about academic updates" checked={checked} setChecked={setChecked}/><LinearProgress variant="determinate" value={82} sx={{mt:3}}/></Grid></Grid></Paper>}
      {tab===2 && <Grid container spacing={3}>{["Time Tables","Syllabus & Curriculum","Examination","Academic Calendar","Student Handbooks","Department Notices"].map((x,i)=><Grid item xs={12} sm={6} md={4} key={x}><Paper className="resourceCard"><Avatar>{i+1}</Avatar><Typography variant="h6" fontWeight={800}>{x}</Typography><Typography variant="body2" color="text.secondary">Quick access placeholder for dynamic department documents.</Typography><Button size="small" endIcon={<Launch/>}>Open</Button></Paper></Grid>)}</Grid>}
    </Container>
  </Box>;
}
function FormLabelRow({label,checked,setChecked}) { return <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{mt:2}}><Typography>{label}</Typography><Checkbox checked={checked} onChange={e=>setChecked(e.target.checked)} /></Stack> }

function Research() {
  return <Box id="research" className="section darkSection"><Container maxWidth="lg">
    <SectionTitle eyebrow="RESEARCH" title="Ideas into impact" text="Research themes, laboratories, publications and projects can be managed from one department dashboard." />
    <Grid container spacing={2.5}>{researchAreas.map(([x,icon])=><Grid item xs={12} sm={6} md={4} key={x}><Paper className="researchCard"><Avatar>{icon}</Avatar><Typography variant="h6">{x}</Typography><Divider sx={{my:1.5,borderColor:"rgba(255,255,255,.1)"}}/><Typography variant="body2">Projects • publications • student teams</Typography></Paper></Grid>)}</Grid>
    <Box sx={{mt:6}}><Typography variant="h4" fontWeight={900} sx={{mb:2}}>Research readiness</Typography><LinearProgress variant="determinate" value={78} sx={{height:8,borderRadius:8}}/></Box>
  </Container></Box>;
}

function Labs() {
  return <Box id="labs" className="section alt"><Container maxWidth="lg"><SectionTitle eyebrow="LABORATORIES" title="Where theory becomes tangible" />
    <Grid container spacing={3}>{labs.map((l,i)=><Grid item xs={12} sm={6} md={4} key={l[0]}><Card className="labCard"><CardMedia component="img" height="160" image={`https://images.unsplash.com/photo-${["1518770660439-4636190af475","1558494949-ef010cbdcc31","1550751827-4bd374c3f58b","1498050108023-c5249f4df085","1451187580459-43490279c0fa","1521737711867-e3b97375f902"][i]}?auto=format&fit=crop&w=900&q=80`} alt="" /><CardContent><Chip label={`LAB ${String(i+1).padStart(2,"0")}`} size="small"/><Typography variant="h6" sx={{mt:1}}>{l[0]}</Typography><Typography variant="body2" color="text.secondary">{l[1]}</Typography></CardContent></Card></Grid>)}</Grid>
  </Container></Box>;
}

function Campus() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState(campusVideo);
  return <Box id="campus" className="section"><Container maxWidth="lg"><SectionTitle eyebrow="CAMPUS LIFE" title="Experience DYPCET" text="Use official DYPCET videos for campus storytelling and virtual tours." />
    <Grid container spacing={3} alignItems="stretch">
      <Grid item xs={12} md={8}><Paper className="videoCard" onClick={()=>{setSrc(campusVideo);setOpen(true)}}><Box className="videoPoster"><img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85" alt="College campus"/><Box className="playCircle"><PlayArrow/></Box></Box><Box sx={{p:2.5}}><Typography variant="h5" fontWeight={900}>Official DYPCET Campus Tour</Typography><Typography color="text.secondary">Infrastructure, classrooms, laboratories and campus life.</Typography></Box></Paper></Grid>
      <Grid item xs={12} md={4}><Stack spacing={2}><Paper className="tourTile" onClick={()=>{setSrc(virtualTour);setOpen(true)}}><Avatar><PlayArrow/></Avatar><Typography variant="h6">Virtual Tour</Typography><Typography variant="body2">Explore campus remotely.</Typography></Paper><Paper className="tourTile"><Avatar><Instagram/></Avatar><Typography variant="h6">Student Life</Typography><Typography variant="body2">Events, clubs, achievements and activities.</Typography></Paper><Paper className="tourTile"><Avatar><Groups/></Avatar><Typography variant="h6">Community</Typography><Typography variant="body2">Students, faculty, alumni and industry.</Typography></Paper></Stack></Grid>
    </Grid>
    <Dialog open={open} onClose={()=>setOpen(false)} maxWidth="md" fullWidth><DialogTitle>DYPCET Video <IconButton onClick={()=>setOpen(false)} sx={{float:"right"}}><Close/></IconButton></DialogTitle><DialogContent><Box sx={{position:"relative",paddingTop:"56.25%"}}><iframe title="DYPCET video" src={src} style={{position:"absolute",inset:0,width:"100%",height:"100%",border:0}} allowFullScreen /></Box></DialogContent></Dialog>
  </Container></Box>;
}

function News() {
  const [snack,setSnack]=useState(false);
  const [anchor,setAnchor]=useState(null);
  const [popover,setPopover]=useState(false);
  return <Box id="news" className="section alt"><Container maxWidth="lg"><SectionTitle eyebrow="HIGHLIGHTS" title="News, events & achievements" />
    <Grid container spacing={3}>{news.map((n,i)=><Grid item xs={12} md={4} key={n.title}><Card className="newsCard"><CardContent><Stack direction="row" justifyContent="space-between" alignItems="center"><Chip label={n.date}/><Badge badgeContent={i+1} color="secondary"><Event/></Badge></Stack><Typography variant="h5" sx={{mt:2}}>{n.title}</Typography><Typography color="text.secondary" sx={{mt:1}}>{n.text}</Typography><Button sx={{mt:2}} onClick={()=>setSnack(true)}>Save update</Button></CardContent></Card></Grid>)}</Grid>
    <Box sx={{mt:5}}><ButtonGroup variant="outlined"><Button onClick={()=>setSnack(true)}>Latest</Button><Button onClick={(e)=>setAnchor(e.currentTarget)}>More</Button></ButtonGroup><Menu anchorEl={anchor} open={!!anchor} onClose={()=>setAnchor(null)}><MenuItem onClick={()=>setAnchor(null)}>Events</MenuItem><MenuItem onClick={()=>setAnchor(null)}>Notices</MenuItem><MenuItem onClick={()=>setAnchor(null)}>Achievements</MenuItem></Menu><Button sx={{ml:2}} onClick={()=>setPopover(true)}>Quick info</Button><Popover open={popover} onClose={()=>setPopover(false)} anchorOrigin={{vertical:"bottom",horizontal:"left"}}><Typography sx={{p:2}}>Department announcements can be connected to an API or CMS later.</Typography></Popover></Box>
    <Snackbar open={snack} autoHideDuration={3000} onClose={()=>setSnack(false)} message="Update saved to your shortlist" />
  </Container></Box>;
}

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
  ];
  return <Box id="gallery" className="section"><Container maxWidth="lg"><SectionTitle eyebrow="GALLERY" title="CSE in motion" />
    <Grid container spacing={2}>{images.map((x,i)=><Grid item xs={12} sm={6} md={3} key={x}><Card className="galleryCard"><img src={x} alt={`Gallery ${i+1}`}/><Box className="galleryOverlay"><Typography>Campus • CSE • {i+1}</Typography></Box></Card></Grid>)}</Grid>
  </Container></Box>;
}

function Contact() {
  const [sent,setSent]=useState(false);
  return <Box id="contact" className="contactSection"><Container maxWidth="lg"><Grid container spacing={5}><Grid item xs={12} md={6}><Chip label="CONTACT CSE" sx={{mb:2}}/><Typography variant="h2" sx={{color:"#fff"}}>Let’s build what’s next.</Typography><Typography sx={{color:"rgba(255,255,255,.7)",mt:2}}>Kasaba Bawada, Kolhapur – 416006, Maharashtra, India</Typography><Stack spacing={1.5} sx={{mt:3,color:"rgba(255,255,255,.85)"}}><Stack direction="row" spacing={1}><Phone/><Typography>+91 91586 15999</Typography></Stack><Stack direction="row" spacing={1}><MailOutline/><Typography>info.dypcet@dypgroup.edu.in</Typography></Stack><Stack direction="row" spacing={1}><LocationOn/><Typography>DYPCET, Kolhapur</Typography></Stack></Stack><Stack direction="row" spacing={1} sx={{mt:3}}><Tooltip title="LinkedIn"><IconButton sx={{color:"#fff"}}><LinkedIn/></IconButton></Tooltip><Tooltip title="Instagram"><IconButton sx={{color:"#fff"}}><Instagram/></IconButton></Tooltip><Tooltip title="YouTube"><IconButton sx={{color:"#fff"}}><YouTube/></IconButton></Tooltip><Tooltip title="GitHub"><IconButton sx={{color:"#fff"}}><GitHub/></IconButton></Tooltip></Stack></Grid>
    <Grid item xs={12} md={6}><Paper className="contactForm"><Typography variant="h5" fontWeight={900}>Send an enquiry</Typography><Stack spacing={2} sx={{mt:2}}><TextField label="Your name" fullWidth/><TextField label="Email" type="email" fullWidth/><TextField label="Topic" fullWidth/><TextField label="Message" multiline minRows={4} fullWidth/><FormLabelRow label="I agree to be contacted by the department" checked={true} setChecked={()=>{}}/><Button variant="contained" size="large" onClick={()=>setSent(true)} endIcon={<ArrowForward/>}>Submit enquiry</Button></Stack></Paper></Grid></Grid></Container><Snackbar open={sent} autoHideDuration={3500} onClose={()=>setSent(false)} message="Thank you. Your enquiry has been recorded in this demo UI." /></Box>;
}

function App() {
  const [drawer,setDrawer]=useState(false);
  const [video,setVideo]=useState(false);
  const [menuAnchor,setMenuAnchor]=useState(null);
  const [speed,setSpeed]=useState(null);
  const [loading,setLoading]=useState(true);
  React.useEffect(()=>{const t=setTimeout(()=>setLoading(false),900);return()=>clearTimeout(t)},[]);
  const nav = ["About","Academics","Faculty","Research","Labs","Campus","News","Gallery","Contact"];
  if (loading) return <Box className="loader"><CircularProgress size={52}/><Typography sx={{mt:2}}>Loading DYPCET CSE...</Typography><Skeleton width={220}/></Box>;
  return <Box>
    <AppBar position="fixed" className="topbar"><Toolbar sx={{minHeight:{xs:68,md:76}}}><Box className="brandMark"><Avatar><Code/></Avatar><Box><Typography fontWeight={900} lineHeight={1}>DYPCET</Typography><Typography variant="caption">CSE DEPARTMENT</Typography></Box></Box>
      <Box sx={{flex:1}}/>
      <Box className="desktopNav">{nav.map(x=><Button key={x} href={`#${x.toLowerCase()}`} color="inherit">{x}</Button>)}</Box>
      <ButtonGroup className="desktopNav" sx={{ml:1}}><Button color="inherit" startIcon={<MailOutline/>} onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>Connect</Button></ButtonGroup>
      <IconButton className="mobileNav" color="inherit" onClick={()=>setDrawer(true)}><MenuIcon/></IconButton>
    </Toolbar></AppBar>
    <Drawer open={drawer} onClose={()=>setDrawer(false)}><Box sx={{width:290,p:2}}><Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mb:2}}><Typography variant="h6" fontWeight={900}>DYPCET CSE</Typography><IconButton onClick={()=>setDrawer(false)}><Close/></IconButton></Stack><List>{nav.map(x=><ListItem key={x} component="a" href={`#${x.toLowerCase()}`} onClick={()=>setDrawer(false)}><ListItemText primary={x}/></ListItem>)}</List></Box></Drawer>
    <Box sx={{pt:"76px"}}><Hero onVideo={()=>setVideo(true)}/><Stats/><Box id="about" className="section"><Container maxWidth="lg"><Grid container spacing={5} alignItems="center"><Grid item xs={12} md={6}><SectionTitle eyebrow="ABOUT CSE" title="A department for curious minds." text="The CSE department is designed as a connected ecosystem of teaching, research, laboratories, industry exposure and student innovation."/><Stack spacing={1.2}>{["Industry-ready technical skills","Research-led learning","Project and coding culture","Mentorship & student activities"].map(x=><Stack direction="row" spacing={1.2} key={x}><CheckCircle color="primary"/><Typography>{x}</Typography></Stack>)}</Stack></Grid><Grid item xs={12} md={6}><Paper className="aboutVisual"><Typography variant="overline">CSE / DYPCET</Typography><Typography variant="h3" sx={{mt:1}}>Learn. Build. Research. Lead.</Typography><Typography color="text.secondary" sx={{mt:2}}>Inspired by the clean information architecture of leading CSE departments while retaining DYPCET's own identity.</Typography><Box sx={{mt:3}}><Rating value={5} readOnly/><Typography variant="caption" display="block">Material UI driven interface</Typography></Box></Paper></Grid></Grid></Container></Box><Academics/><FacultySection/><Research/><Labs/><Campus/><News/><Gallery/><Contact/></Box></Box>
    <Dialog open={video} onClose={()=>setVideo(false)} maxWidth="md" fullWidth><DialogTitle>Official DYPCET Campus Tour</DialogTitle><DialogContent><Box sx={{position:"relative",paddingTop:"56.25%"}}><iframe title="Campus tour" src={campusVideo} style={{position:"absolute",inset:0,width:"100%",height:"100%",border:0}} allowFullScreen/></Box></DialogContent><DialogActions><Button onClick={()=>setVideo(false)}>Close</Button></DialogActions></Dialog>
    <Tooltip title="Back to top"><Fab color="primary" className="backTop" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}><KeyboardArrowUp/></Fab></Tooltip>
    <SpeedDial ariaLabel="quick actions" className="speedDial" icon={<SpeedDialIcon />} onClose={()=>setSpeed(null)} onOpen={()=>setSpeed(true)} open={speed}><SpeedDialAction icon={<MailOutline/>} tooltipTitle="Contact" onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}/><SpeedDialAction icon={<PlayArrow/>} tooltipTitle="Campus video" onClick={()=>setVideo(true)}/><SpeedDialAction icon={<Download/>} tooltipTitle="Prospectus" onClick={()=>alert("Connect this action to the official prospectus PDF.")}/></SpeedDial>
  </Box>;
}
export default App;
