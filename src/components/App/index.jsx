import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { LinearProgress } from '@material-ui/core';

function App() {
  const Main = lazy(() => import('../Main'));
  const QuestionDetails = lazy(() => import('../QuestionDetails'));
  const addQuestion = lazy(() => import('../AddQuestion'));
  return (
    <Router>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/questions/:questionId" component={QuestionDetails} />
          <Route path="/add" component={addQuestion} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
