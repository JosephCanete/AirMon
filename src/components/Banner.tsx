import "./Banner.scss";
import Button from "@mui/material/Button";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__search">
        <Button>Search Dates</Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch out your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}
