import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        Sandwich Generator.
      </Typography>
    </Box>
  );
}

export default Footer;
