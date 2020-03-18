import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../styles/views/home.styles";
import Typography from "@material-ui/core/Typography";
import TribrButton from "../components/lib-components/buttons/TribrButton.component";
import GeneralLayout from "../components/layouts/GeneralLayout.component";
import {IoIosBulb as CreateIcon, IoIosEasel as EngageIcon, IoIosBoat as ExpandIcon} from 'react-icons/io';
import PopularTribrs from "../components/popular-tribrs/PopularTribrs.component";

const Home = () => {
  const classes = useStyles();

  return (
    <GeneralLayout>
      <section className={classes.intro}>
        <div className={classes.overlay} />

        <div className={classes.intro__content}>
          <Typography variant={"h3"}>Lead your Space</Typography>
          <Typography>Give Life to your movement, extend your reach, grow your audience</Typography>
          <TribrButton
            text={"I want In"}
            href={"/login"}
          />
        </div>
      </section>

      <section className={classes.steps}>
        <Grid item>
          <div className={classes.iconHolder}>
            <CreateIcon />
          </div>
          <Typography variant={"h6"}>Create</Typography>
          <Typography variant={"caption"}>
            Create a tribe with one click, your tribe is tailored according to the needs you want to solve.
          </Typography>
        </Grid>
        <Grid item>
          <div className={classes.iconHolder}>
            <EngageIcon />
          </div>
          <Typography variant={"h6"}>Engage</Typography>
          <Typography variant={"caption"}>
            Engage your tribers with powerful content. We help you create amazing content to keep everyone in your tribe active.
          </Typography>
        </Grid>
        <Grid item>
          <div className={classes.iconHolder}>
            <ExpandIcon />
          </div>
          <Typography variant={"h6"}>Expand</Typography>
          <Typography variant={"caption"}>
            Quickly grow your tribe with  numerous powerful tools at your rich. We can't wait to see your tribe take off to the moon.
          </Typography>
        </Grid>
      </section>

      <section className={classes.parallax}>
        <div className={classes.parallax__overlay} />

        <div className={classes.parallax__content}>
          <Typography variant={"h3"}>The Power Of Community</Typography>
          <Typography variant={"caption"}>Empower your future</Typography>
        </div>
      </section>

      <PopularTribrs />

    </GeneralLayout>
  );
};

export default Home;
