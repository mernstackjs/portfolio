import {
  ListItemText,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  TextField,
  InputAdornment,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RedeemIcon from "@mui/icons-material/Redeem";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WebIcon from "@mui/icons-material/Web";
const useStyles = makeStyles((theme) => {
  return {
    header: {
      backgroundColor: "gray",
      display: "flex",
      alignItems: "center",
      position: "sticky",
      top: "0",
      zIndex: "66",
      justifyContent: "space-between",
      color: "white",
      height: 48,
      padding: "4px 30px",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        padding: "0",
      },
    },
    linkItem: {
      color: "white",
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    drw: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },

    mobileMenu: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});
function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const navItem = [
    { path: "/", item: "Home", icone: <DashboardIcon /> },
    { path: "/Portfolio", item: "Portfolio", icone: <WebIcon /> },
    { path: "/Work", item: "Work", icone: <WorkIcon /> },
    { path: "/About", item: "About", icone: <RedeemIcon /> },
    { path: "/fitness", item: "Fitness", icone: <FitnessCenterIcon /> },
    { path: "/Contect", item: "Contect", icone: <SupportAgentIcon /> },
  ];
  return (
    <header className={classes.header}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <ListItemText>
            <Typography sx={{ fontSize: "30px" }}>BrandName</Typography>
          </ListItemText>
        </div>
        <MenuList sx={{ display: "flex" }}>
          {navItem.map((items, index) => (
            <Link className={classes.linkItem} key={index} to={items.path}>
              <MenuItem sx={{ fontSize: "22px" }}>{items.item}</MenuItem>
            </Link>
          ))}
        </MenuList>
        <div className={classes.mobileMenu}>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? (
              <CloseIcon sx={{ color: "white", fontSize: "50px" }} />
            ) : (
              <MenuIcon sx={{ color: "white", fontSize: "50px" }} />
            )}
          </IconButton>
          <Drawer
            className={classes.drw}
            open={open}
            onClose={() => setOpen(false)}
          >
            <Box sx={{ padding: "20px", borderRadius: "none" }}>
              <TextField
                placeholder="serach here"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <List>
                {navItem.map((items) => (
                  <Link style={{ textDecoration: "none" }} to={items.path}>
                    <ListItemButton>
                      <ListItemIcon>{items.icone}</ListItemIcon>
                      <MenuItem
                        sx={{
                          color: "black",
                          fontSize: "24px",
                          textDecoration: "none",
                        }}
                      >
                        {items.item}
                      </MenuItem>
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Box>
          </Drawer>
        </div>
      </Toolbar>
    </header>
  );
}

export default Navbar;
