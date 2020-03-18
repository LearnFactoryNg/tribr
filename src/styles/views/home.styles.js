import { makeStyles } from "@material-ui/core/styles";
import IntroBng from '../../assets/bng-3.jpg';
import ParallaxBng from '../../assets/bng-1.jpg';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  intro: {
    backgroundImage: `url(${IntroBng})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '3rem',
    marginTop: '4rem',
    height: '28rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(27, 13, 66, 0.84)'
  },
  intro__content: {
    zIndex: 100,
    color: '#BDACEC',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& h3': {
      fontWeight: 800,
      paddingBottom: '0.89rem',
      color: '#FFF'
    },

    '& a': {
      marginTop: '3.2rem',
      background: 'transparent',
      border: '2px solid #a994e6',
      color: '#FFF',
      padding: '0.5rem 3rem',

      '&:hover': {
        background: '#53417d'
      }
    }
  },
  steps: {
    padding: '5rem 3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& .MuiGrid-item': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1.2rem',
      textAlign: 'center',

      '&:nth-child(1)': {
        color: '#1c861c',
        '& span': {
          color: '#0f4d0f'
        },
      },
      '&:nth-child(2)': {
        color: '#1b8f95',
        '& span': {
          color: '#146266'
        },
      },
      '&:nth-child(3)': {
        color: '#8130b3',
        '& span': {
          color: '#361748'
        },
      },

      '& span': {
        width: '60%',
        margin: '0 auto',
        paddingTop: '0.8rem'
      },

      '& h6': {
        fontWeight: 600
      }
    },

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',

      '& .MuiGrid-item': {
        marginBottom: '3rem'
      }
    }
  },
  iconHolder: {
    fontSize: '2.8rem',
  },
  parallax: {
    height: '100vh',
    backgroundImage: `url(${ParallaxBng})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  parallax__overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(32, 31, 34, 0.67)'
  },
  parallax__content: {
    zIndex: 100,
    color: '#ddd3ec',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& h3': {
      paddingBottom: '0.5rem'
    }
  }
}));
