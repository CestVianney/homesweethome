import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import "./HorizontalBar.css";

const HorizontalBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setCurrentDate(
        now.toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateTimeAndDate();
    const intervalId = setInterval(updateTimeAndDate, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <div
      className="drawer"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/groceries">
          <ListItemText primary="Courses" />
        </ListItem>
      </List>
      <Divider className="drawer-divider" />
      <List>
        <ListItem button component={Link} to="/page4">
          <ListItemText primary="Page 4" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="horizontal-bar">
      <IconButton onClick={toggleDrawer(true)} aria-label="menu">
        <MenuIcon style={{ color: "#ffcd58" }} />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <div className="time-and-date">
        <div className="date-display">
          <span className="special-text">{currentDate}</span>
        </div>
        <div className="time-display">
          <span className="secondary-text">{currentTime}</span>
        </div>
      </div>
      <Link to="/">
        <Fab color="white" aria-label="home">
          <HomeIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default HorizontalBar;
