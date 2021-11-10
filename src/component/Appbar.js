import { AppBar, Toolbar, Typography, Stack, Menu, MenuItem, Link, Button } from "@mui/material";
import React from 'react';

export default function MyAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      color=""
      elevation={1}
      style={{ padding: "4px" }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }} >
        <Link underline="none" sx={{ flexGrow: 1 }} href="/">
          <Stack direction="row" alignItems="center">
            <img src="/logo.jpg" alt="logo" width={60}></img>
            <Typography variant="h6" color="black" fontWeight="bold">
              Leptospirosis
            </Typography>
          </Stack>
        </Link>
        <nav style={{ marginTop: 4, marginBottom: 4 }}>
          <Button
            variant='outlined'
            color="error"
            style={{ fontWeight: "bold", marginTop: 4, marginBottom: 4 }}
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            What is Leptospirosis
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem style={{ fontWeight: "bold" }} onClick={handleClose}>
              <Link href="/info" underline="none" color="text.primary" fontWeight="bold">
                About Leptospirosis
              </Link>
            </MenuItem>
            <MenuItem style={{ fontWeight: "bold" }} onClick={handleClose}>
              <Link href="/symptoms" underline="none" color="text.primary" fontWeight="bold">
                Symptoms
              </Link>
            </MenuItem>
            <MenuItem style={{ fontWeight: "bold" }} onClick={handleClose}>
              <Link href="/prevention" underline="none" color="text.primary" fontWeight="bold">
                Prevention
              </Link>
            </MenuItem>
            <MenuItem style={{ fontWeight: "bold" }} onClick={handleClose}>
              <Link href="/treatment" underline="none" color="text.primary" fontWeight="bold">
                Treatment
              </Link>
            </MenuItem>
          </Menu>
          <Link
            variant="button"
            color="text.primary"
            href="malaysia"
            fontWeight="bold"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Malaysia
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="taiwan"
            fontWeight="bold"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            Taiwan
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="aboutus"
            fontWeight="bold"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
          >
            About us
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  )
}