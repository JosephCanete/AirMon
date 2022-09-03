import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { placeScema } from "../feature/place";

interface Props {
  title?: string;
}

const Cards: React.FC<Props> = ({ title }) => {
  const place = useSelector((state: placeScema) => state.place.value);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {place.map((item) => (
          <Grid item xs={2.4}>
            <Paper variant="outlined" elevation={3}>
              {item.title}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
