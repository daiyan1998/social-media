import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";

import Navbar from "./components/Navbar";
import { ThemeContext } from "./theme/ThemeContext";

function App() {
  return (
    <>
      <ThemeContext>
        <Box bgcolor="background.default" color="text.primary">
          <Navbar></Navbar>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar></Sidebar>
            <Feed></Feed>
            <Rightbar></Rightbar>
          </Stack>
        </Box>
      </ThemeContext>
    </>
  );
}

export default App;
