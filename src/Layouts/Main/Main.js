import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

import Flag from "react-flagkit";

import Menu from './Components/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  flag: {
    borderRadius: 100
  }
}));


const navPages = [
  [
    {
      name: "Home",
      href: '/home',
      icon: <HomeIcon />
    },
  ],
  [
    {
      name: "IT Map",
      href: '/map',
      icon: <Flag country="IT" style={{borderRadius: 0}} />
    },  
    {
      name: "DE Map",
      href: '/map',
      icon: <Flag country="DE" />
    },  
    {
      name: "CZ Map", 
      href: '/map',
      icon: <Flag country="CZ" />
    },  
  ],
  [
    {
      name: "Authors",
      href: '/authors',
      icon: <AccessibilityNewIcon />
    }
  ]
];


const Main = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">

        <Toolbar>
          <Menu navPages={navPages} />
          <Typography variant="h6" className={classes.title}>
            Erasmus
          </Typography>
        </Toolbar>

      </AppBar>

      {props.children}    
    </div>
  );
}

export default Main;
