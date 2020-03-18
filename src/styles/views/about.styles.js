import { makeStyles } from "@material-ui/core";
import MissionBng from '../../assets/mission.jpg';
import VisionBng from '../../assets/vision.jpg';
import CoreValuesBng from '../../assets/core-values.jpg';
import TeamBng from '../../assets/team.jpg';

export const useStyles = makeStyles(theme => ({
  bng1: {
    backgroundImage: `url(${ MissionBng })`,
  },
  bng2: {
    backgroundImage: `url(${ VisionBng })`,
  },
  bng3: {
    backgroundImage: `url(${ CoreValuesBng })`,
  },
  bng4: {
    backgroundImage: `url(${ TeamBng })`,
  },
  jumbotron: {
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '15rem',

    '& h2': {
      zIndex: 10,
      fontWeight: 600,
      color: '#EEEEEE',

      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
        textAlign: 'center'
      }
    }
  },
  overlay: {
    backgroundColor: 'rgba(57, 53, 53, 0.84)',
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  info: {
    padding: '5rem 6rem',

    [theme.breakpoints.down('sm')]: {
      padding: '2.5rem'
    }
  },
  mission: {
    fontSize: '2.5rem',
    textAlign: 'center',
    color: theme.palette.text.main,

    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    }
  },
  info__values: {
    padding: '5rem 6rem',

    '& aside': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      padding: '2rem 1rem',

      '& h6': {
        color: theme.palette.text.dark,
        textTransform: 'uppercase',
        fontSize: '1.85rem',
        fontWeight: 600
      },

      '& .MuiTypography-body1': {
        fontSize: '1.58rem'
      },

      [theme.breakpoints.down('sm')]: {
        '& h6': {
          fontSize: '1.2rem',
          fontWeight: 600
        },

        '& .MuiTypography-body1': {
          fontSize: '0.876rem'
        },
      }
    },

    [theme.breakpoints.down('sm')]: {
      padding: '2.5rem'
    }
  },
  card__root: {
    width: '270px',

    // [theme.breakpoints.down('sm')]: {
    //   padding: '0 1.3rem'
    // }
  },
  info__team: {
    padding: '4rem 6rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',

      '& .makeStyles-card__root-10': {
        marginBottom: '4rem'
      }
    },
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      padding: '4rem 2rem',

      '& .makeStyles-card__root-10': {
        marginBottom: '4rem',
      }
    }
  },
  actions: {
    padding: '0.675em 1.2em',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  socials: {
    '& .MuiIconButton-root': {
      padding: 4,
      fontSize: '1.123em'
    }
  },
  media: {
    height: 280,
  },
}));
