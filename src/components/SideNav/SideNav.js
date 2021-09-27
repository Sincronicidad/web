import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link as LinkS } from "react-scroll";
import logo from "../../assets/appAssets/Assets/Artboard 1 copy.png";
import iconSideNav from "../../assets/appAssets/Assets/Nuevo caso.png";
import iconSideNav2 from "../../assets/appAssets/Assets/Vista General.png";
import iconSideNav3 from "../../assets/appAssets/Assets/Busqueda.png";
import "./SideNav.css";
import J from "../../assets/appAssets/Assets/J.png";
import "react-dropzone-uploader/dist/styles.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useNavigate } from "react-router-dom";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
    width: "30%",
  },

  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#fff",
  },

  hide: {
    display: "none",
  },

  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

const SideNav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [index, setIndex] = React.useState(1);
  const matches = useMediaQuery("(max-width:720px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  let navigate = useNavigate();

  // below 2 func for drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listItemClick = (prop) => {
    console.log("list item click");
    if (prop == 10) {
      navigate("/caseRegister");
    } else if (prop == 1) {
      // setLinkToggle(true);
      navigate("/caseRegister");
    } else if (prop == 2) {
      // setLinkToggle(true);
      navigate("/table");
    }
    setIndex(prop);
    if (matches) setOpen(false);
  };
  const handleProfile = (event) => {
    setAnchorEl(event.currentTarget);
    navigate("/profile");
    console.log("yes profile");
  };

  const closeProfile = () => {
    setAnchorEl(null);
  };

  const list = () => (
    <div>
      <LinkS className="link">
        <img
          onClick={() => listItemClick(10)}
          className="HomeCase_logo"
          src={logo}
          alt=""
        />
      </LinkS>

      <List className="Homelist">
        <ListItem
          className={`HomeCaseLink ${
            (index == 1 || index == 10) && "selected"
          }`}
        >
          <LinkS className="homeListItem" onClick={() => listItemClick(1)}>
            <img className="iconSideNav" src={iconSideNav} alt="" />
            <div>NUEVO CASO</div>
          </LinkS>
        </ListItem>
        <ListItem className={`HomeCaseLink ${index == 2 && "selected"}`}>
          <LinkS className="homeListItem" onClick={() => listItemClick(2)}>
            <img className="iconSideNav" src={iconSideNav2} alt="" />
            <div>VISTA GENERAL</div>
          </LinkS>
        </ListItem>
        <ListItem className={`HomeCaseLink ${index == 3 && "selected"}`}>
          <LinkS className="homeListItem" onClick={() => listItemClick(3)}>
            <img className="iconSideNav" src={iconSideNav3} alt="" />
            <div>NUEVO CASO</div>
          </LinkS>
        </ListItem>
        <div className="logoBottom" onClick={() => setAnchorEl(true)}>
          <img src={J} alt="" />
        </div>

        <Menu
          className="menuProfile"
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={closeProfile}
        >
          <div className="menu__header">
            <img src={J} alt="" />
            <div className="header__info">
              <p>Juan</p>
              <span>Juan Hernández García</span>
            </div>
          </div>
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
          <MenuItem onClick={handleProfile}>Signout</MenuItem>
        </Menu>
      </List>
    </div>
  );

  return (
    <div>
      {matches && (
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={open && classes.hide}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      )}

      {/* SideNav */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {matches && (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          )}
        </div>

        {list()}
      </Drawer>
    </div>
  );
};

export default SideNav;
