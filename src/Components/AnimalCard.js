import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) =>
  createStyles({
    master: {
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "row",
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(190),
        height: theme.spacing(100),
      },
    },
    image: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
        width: theme.spacing(120),
        height: theme.spacing(100),
      },
    },
    information: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        margin: theme.spacing(0),
        width: theme.spacing(70),
        height: theme.spacing(10),
      },
    },
  })
);

function AnimalCard({ pet }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.master}>
        <Paper elevation={30} className={classes.image}>
          <CardMedia
            className={classes.image}
            component="img"
            alt="Contemplative Reptile"
            image={pet.image}
          />
        </Paper>
        <Box component="span" m={1}></Box>
        <Paper elevation={-5} className={classes.information}>
          <h1>{pet.name}</h1>
          <h2>{pet.breed}</h2>
        </Paper>
      </div>
    </>
  );
}

export default AnimalCard;
