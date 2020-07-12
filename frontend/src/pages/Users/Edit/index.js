import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { TextField, Select } from 'unform-material-ui';
import { MenuItem } from '@material-ui/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';
import api from '~/services/api';
import goBack from '~/utils/goBack';
import history from '~/services/history';
import makeStyles from '~/styles/makeStyles';

const useStyles = makeStyles;

export default function CondoEdit() {
  const formRef = useRef(null);

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório.'),
    email: Yup.string().required('Email é obrigatório.'),
    funcao: Yup.string().required('Função é obrigatório'),
  });

  async function handleSubmit(data, { reset }) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      await api.post(`users`, data);
      toast.success('Dados salvos com sucesso.');
      formRef.current.setErrors({});
      reset();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};
        error.inner.forEach((e) => {
          errorMessages[e.path] = e.message;
        });
        toast.error('Falha ao salvar dados.');
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  const classes = useStyles();
  return (
    <Container>

      <div className="bodyRegister">
        <h1>Cadastro de Usuário</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
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
            label="Função"
            name="funcao"
          />

          <button type="submit">Cadastrar</button>
        </Form>
      </div>
    </Container>
  );
}
