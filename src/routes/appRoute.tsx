import React, { FunctionComponent, ReactElement } from 'react';
import Dashboard from '../pages/Dashboard';

type RouteType = {
  name: string;
  path: string;
  exact: boolean;
  component: FunctionComponent;
};

const NotFound: FunctionComponent = (): ReactElement => <div>Not Found</div>;

const appRoutes: RouteType[] = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Dashboard,
  },
  {
    name: 'notfound',
    path: '*',
    exact: false,
    component: NotFound,
  },
];

export default appRoutes;
