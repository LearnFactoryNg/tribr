import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: '1rem auto 1.5rem'
  },
  input: {
    // Form Inputs
    '& .MuiInputBase-input': {
      color: props => props.color ? props.color : '#5b5b71',
      paddingLeft: '0.5rem'
    },

    '& .MuiInput-underline::before': {
      borderBottom: props => props.color ? `1px solid ${props.color}` : '1px solid #b9bcd2'
    },

    '& .MuiInput-underline::after': {
      borderBottom: props => props.color ? `1px solid ${props.color}` : '1px solid #b9bcd2'
    },

    '& .MuiInput-underline:hover:not(.Mui-disabled)::before': {
      borderBottom: props => props.color ? `1px solid ${props.color}` : '1px solid #5f6173'
    },

    // Form Label
    '& .MuiFormLabel-root': {
      color: props => props.color ? props.color : '#5b5b71',
      paddingLeft: '0.5rem',
      fontSize: '0.85rem'
    },

    '& .MuiFormLabel-root.Mui-error': {
      color: '#f44336',
    },

    '& .MuiInput-underline.Mui-error::after': {
      borderBottom: '1px solid #f44336',
    },

    //  Outlined style
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #FEFEFE',
      borderRadius: '0.35rem'
    },

    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #FEFEFE'
    },

    '& .MuiOutlinedInput-input': {
      padding: '9px 14px'
    },

    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 11px) scale(1)'
    },

    '& .Mui-focused .MuiInputLabel-outlined': {
      transform: 'translate(2px, -8px) scale(1)'
    }
  },
  feedback: {
    paddingBottom: theme.spacing(1.5),

    '& span': {
      color: '#f44336 !important',
      fontSize: '0.85rem'
    }
  },
}));
