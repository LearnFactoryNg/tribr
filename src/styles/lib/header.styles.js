import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '20%',

    '& a': {
      color: '#b1b1b1',
      textDecoration: 'none',
      padding: '0 1.2rem',

      '&:hover': {
        color: '#FEFEFE'
      }
    }
  }
}));
