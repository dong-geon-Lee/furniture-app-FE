import { useState } from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import * as S from "./styles";

const Navigation = () => {
  const [value, setValue] = useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <S.Container>
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
          sx={{
            ".css-i4bv87-MuiSvgIcon-root": {
              width: "2.2rem",
              height: "2.6rem",
            },
            ".css-imwso6-MuiBottomNavigationAction-label.Mui-selected": {
              fontSize: "1.2rem",
            },
          }}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
          sx={{
            ".css-i4bv87-MuiSvgIcon-root": {
              width: "2.2rem",
              height: "2.6rem",
            },
            ".css-imwso6-MuiBottomNavigationAction-label.Mui-selected": {
              fontSize: "1.2rem",
            },
          }}
        />
        <BottomNavigationAction
          label="Notification"
          value="notification"
          icon={<NotificationsIcon />}
          sx={{
            ".css-i4bv87-MuiSvgIcon-root": {
              width: "2.2rem",
              height: "2.6rem",
            },
            ".css-imwso6-MuiBottomNavigationAction-label.Mui-selected": {
              fontSize: "1.2rem",
            },
          }}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<AccountCircleIcon />}
          sx={{
            ".css-i4bv87-MuiSvgIcon-root": {
              width: "2.2rem",
              height: "2.6rem",
            },
            ".css-imwso6-MuiBottomNavigationAction-label.Mui-selected": {
              fontSize: "1.2rem",
            },
          }}
        />
      </BottomNavigation>
    </S.Container>
  );
};

export default Navigation;
