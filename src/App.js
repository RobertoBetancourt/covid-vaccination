import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from './components/landing-page/landing-page.component'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </div>
  )
}

export default App
