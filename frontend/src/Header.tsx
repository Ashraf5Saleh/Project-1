import { AppBar, Toolbar, Typography, Button, } from "@mui/material";
import { Link } from "react-router-dom";



function Header() {
  return (
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          Sandwich Generator
        </Typography>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/">
        Home
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
