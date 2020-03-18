import React from 'react';
import GeneralLayout from "../components/layouts/GeneralLayout.component";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import { useStyles } from "../styles/views/about.styles";

const About = () => {
  const classes = useStyles();

  return (
    <GeneralLayout>
      <section className={clsx(classes.jumbotron, classes.bng3)}>
        <div className={classes.overlay} />
        <Typography variant={"h2"}>Contact Tribr</Typography>
      </section>

      <section className={classes.info}>
        <Typography variant={"body1"} className={classes.mission}>
          Hey! wanna reach us? Hit us up on twitter... see the footer
        </Typography>
      </section>
    </GeneralLayout>
  );
};

export default About;

