import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const MenuList = (props) => {
  const classes = useStyles();

  const generateNavBlock = (navBlock) => {
    return (
      navBlock.map((item, i=0) => {
        return (
          <ListItem button key={item.text} component={Link} to={{
            pathname: item.href,
            state: {
              countryId: item.countryId
            }
          }}>
            <ListItemIcon> {item.icon} </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        );})
    );
  }

  return(
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggle(false)}
      onKeyDown={props.toggle(false)}
    >
      {
        //iterazione array per la creazione della lista nav
        props.navPages.map((navBlock, index) => {
          return (
            <div>
              <List>
                {generateNavBlock(navBlock)}
              </List>
              {index === props.navPages.length-1 ? null : <Divider></Divider>}
              
            </div>
          )
        })
      }

    </div>
  )
 
}

function Menu(props) {
    const classes = useStyles();

    const [menu, setMenu] = React.useState({
        isOpen: false,
    });

    const toggleDrawer = (openState) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setMenu( {isOpen: openState} );
    }

    return(
      <div>
        <React.Fragment>
          <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
              anchor="left"
              open={menu.isOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
          >
            <MenuList toggle={toggleDrawer} navPages={props.navPages}></MenuList>
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    );
}

export default Menu;
