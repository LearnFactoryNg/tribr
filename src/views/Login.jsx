import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useHistory, Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Typography from "@material-ui/core/Typography";
import { Formik } from "formik";
import * as yup from 'yup';
import FormGroup from "@material-ui/core/FormGroup";
import { useStyles } from "../styles/views/login.styles";
import TribrInput from "../components/lib-components/input/TribrInput.component";
import TribrButton from "../components/lib-components/buttons/TribrButton.component";
import { Paper } from "@material-ui/core";
import { LOGIN_USER } from '../helpers/queries/queries.helper.gql';
import { ToastMessage, type } from '../helpers/toaster/Toastr.helper';

const initialValues = {
  email: '',
  password: ''
};

const validateSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(4).required("Password is required")
});

const Login = () => {
  const classes = useStyles({});
  const history = useHistory();
  const [ onLoginUser ] = useMutation(LOGIN_USER);

  return (
    <>
      <Grid container className={ classes.root }>
        <Grid item className={ classes.main } component={ Paper } elevation={ 2 }>
          <header className={ classes.header }>
            <Typography variant={ "h6" }>Welcome Back, Tribr</Typography>
          </header>

          <Formik
            initialValues={ initialValues }
            validationSchema={ validateSchema }
            onSubmit={ async (values, { resetForm, setSubmitting }) => {
              try {
                const { data: { loginUser } } = await onLoginUser({
                  variables: { ...values }
                });

                sessionStorage.setItem('tribr_token', loginUser);
                resetForm();
                ToastMessage(type.SUCCESS, 'Login Successfully');
                history.push('/dashboard')
              } catch ( e ) {
                setSubmitting(false);
              }
            } }
          >
            { ({
                 errors,
                 handleSubmit,
                 handleBlur,
                 handleTouch,
                 handleChange,
                 isSubmitting,
                 values: { email, password }
               }) => (
              <form onSubmit={ handleSubmit }>
                <TribrInput
                  required
                  fullWidth
                  value={ email }
                  name={ "email" }
                  type={ "email" }
                  errors={ errors }
                  label={ "Email" }
                  touched={ handleTouch }
                  handleBlur={ handleBlur }
                  handleChange={ handleChange }
                />

                <TribrInput
                  required
                  fullWidth
                  errors={ errors }
                  value={ password }
                  type={ "password" }
                  name={ "password" }
                  label={ "Password" }
                  touched={ handleTouch }
                  handleBlur={ handleBlur }
                  handleChange={ handleChange }
                />

                <FormGroup className={ classes.button }>
                  <TribrButton
                    type={ "submit" }
                    text={ "Login" }
                    txtcolor={ "#E8E8E8" }
                    loading={ isSubmitting }
                  />
                </FormGroup>
              </form>
            ) }
          </Formik>

          <section className={ classes.signUp }>
            <Link to={ "/sign-up" }>Sign Up Here</Link>
          </section>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
