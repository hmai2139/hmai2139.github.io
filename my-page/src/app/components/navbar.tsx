"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const pages = [
  { name: "GitHub", url: "https://github.com/hmai2139" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/hoang-mai-634b0321a/" },
  { name: "Email", url: "mailto:hoangmai2139@gmail.com" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="inherit" sx={{ borderBottom: 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>

            <Typography
              className={inter.className}
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Inter",
                fontWeight: 200,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Hoang Mai
            </Typography>

            {/* Nav Bar in mobile mode */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <Typography
                variant="h5"
                className={inter.className}
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  fontFamily: "Inter",
                  fontWeight: 200,
                  color: "inherit",
                  textDecoration: "none",
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginRight: "auto",
                }}
              >
                Hoang Mai
              </Typography>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    component="a"
                    target="_blank"
                    href={page.url}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Nav Bar in mobile mode ends */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                  component="a"
                  target="_blank"
                  href={page.url}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
