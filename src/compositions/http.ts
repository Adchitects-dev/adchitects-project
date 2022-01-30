import { ErrorPayload, IHttp } from '../types';

const BASE_URL = 'https://adchitects-cms.herokuapp.com';

const http = <T = unknown>({ url, method = 'GET', payload, onError }: IHttp): Promise<T> => {
  const headers = new Headers();
  headers.set('Authorization', `Basic ${btoa('adchitects:jsrulezzz')}`);

  let body;
  try {
    body = JSON.stringify(payload);
  } catch (e) {
    return Promise.reject(e);
  }

  const options = {
    method,
    headers,
    body,
  };

  return fetch(`${BASE_URL}${url}`, options)
    .then((response) => response.json() as Promise<T>)
    .catch((err: ErrorPayload) => {
      if (onError) {
        onError(err);
      }
    }) as Promise<T>;
};

export default http;
