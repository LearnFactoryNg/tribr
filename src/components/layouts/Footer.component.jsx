import React from 'react';
import {Grid, Typography, IconButton, FormGroup, TextField, Button} from '@material-ui/core';
import {TiSocialFacebook as FacebookIcon, TiSocialTwitter as TwitterIcon, TiSocialLinkedin as LinkedInIcon} from 'react-icons/ti';
import {Link} from "react-router-dom";
import {useStyles} from "../../styles/lib/footer/footer.styles";
import moment from "moment";

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.footer}>
      <div className={classes.top}>
        <section className={classes.title}>
          <Typography variant={"h6"}>
            tribr.com
          </Typography>
        </section>

        <section className={classes.connect}>
          <Typography variant={"h6"}>Tribrs love to connect</Typography>

          <section className={classes.socialLinks}>
            <Link to={"https://www.facebook.com/tribr"}>
              <IconButton>
                <FacebookIcon/>
              </IconButton>
            </Link>
            <Link to={"https://www.twitter.com/@tribr"}>
              <IconButton>
                <TwitterIcon/>
              </IconButton>
            </Link>
            <Link to={"https://www.linkedin.com/in/tribr"}>
              <IconButton>
                <LinkedInIcon/>
              </IconButton>
            </Link>
          </section>
        </section>

        <section className={classes.subscribe}>
          <Typography variant={"h6"}>Tribrs Subscribe</Typography>

          <section>
            <FormGroup>
              <TextField name="email" label="Email" type="email" />
              <Button>Sign me up</Button>
            </FormGroup>
          </section>

          <Typography variant={"caption"}>Get all the good good stuff.</Typography>
        </section>
      </div>

      <div className={classes.bottom}>
        <Typography variant={"caption"}>copyright&copy; tribr {`${moment().format('YYYY')}`}</Typography>
      </div>
    </Grid>
  )
};

export default Footer;
