import { IHttp } from '../types';

const http = <T>({ url, method = 'GET' }: IHttp): Promise<T> => {
  const headers = new Headers();
  headers.set('Authorization', `Basic ${btoa('adchitects:jsrulezzz')}`);

  const options = {
    method,
    headers,
  };

  return fetch(url, options).then((response) => response.json() as Promise<T>);
};

export default http;
