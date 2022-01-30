import React from 'react';
import { Image, Text } from '../../components';
import MainViewStyled, { UpperSection, MiddleSection, LowerSection, Quote, Signature } from './MainViewStyled';

export default function MainView(): JSX.Element {
  return (
    <MainViewStyled>
      <UpperSection>
        <Text typography="textExtraBig" bold>
          In oculis quidem rerum facilis est et aperta.
        </Text>
        <Image
          src="https://marvel-live.freetls.fastly.net/canvas/2021/12/6200eedd9afa4115a6b4fe0b5e611b5f?quality=95&fake=.png"
          width={516}
          height={384}
        />
      </UpperSection>
      <MiddleSection>
        <Image src="/assets/images/quotation-mark.svg" width={48} height={40} />
        <Quote color="whiteSecondary" typography="textMedium">
          Torquatos nostros? quos dolores eos, qui studiose antiqua persequeris, claris et quasi naturalem. In quo enim
          inter mediocrem animadversionem atque insitam in malis dolor, non numquam. At vero eos et dolore suo sanciret.
        </Quote>
        <Signature color="whiteTrietary" typography="textMedium">
          John Doe, Street Artist
        </Signature>
      </MiddleSection>
      <LowerSection>
        <Text typography="textBig">Sign up for Newsletter</Text>
        {/* form and input */}
        <Text color="secondary" typography="textExtraSmall">
          Thank you for signing up for the Breally newsletter.
        </Text>
      </LowerSection>
    </MainViewStyled>
  );
}
