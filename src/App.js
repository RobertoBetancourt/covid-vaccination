import './App.css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import LandingPage from './components/landing-page/landing-page.component'

function App () {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
