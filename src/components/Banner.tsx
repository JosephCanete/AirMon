import "./Banner.scss";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__search">
        <Button variant="outlined">Search Dates</Button>
      </div>
      <div className="banner__info">
        <Typography variant="h5">
          Get out and stretch out your imagination
        </Typography>
        <Typography variant="subtitle1">
          Plan a different kind of getaway to uncover hidden gems near you.
        </Typography>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}
