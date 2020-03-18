import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
  footer: {
    padding: '0.6em 0',
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#2d3047'
  },
  top: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'start',
    width: '100%',
    padding: '0 2rem 1em',

    '& h6': {
      fontWeight: 600,
      fontSize: '1.287em',
      textTransform: 'uppercase'
    },

    '@media (min-width: 338px) and (max-width: 797px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',

      '& .makeStyles-title-228': {
        width: '100%',
        height: 'auto',
        marginTop: '1em'
      },

      '& .makeStyles-connect-229': {
        width: '100%',
        height: 'auto',
        margin: '1em'
      },

      '& .makeStyles-subscribe-230': {
        width: '100%',
        height: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1em',
        padding: 0
      },

      '& .makeStyles-subscribe-230 section': {
        width: '100%',

        '& .MuiInputBase-input, .MuiInputLabel-animated': {
          fontSize: '0.876em'
        },

        '& button': {
          fontSize: '0.83em'
        }
      }
    },

    '@media (min-width: 525px) and (max-width: 656px)': {
      padding: '0 5rem'
    },

    '@media (min-width: 657px) and (max-width: 797px)': {
      padding: '0 8rem'
    }
  },
  title: {
    width: '30%',
    height: '8em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  connect: {
    width: '30%',
    textAlign: 'center',
    // height: '8em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    '& h6': {
      fontWeight: 600,
      fontSize: '0.987em',
      textTransform: 'uppercase'
    }
  },
  subscribe: {
    width: '40%',
    paddingLeft: '4em',

    '& h6': {
      fontWeight: 600,
      fontSize: '0.987em',
      textTransform: 'uppercase'
    },

    '& section': {
      width: '80%',
      marginBottom: '1em',

      '& .MuiFormGroup-root': {
        position: 'relative',

        '& .MuiInputBase-input, .MuiInputLabel-animated': {
          paddingLeft: '.45em'
        },

        '& button': {
          position: 'absolute',
          right: 0,
          bottom: 0,
          borderRadius: 0,
          backgroundColor: '#2d3047',
          color: '#e8e9eb',
          height: '2.3em'
        }
      }
    }
  },
  bottom: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2em',

    '@media (min-width: 338px) and (max-width: 797px)': {
      marginTop: 0
    }
  }
});
