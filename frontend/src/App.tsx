import Header from "./Header";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router";
import About from "./About";
import Footer from "./Footer";
import SandwichGenerator from "./Sandwiches";



export default function App() {
  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box sx={{ flex: 1, p: 2 }}>
        <Routes>
          <Route path="/" element={<SandwichGenerator />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
      <Footer />
    </Box>

  );
}