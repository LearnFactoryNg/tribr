import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    width: '35%',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',

    '& form': {
      width: '90%'
    },

    '@media (min-width: 338px) and (max-width: 469px)': {
      width: '90%',
      padding: '1rem',

      '&.MuiPaper-elevation2': {
        boxShadow: 'none'
      },

      '&.MuiPaper-root': {
        backgroundColor: 'inherit'
      }
    },

    '@media (min-width: 470px) and (max-width: 600px)': {
      width: '80%'
    },

    '@media (min-width: 601px) and (max-width: 764px)': {
      width: '65%'
    },

    '@media (min-width: 764px) and (max-width: 1000px)': {
      width: '45%'
    }
  },
  header: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: '2rem'
  },
  headerReg: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: '0.5rem'
  },
  button: {
    width: '50%',
    paddingTop: '1.5rem',
    margin: '2rem auto'
  },
  signUp: {
    position: 'absolute',
    bottom: 6,

    '& a': {
      color: '#2D304775',
      fontWeight: 100
    }
  }
});
