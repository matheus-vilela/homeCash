import React from 'react';
import {
  BrowserRouter,
  Routes as RouteProvider,
  Route,
} from 'react-router-dom';
import { useAuth } from '../context/auth';
import Group from '../pages/group';

import Home from '../pages/home';
import Login from '../pages/login';

const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <RouteProvider>
       {!!user.id
          ? !!user.residence
            ? <Route path="/" element={<Home />}/>
            : <Route path="/" element={<Group/>}/>
          : <Route path="/" element={<Login />} />}
      </RouteProvider>
    </BrowserRouter>
  );
};

export default Routes;
