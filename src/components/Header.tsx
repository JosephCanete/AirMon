import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="airmon-logo"
      />

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <Button variant="outlined">Become a Host</Button>
        <Button>
          <LanguageIcon />
        </Button>
        <Button>
          <ExpandMoreIcon />
        </Button>
        <Button>
          <Avatar />
        </Button>
      </div>
    </div>
  );
}
