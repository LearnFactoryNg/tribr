import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  select: {
    '& .MuiInputLabel-formControl': {
      fontSize: '0.85rem',
      paddingLeft: '0.5rem',
      color: props => props.inverted ? '#FEFEFE' : '#101F60',
    },

    '& .MuiSelect-select.MuiSelect-select': {
      color: props => props.inverted ? '#FEFEFE' : '#101F60',
      paddingLeft: '0.5rem',
      fontSize: '0.85rem',
    },

    '& .MuiInput-underline::before': {
      borderBottom: props => props.inverted ? '2px solid white' : '2px solid #101F60'
    },

    '& .MuiInput-underline::after': {
      borderBottom: props => props.inverted ? '2px solid #E7D335' : '2px solid #101F60'
    },

    '& .MuiInput-underline:hover:not(.Mui-disabled)::before': {
      borderBottom: props => props.inverted ? '2px solid white' : '2px solid #3249AA'
    },

    '& .MuiInput-underline.Mui-error::after': {
      borderBottom: '2px solid #f44336'
    },

    '& .MuiFormLabel-root.Mui-error': {
      color: '#f44336'
    }
  },
  feedback: {
    color: '#f44336',
    paddingBottom: theme.spacing(1.5),

    '& span': {
      fontSize: '0.85rem'
    }
  },
}));
