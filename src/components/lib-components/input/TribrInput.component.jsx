import React from 'react';
import { FormHelperText, TextField } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../../styles/lib/inputs/tribrInput.styles";

const TribrInput = (
  {
    type,
    name,
    label,
    value,
    variant,
    required,
    fullWidth,
    handleBlur,
    errors = {},
    touched = {},
    handleChange,
    ...props
  }
) => {
  const classes = useStyles(props);

  return (
    <FormGroup className={ classes.wrapper }>
      <TextField
        name={ name }
        type={ type }
        label={ label }
        value={ value }
        variant={variant}
        required={required}
        fullWidth={fullWidth}
        onBlur={ handleBlur }
        onChange={ handleChange }
        className={classes.input}
        error={ errors[name] && touched[name] }
      />
      {
        errors[name] && touched[name] && (
          <FormHelperText className={classes.feedack}>
            <Typography variant={ "caption" }>{ errors[name] }</Typography>
          </FormHelperText>
        )
      }
    </FormGroup>
  );
};

export default TribrInput;
