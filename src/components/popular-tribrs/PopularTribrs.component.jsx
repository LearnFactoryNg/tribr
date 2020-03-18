import React from 'react';
import { Grid, Typography, Avatar } from "@material-ui/core";
import { useStyles } from "../../styles/popularTribrs/popularTribrs.styles";
import ManImage from '../../assets/man-1.jpg';
import ManImage2 from '../../assets/man-2.jpg';
import WomanImage from '../../assets/woman-1.jpeg';
import { truncate } from "../../helpers/utils/utils.helper";

const PopularTribrs = () => {
  const classes = useStyles();

  return (
    <Grid container className={ classes.testimonials }>
      <header className={ classes.header }>
        <Typography variant={ "h6" }>Meet Popular Tribrs</Typography>
      </header>

      <section className={ classes.theySay }>
        <Grid className={ classes.testimony }>
          <aside>
            <Avatar alt={ "Jeremy" } src={ ManImage }/>
            <div className={ classes.personProfile }>
              <Typography variant={ "h6" }>Jeremy Valoy</Typography>
              <Typography variant={ "caption" }>
                <strong>Fast & Furious</strong>
              </Typography>
              <Typography variant={ "caption" }>
                @<a href={ "/" }>jeremy_valoy</a>
              </Typography>
            </div>
          </aside>
          <Typography>{ truncate("We love fast and furious, it's awesome, and we love Tribr because it's planet.", 70) }</Typography>
        </Grid>

        <Grid className={ classes.testimony }>
          <aside>
            <Avatar alt={ "Ruth" } src={ WomanImage }/>
            <div className={ classes.personProfile }>
              <Typography variant={ "h6" }>Serena Gomez</Typography>
              <Typography variant={ "caption" }>
                <strong>Lean In</strong>
              </Typography>
              <Typography variant={ "caption" }>
                @<a href={ "/" }>ladyForce</a>
              </Typography>
            </div>
          </aside>
          <Typography>{ truncate("Tap into the force and unleash the lady. Stay on Tribr", 70) }</Typography>
        </Grid>

        <Grid className={ classes.testimony }>
          <aside>
            <Avatar alt={ "Pascal" } src={ ManImage2 }/>
            <div className={ classes.personProfile }>
              <Typography variant={ "h6" }>Vachelosky Zehimz</Typography>
              <Typography variant={ "caption" }>
                <strong>Song Empire</strong>
              </Typography>
              <Typography variant={ "caption" }>
                @<a href={ "/" }>sing_on</a>
              </Typography>
            </div>
          </aside>
          <Typography>{ truncate("Take all your stress away with the right song... long live Tribr", 70) }</Typography>
        </Grid>
      </section>
    </Grid>
  )
};

export default PopularTribrs;
