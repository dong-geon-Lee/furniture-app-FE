import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import * as S from "./styles";

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [value, setValue] = useState(path);

  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <S.Container
      style={{ position: "fixed", bottom: "16.4%", width: "37.3rem" }}
    >
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
          value="orders"
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
