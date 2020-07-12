import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';

import User from '~/pages/Users';
import UserEdit from '~/pages/Users/Edit/index';

import CondoRegister from '~/pages/Condos/Register';



import Error from '~/pages/Error';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registro" component={SignUp} />
      <Route path="/erro" component={Error} isPrivate />

      {/* rotas privadas */}
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/books" component={CondoRegister} isPrivate />
      <Route exact path="/usuarios" component={User} isPrivate />
      <Route path="/registroUsuarios/" component={UserEdit} isPrivate />

      {/* rotas de erro */}
      <Route path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}
