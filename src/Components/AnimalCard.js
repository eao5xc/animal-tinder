import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(190),
        height: theme.spacing(100),
      },
    },
  })
);

function AnimalCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5}>This is a paper</Paper>
    </div>
  );
}

export default AnimalCard;
