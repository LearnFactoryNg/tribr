import React from 'react';
import Grid from "@material-ui/core/Grid";
import Header from "./Header.component";
import Footer from "./Footer.component";

const GeneralLayout = ({ children }) => (
  <Grid>
    <Header />

    <main style={ { marginTop: '4rem' } }>
      { children }
    </main>

    <Footer />
  </Grid>
);

export default GeneralLayout;
