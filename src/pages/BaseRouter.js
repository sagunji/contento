import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

import MainPage from './MainPage';
import Header from 'components/header';

const BaseRouter = () => (
  <Router>
    <Header />

    <Switch>
      <Route exact path={ROUTES.MAIN_PAGE} component={MainPage} />
      <Route path={ROUTES.SCHEDULE} component={MainPage} />
      <Route path={ROUTES.CONTENT} component={MainPage} />
      <Route path={ROUTES.GROW} component={MainPage} />
      <Route path={ROUTES.REPORT} component={MainPage} />
    </Switch>
  </Router>
);

export default BaseRouter;
