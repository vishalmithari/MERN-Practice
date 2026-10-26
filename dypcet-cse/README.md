
# DYPCET CSE Department Website

A professional, dynamic React + Material UI department website for the Computer Science & Engineering department of D. Y. Patil College of Engineering & Technology (DYPCET), Kolhapur.

## Run

```bash
npm install
npm start
```

Then open http://localhost:3000

## Build

```bash
npm run build
```

## Main features
- Responsive Material UI navigation + mobile Drawer
- Animated hero section and glassmorphism styling
- Dynamic faculty search, designation filtering, pagination and profile Dialog
- Academics tabs
- Research areas
- Laboratories
- Campus video Dialog with official DYPCET YouTube videos
- News/events cards, Menu, Popover and Snackbar interactions
- Gallery
- Contact form interaction
- Back-to-top FAB
- SpeedDial quick actions
- Strong CSS animations and responsive layout
- Uses the MUI components demonstrated in the supplied PDF, including Button, TextField, Checkbox, AppBar, Card, Grid, Dialog, Snackbar, icon, List, Table, Slider, Switch, Avatar, Badge, CircularProgress, Drawer, Tabs, Tooltip, Accordion, Alert, Autocomplete, Breadcrumbs, ButtonGroup, Chip, Divider, Fab, LinearProgress, Menu, Pagination, Popover, Rating, Skeleton and SpeedDial.

## Faculty data
`src/facultyData.js` contains the seeded public faculty records used by the UI. The data intentionally does not invent missing qualifications or emails. Add verified department records to this file as needed.

## Media
The campus video buttons embed official DYPCET YouTube campus-tour videos. Replace/extend the image URLs with licensed DYPCET photographs when deploying publicly.

## Reference basis
- DYPCET official website: https://coek.dypgroup.edu.in/
- DYPCET IRINS faculty/research directory: https://dypcet.irins.org/
- IIT Hyderabad CSE: https://cse.iith.ac.in/
- Supplied React MUI PDF: Presentation of MU.pdf

This is a front-end department website. A production deployment can connect faculty/news/events to a backend or CMS.
