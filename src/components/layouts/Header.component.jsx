import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../styles/lib/header.styles";
import { headerNav } from "../../helpers/utils/headerNav.helper";
import { MenuList } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={ classes.title }>
            <Link to={"/"}>
              Tribr
            </Link>
          </Typography>

          <section className={classes.links}>
            {
              headerNav.map(({ to, name }, idx) => (
                <NavLink to={ to } key={ idx } exact>
                  <MenuList>{ name }</MenuList>
                </NavLink>
              ))
            }
          </section>
          <Button color="inherit" href={"/login"}>Get Started</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
