import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Link, Redirect
import LandingPage from './components/landing-page/landing-page.component'
import Dashboard from './components/dashboard/dashboard.component'
import Covid19 from  './components/dashboard/Covid19'

function App () {
  return (
    <div>
     
        <Covid19 />
     
    </div>
  
  )
}

export default App
