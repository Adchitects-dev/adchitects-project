import { TObject } from './common';

export interface IHttp {
  url: string;
  method?: 'GET' | 'POST';
}

export interface IPage {
  url: string;
  id: string;
}

export interface IPageData extends IPage {
  sections: TObject[];
}
