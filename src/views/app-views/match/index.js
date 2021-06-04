import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Match = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/match_list`} component={lazy(() => import(`./match_list`))} />
      <Route path={`${match.url}/reporting_match`} component={lazy(() => import(`./reporting_match`))} />
      <Route path={`${match.url}/match_to_confirm`} component={lazy(() => import(`./match_to_confirm`))} />		
		   <Route path={`${match.url}/test`} component={lazy(() => import(`./test`))} />	
      <Redirect from={`${match.url}`} to={`${match.url}/wallet`} />
    </Switch>
  </Suspense>
)};

export default Match;