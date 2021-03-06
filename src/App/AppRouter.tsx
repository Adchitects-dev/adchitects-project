import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { MainView } from '../views';
import { MAIN_VIEW } from '../endpoints';

type TRoot = {
  key: string;
  component: RouteProps['component'];
  path: string;
  exact?: boolean;
};

export const roots: TRoot[] = [{ key: 'main', component: MainView, path: MAIN_VIEW, exact: true }];

export function mapRoots(rootsList: TRoot[]): JSX.Element[] {
  return rootsList.map(({ key, exact, path, component }) => (
    <Route key={key} path={path} component={component} exact={exact} />
  ));
}

export default function AppRouter(): JSX.Element {
  return <>{mapRoots(roots)}</>;
}
