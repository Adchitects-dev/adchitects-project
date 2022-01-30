import { TObject } from './common';

export interface IPage {
  url: string;
  id: string;
}

export interface IPageData extends IPage {
  sections: TObject[];
}

export interface IPostData {
  message: string;
}

export interface ErrorPayload {
  message: string;
}

export interface IHttp {
  url: string;
  method?: 'GET' | 'POST';
  payload?: unknown;
  onError?: (err: ErrorPayload) => void;
}
