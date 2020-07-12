import axios from 'axios';
import LocalStorageService from '~/services/localStorageService';
import msToTime from '~/utils/msToTime';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

const localStorageService = LocalStorageService.getService();

// Seta o Access Token em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorageService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Intercepta todas as respostas. Caso tenha retorno 401, tenta renovar o token
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Caso seja 403, redireciona para página de erro
    if (error.response.status === 403) {
      window.location.href = '/erro';
    }

    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest.url === 'auth/refresh'
    ) {
      localStorage.clear();
      window.location.href = '/';
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = localStorageService.getAccessToken();
      const refreshToken = localStorageService.getRefreshToken();
      return (
        api
          .post('auth/refresh', {
            accessToken,
            refreshToken,
          })
          // eslint-disable-next-line consistent-return
          .then((res) => {
            if (res.status === 200) {
              localStorageService.setToken(res.data);
              api.defaults.headers.common.Authorization = `Bearer ${localStorageService.getAccessToken()}`;
              return api(originalRequest);
            }
          })
      );
    }
    return Promise.reject(error);
  }
);

// Adiciona informação do horário que a requisição aconteceu
api.interceptors.request.use(
  (config) => {
    config.metadata = { startTime: new Date() };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Calcula quanto tempo a requisição demorou para executar
api.interceptors.response.use(
  (response) => {
    response.config.metadata.endTime = new Date();
    response.duration =
      response.config.metadata.endTime - response.config.metadata.startTime;
    console.tron.log(
      'RESPONSE TIME FROM: ',
      response.config.url,
      '-',
      msToTime(response.duration)
    );
    return response;
  },
  (error) => {
    error.config.metadata.endTime = new Date();
    error.duration =
      error.config.metadata.endTime - error.config.metadata.startTime;
    return Promise.reject(error);
  }
);

export default api;
