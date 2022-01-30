import React, { useEffect, useState } from 'react';
import { Button, Header, Image, Input, Text } from '../../components';
import MainViewStyled, { Hero, HeroText, Testimonial, Newsletter, Quote, Signature, Form } from './MainViewStyled';
import { ErrorPayload, IPage, IPageData, IPostData, TObject } from '../../types';
import http from '../../compositions/http';
import getInputValue from '../../compositions/getInputValue';

export default function MainView(): JSX.Element {
  const [pages, setPages] = useState<IPage[]>();
  const [pageData, setPageData] = useState<IPageData>();
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { currentTarget: formElement } = e;

    const value = getInputValue(formElement, 'email');
    const payload = {
      email: value,
    };

    const onError = (err: ErrorPayload) => {
      const { message } = err;
      setError(message);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    http<IPostData>({ url: '/newsletter', method: 'POST', payload, onError })
      .then((data) => {
        const { message } = data;
        console.log(message);
      })
      .catch((err: ErrorPayload) => {
        const { message } = err;
        setError(message);
      });
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    http<IPage[]>({ url: '/pages' }).then((data) => {
      setPages(data);
    });
  }, []);

  useEffect(() => {
    if (pages) {
      const { id } = pages.find(({ url }) => url === '/') as IPage;
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      http<IPageData>({ url: `/page/${id}` }).then((data) => {
        setPageData(data);
      });
    }
  }, [pages]);

  if (!pages || !pageData) {
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
      <Header pages={pages} />
      <Hero>
        <HeroText typography="textExtraBig" bold>
          {heroText}
        </HeroText>
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
        <Text typography="textBig" bold>
          Sign up for Newsletter
        </Text>
        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Type your email" error={error} />
          <Button>Submit</Button>
        </Form>
        <Text color="secondary" typography="textExtraSmall">
          Thank you for signing up for the Breally newsletter.
        </Text>
      </Newsletter>
    </MainViewStyled>
  );
}
