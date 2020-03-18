import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  testimonials: {
    padding: '3rem',
    display: 'flex',
    background: 'rgba(26,249,141,0.07)',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',

    '@media (max-width: 590px) and (min-width: 338px)': {
      padding: '1rem',
    }
  },
  header: {
    margin: '1rem 0 2.567rem',

    '& h6': {
      color: '#8c8c8c',
      fontWeight: 500,
      fontSize: '1.5rem',
      textTransform: 'capitalize',

      '@media (max-width: 590px) and (min-width: 338px)': {
        fontSize: '1.23rem',
      }
    }
  },
  theySay: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      width: '100%'
    }
  },
  testimony: {
    width: '20rem',
    margin: '0 1rem 1.5rem',
    color: '#616262',

    [theme.breakpoints.down('md')]: {
      marginTop: '3.8rem',
    },

    '& aside': {
      display: 'flex',
      alignItems: 'center',

      '& .MuiAvatar-root': {
        height: 60,
        width: 60
      },

      '@media (max-width: 590px) and (min-width: 338px)': {
        justifyContent: 'center'
      }
    },

    '& p': {
      paddingTop: '1.5rem'
    },

    '@media (max-width: 590px) and (min-width: 338px)': {
      marginBottom: '3rem'
    }
  },
  personProfile: {
    paddingLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',

    '& .MuiTypography-caption': {
      marginTop: '-0.2rem'
    },

    '& a': {
      color: 'inherit'
    }
  }
}));
