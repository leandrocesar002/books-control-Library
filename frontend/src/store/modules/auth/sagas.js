import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  signInSuccess,
  signFailure,
  signInActivation,
  activationSuccess,
  activationFailure,
} from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { accessToken, refreshToken, user } = response.data;

    if (user.status === 'new') {
      toast.info('Insira a chave de ativação.');

      yield put(signInActivation(user));
      history.push('/ativacao');
      return;
    }

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    yield put(signInSuccess(accessToken, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação. Verifique seus dados.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro. Verifique seus dados.');
    yield put(signFailure());
  }
}

export function* activationRequest({ payload }) {
  try {
    const { user, key } = payload;
    const { id } = user;

    const response = yield call(api.put, 'confirmation', {
      id,
      key,
    });

    const { accessToken, refreshToken, user: userData } = response.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    toast.success('Cadastro ativado com sucesso!');
    yield put(activationSuccess(accessToken, userData));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na ativação. Verifique sua chave de acesso.');
    yield put(activationFailure());
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/ACTIVATION_REQUEST', activationRequest),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
