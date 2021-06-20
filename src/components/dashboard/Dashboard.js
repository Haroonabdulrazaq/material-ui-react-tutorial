import React, { useState  } from 'react';
import { CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge, Drawer, List, Container,
  Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import { mainListItems, secondaryListItems } from './listItems';
import clsx from 'clsx';


const drawerWidth = 240;

const useStyles = makeStyles((theme)=> ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24,  // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width','margin'],{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginright: 36,
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    height: '100vh',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
 
}));

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

 const handleClick = () => {
    setOpen((open)=> !open);
  }
  console.log("Menu Opened", open);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar  position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} >
        <Toolbar className={classes.toolbar}>
            <IconButton
            color="inherit"
            edge="start"
            onClick={handleClick}
            className={clsx(classes.menuButton)}
          >
          {!open && <MenuRoundedIcon /> }
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            noWrap
            color="inherit"
            className={classes.title}
          >Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary"></Badge>
            <NotificationsActiveRoundedIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleClick}>
          <CloseRoundedIcon />
          </IconButton>
        </div>
        <Divider/>
        <List>
         {mainListItems}
        </List>
        <Divider/>
        <List>{secondaryListItems}</List>
      </Drawer>
      <main>
        <Container>
          Hello I am the main content
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
