import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Navbar></Navbar>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar></Sidebar>
            <Feed></Feed>
            <Rightbar></Rightbar>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
