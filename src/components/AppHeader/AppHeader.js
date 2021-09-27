import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import "./App.css";
import MenuIcon from "@material-ui/icons/Menu";
import LogoHeader from "../../assets/logo header.png";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const AppHeader = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  const login = () => {
    console.log("login logic will go here");
    if (state) setState(!state);
  };

  const register = () => {
    console.log("register logic will go here");

    if (state) setState(!state);
  };


  const listItemClick = () => {
    console.log("list item click")
    setState(!state)
  }





  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <LinkS onClick={listItemClick} to="/" className="link">
       <img className="logo" src={LogoHeader} alt="" />
      </LinkS>
      
      <Divider />
      <List className="listItems">
        <ListItem  className="sideNav_link">
          <LinkS onClick={listItemClick} to="/" className="link">
            Acerca de nosotros
          </LinkS>
        </ListItem>
        <Divider />
        <ListItem  className="sideNav_link">
          <LinkS onClick={listItemClick} to="functionalities" className="link">
            Funcionalidades
          </LinkS>
        </ListItem>
        <Divider />
        <ListItem  className="sideNav_link">
          <LinkS onClick={listItemClick} to="organization" className="link">
            Organizaciones
          </LinkS>
        </ListItem>
        <Divider />
        <ListItem className="sideNav_link">
          <LinkR className="btnLink" to="/login">
          <Button className="btnSideL" onClick={login}>
            Inicia Sesión
          </Button>
          </LinkR>
          
        </ListItem>
        <Divider />
        <ListItem className="sideNav_link">
          <LinkR to="/register">
          <Button className="btnSide" type="primary" onClick={register}>
            Registrate
          </Button>
          </LinkR>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <header className="appHeader">
       <LinkS to="/" >
       <img className="logo" src={LogoHeader} alt="" />
       </LinkS>
      
      <Button className="drawerMenu" onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <div className="appHeader__nav">
        <LinkS to="/" className="link">
          Acerca de nosotros
        </LinkS>
        <LinkS to="functionalities" className="link">
          Funcionalidades
        </LinkS>

        <LinkS to="organization" className="link">
          Organizaciones
        </LinkS>
      </div>
      <div className="appHeader__right">
        <LinkR className="linkR" to="login">
        <Button className="linkRight" onClick={login}>
          Inicia Sesión
        </Button>
        </LinkR>
        <LinkR className="linkR" to="/register">
        <Button className="btn" type="primary" onClick={register}>
          Registrate
        </Button>
        </LinkR>
      </div>

      <SwipeableDrawer
        anchor="left"
        open={state}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </header>
  );
};

export default AppHeader;
