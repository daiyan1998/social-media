import { AcUnit, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: " 0 10px",
  borderRadius: "5px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Adragold
        </Typography>
        <AcUnit sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="" />
          </Badge>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpEk_t6sN7FFh_gE8eq0kVzTmsaGng5mMYA&usqp=CAU" />
        </Icons>
        <UserBox>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpEk_t6sN7FFh_gE8eq0kVzTmsaGng5mMYA&usqp=CAU" />
          <Typography variant="span">Rahat</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
