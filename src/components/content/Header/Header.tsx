import React, { ReactElement } from 'react';
import { Button, Image, Link } from '../../ui';
import { IPage } from '../../../types';
import HeaderStyled, { NavWrapper, LinksWrapper } from './HeaderStyled';

interface IHeader {
  pages: IPage[];
}

export default function Header({ pages }: IHeader): ReactElement {
  return (
    <HeaderStyled>
      <NavWrapper>
        <Image src="assets/images/logo.svg" width={89} height={32} />
        <LinksWrapper>
          {pages.map(({ url, id }) => (
            <Link to={url} key={id} value={url === '/' ? 'home' : url.substring(1)} />
          ))}
        </LinksWrapper>
      </NavWrapper>
      <Button>Contact us</Button>
    </HeaderStyled>
  );
}
