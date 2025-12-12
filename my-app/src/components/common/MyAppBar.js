import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link"
import DarkModeIcon from '@mui/icons-material/DarkMode';


import { useState } from "react";
import {theme, darkTheme} from "@src/styles/mui/theme";
import { CssBaseline,ThemeProvider } from "@mui/material";

export default function MyAppBar() {
  const [currentTheme,setCurrentTheme]=useState("dark");
  return (
    <ThemeProvider theme={currentTheme === "dark"?darkTheme :theme}>
      <AppBar CssBaseline/>
    
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr:2}}
          onClick={()=>
            setCurrentTheme(currentTheme === "dark" ? "light": "dark")
          }
          >
            <DarkModeIcon/>
        </IconButton>
        <Link href="/" passHref>
        <Button color="inherit">Login</Button>
        </Link>

        <Link href="/blog" passHref>
        <Button color="inherit">Blog</Button>
        </Link>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}


