import React, { FunctionComponent, ReactElement } from 'react';

type RouteType = {
  name: string;
  path: string;
  exact: boolean;
  component: FunctionComponent;
};

const Home: FunctionComponent = (): ReactElement => <div>Home</div>;
const NotFound: FunctionComponent = (): ReactElement => <div>Not Found</div>;

const appRoutes: RouteType[] = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'notfound',
    path: '*',
    exact: false,
    component: NotFound,
  },
];

export default appRoutes;
