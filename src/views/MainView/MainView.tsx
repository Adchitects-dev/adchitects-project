import React, { useEffect, useState } from 'react';
import { Image, Text } from '../../components';
import MainViewStyled, { Hero, Testimonial, Newsletter, Quote, Signature } from './MainViewStyled';
import http from '../../compositions';
import { IPage, IPageData, TObject } from '../../types';

export default function MainView(): JSX.Element {
  const [pages, setPages] = useState<IPage[]>();
  const [pageData, setPageData] = useState<IPageData>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    http<IPage[]>({ url: 'https://adchitects-cms.herokuapp.com/pages' }).then((data) => {
      setPages(data);
    });
  }, []);

  useEffect(() => {
    if (pages) {
      const { id } = pages.find(({ url }) => url === '/') as IPage;
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      http<IPageData>({ url: `https://adchitects-cms.herokuapp.com/page/${id}` }).then((data) => {
        setPageData(data);
      });
    }
  }, [pages]);

  if (!pageData) {
    return (
      <Text typography="textExtraBig" bold>
        Loading...
      </Text>
    );
  }

  const { sections } = pageData;
  const { img: heroImg, text: heroText } = sections.find(({ type }) => type === 'hero') as TObject;
  const { author: testimonialAuthor, text: testimonialText } = sections.find(
    ({ type }) => type === 'testimonial',
  ) as TObject;

  return (
    <MainViewStyled>
      <Hero>
        <Text typography="textExtraBig" bold>
          {heroText}
        </Text>
        <Image src={heroImg} width={516} height={384} />
      </Hero>
      <Testimonial>
        <Image src="/assets/images/quotation-mark.svg" width={48} height={40} />
        <Quote color="whiteSecondary" typography="textMedium">
          {testimonialText}
        </Quote>
        <Signature color="whiteTrietary" typography="textMedium">
          {testimonialAuthor}
        </Signature>
      </Testimonial>
      <Newsletter>
        <Text typography="textBig">Sign up for Newsletter</Text>
        {/* form and input */}
        <Text color="secondary" typography="textExtraSmall">
          Thank you for signing up for the Breally newsletter.
        </Text>
      </Newsletter>
    </MainViewStyled>
  );
}
