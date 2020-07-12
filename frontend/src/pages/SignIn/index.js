import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { TextField, Checkbox } from 'unform-material-ui';
import * as Yup from 'yup';

import makeStyles from '~/styles/makeStyles';
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/splash.png';

const useStyles = makeStyles;

export default function SignIn() {
  const classes = useStyles();
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido.')
      .required('O e-mail é obrigatório.'),
    password: Yup.string().required('A senha é obrigatória.'),
  });

  async function handleSubmit(data) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      const { password, email } = data;

      dispatch(signInRequest(email, password));

      formRef.current.setErrors({});

      formRef.current.setFieldValue('email', '');
      formRef.current.setFieldValue('password', '');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};
        error.inner.forEach((e) => {
          errorMessages[e.path] = e.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <>
      <div className="img">
        <img className="imgLogin" src={logo} alt="logo" />
      </div>
      <div className="signup">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <TextField
            InputProps={{ className: classes.textField }}
            InputLabelProps={{ className: classes.input }}
            variant="outlined"
            label="E-mail"
            name="email"
          />
          <TextField
            InputProps={{ className: classes.textField }}
            InputLabelProps={{ className: classes.input }}
            variant="outlined"
            label="Senha"
            name="password"
            type="password"
          />
          <div className="checkbox">
            <Checkbox name="terms" />
            <p>Lembrar deste dispositivo.</p>
          </div>
          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
          <Link to="/registro">Registrar-se</Link>
        </Form>
      </div>
    </>
  );
}
