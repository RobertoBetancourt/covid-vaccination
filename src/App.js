import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Link, Redirect
import LandingPage from './components/landing-page/landing-page.component'
import Dashboard from './components/dashboard/dashboard.component'
import SignInPage from './components/sign-in/sign-in-page.component'
import SelectCountries from './components/select-countries/select-countries.component'
import CasesInformation from './components/cases-information/cases-information.component'

function App () {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/acerca_de' component={LandingPage} />
          <Route exact path='/iniciar_sesion' component={SignInPage} />
          <Route exact path='/seleccionar_paises' component={SelectCountries} />
          <Route exact path='/informacion_casos' component={CasesInformation} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
