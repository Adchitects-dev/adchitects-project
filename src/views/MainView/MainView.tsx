import React from 'react';
import { Button, Text } from '../../components';
import MainViewStyled from './MainViewStyled';

export default function MainView(): JSX.Element {
  return (
    <MainViewStyled>
      <Text typography="textSmall" color="shade100">
        Main view
      </Text>
      <Button>Button</Button>
    </MainViewStyled>
  );
}
