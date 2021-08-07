import { Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

import history from 'utils/history';

import MainPage from './MainPage';

const BaseRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path={ROUTES.MAIN_PAGE} component={MainPage} />
      <Route path={ROUTES.CONTENT} component={MainPage} />
      <Route path={ROUTES.SCHEDULE} component={MainPage} />
    </Switch>
  </Router>
);

export default BaseRouter;
