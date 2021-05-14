import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import DashboardGraph from './dashboard-graph.component'
import SimpleMenu from '../menu/menu.component'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
  container: {
    // height: '100%',
    // width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    color: '#000A77'
  },
  background: {
    backgroundImage: 'url(/img/landing_page.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  menu: {
    paddingTop: 50
  },
  circularProgress: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50
  }
})

const Dashboard = () => {
  const classes = useStyles()
  const [countries, setCountries] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const getNameOfCountries = (countries) => {
    const activeCountries = countries.filter(country => country.active === true)
    const nameOfCountries = activeCountries.map(country => country.name)
    setCountries(nameOfCountries)
    setLoading(false)
  }

  React.useEffect(() => {
    setLoading(true)
    const apiUrl = 'http://35.239.182.84:3001/country'
    axios.get(apiUrl)
      .then(res => {
        // console.log(res.data.contries)
        getNameOfCountries(res.data.contries)
      }).catch(error => {
        setLoading(false)
        console.log(error)
      })
  }, [])

  // console.log(countries)
  return (
    <div>
      <Container className={classes.menu}>
        <SimpleMenu />
      </Container>
      <Container className={classes.container}>
        <Typography variant='h1' className={classes.title}>
          Vacunación COVID-19
        </Typography>
      </Container>
      {
        loading
          ? <div className={classes.circularProgress}>
            <CircularProgress />
            </div>
          : <DashboardGraph countries={countries} />
      }

    </div>
  )
}

export default Dashboard
