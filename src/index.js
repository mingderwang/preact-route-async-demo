import { Component, render } from 'preact';
import Router from 'preact-router';
import Route from 'preact-route-async';
import { Link } from 'preact-router/match';

function Test() {
  return <Link href="/user">Go to user page</Link>;
}

export default class App extends Component {
  render(props, { results = [] }) {
    return (
      <div>
        <Router>
          <Route path="/" component={Test} />
          <Route
            path="/user"
            name="Marnix Janssen"
            getComponent={() => import('./pages/User.js')}
          />
        </Router>
      </div>
    );
  }
}

if (typeof window !== 'undefined') {
  render(<App />, document.getElementById('root'));
}
