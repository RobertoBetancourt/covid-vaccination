import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Link, Redirect
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
