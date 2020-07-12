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
    id: Yup.string().required('Codigo de barras é obrigatório.'),
    title: Yup.string().required('Titulo do livro é obrigatório.'),
    numberPage: Yup.string().required('Numero de páginas do livro é obrigatório.'),
    dtPublication: Yup.string().required('Data de publicação do livro é obrigatório.'),
    author: Yup.string().required('Autor do livro é obrigatório.'),
  });

  async function handleSubmit(data, { reset }) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      await api.post(`library`, data);
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
        <h1>Livros</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <TextField
            InputProps={{ className: classes.textField }}
            InputLabelProps={{ className: classes.input }}
            variant="outlined"
            label="Codigo de barras"
            name="id"
          />

          <TextField
            InputProps={{ className: classes.textField }}
            InputLabelProps={{ className: classes.input }}
            variant="outlined"
            label="Título"
            name="title"
          />

          
          <TextField
            InputProps={{ className: classes.textField }}
            InputLabelProps={{ className: classes.input }}
            variant="outlined"
            label="Numero de páginas"
            name="numberPage"
          />



          <TextField
            InputProps={{ className: classes.textField }}
            InputLabelProps={{ className: classes.input }}
            variant="outlined"
            label="Autor"
            name="author"
          />



          <TextField
            InputProps={{ className: classes.textField }}
            InputLabelProps={{ className: classes.input }}
            variant="outlined"
            label="Data de publicação"
            name="dtPublication"
          />
          <button type="submit">Cadastrar</button>
        </Form>
      </div>
    </Container>
  );
}
