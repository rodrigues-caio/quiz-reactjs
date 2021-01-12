import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Quiz from '../pages/Quiz';

const index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/quiz' exact component={Quiz} />
      </Switch>
    </BrowserRouter>
  );
};

export default index;
