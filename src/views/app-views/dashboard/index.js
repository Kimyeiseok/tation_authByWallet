import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/wallet`} component={lazy(() => import(`./wallet`))} />
      <Route path={`${match.url}/userlist`} component={lazy(() => import(`./userlist`))} />
	  <Route path={`${match.url}/editProfile`} component={lazy(() => import(`./editProfile`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/wallet`} />
    </Switch>
  </Suspense>
)};

export default Dashboards;