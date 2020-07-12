import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { TextField } from 'unform-material-ui';

import logo from '../../assets/splash.png';
import { signUpRequest } from '~/store/modules/auth/actions';
import makeStyles from '~/styles/makeStyles';

const useStyles = makeStyles;

export default function SignUp() {
  const classes = useStyles();
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório.'),
    email: Yup.string()
      .email('Insira um e-mail válido.')
      .required('O e-mail é obrigatório.'),
    password: Yup.string()
      .min(8, 'A senha precisa ter no mínimo 8 caracteres.')
      .required('A senha é obrigatória.'),
    yourpassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'As senhas precisam ser iguais.'
    ),
  });

  async function handleSubmit(data, { reset }) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, password, email } = data;

      dispatch(signUpRequest(name, email, password));

      formRef.current.setErrors({});
      reset();
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
          <h1>Cadastro</h1>
          <TextField
            InputProps={{ className: classes.textField }}
            InputLabelProps={{ className: classes.input }}
            variant="outlined"
            label="Nome"
            name="name"
          />

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

          <TextField
            InputProps={{ className: classes.textField }}
            InputLabelProps={{ className: classes.input }}
            variant="outlined"
            label="Confirmar Senha"
            name="yourpassword"
            type="password"
          />
          <button type="submit">Criar conta</button>
          <Link to="/">Já sou cadastrado</Link>
        </Form>
      </div>
    </>
  );
}
