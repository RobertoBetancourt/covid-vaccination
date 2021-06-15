import React from 'react'
import SelectCountriesTable from './select-countries-table.component'
import SimpleMenu from '../menu/menu.component'
import { makeStyles, Container } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 5
  },
  menu: {
    paddingTop: 50
  }
}))

const SelectCountries = () => {
  const classes = useStyles()
  const [countries, setCountries] = React.useState([])
  const [countriesUpdated, setCountriesUpdated] = React.useState(0)
  const userIsSignedIn = localStorage.getItem('token')

  React.useEffect(() => {
    const apiUrl = 'http://172.104.180.144:8000/country/'
    axios.get(apiUrl)
      .then(res => {
        console.log(res)
        setCountries(res.data.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  React.useEffect(() => {
    console.log('Llamando a localhost:8000/country/')
    const apiUrl = 'http://172.104.180.144:8000/country/'
    axios.get(apiUrl)
      .then(res => {
        console.log(' localhost:8000/country/ res:')
        console.log(res)
        setCountries(res.data.data)
      }).catch(error => {
        console.log(error)
      })
  }, [countriesUpdated])

  return (
    <>
      <Container className={classes.menu}>
        <SimpleMenu />
      </Container>
      <Container maxWidth='md' className={classes.container}>
        <SelectCountriesTable
          data={countries}
          userIsSignedIn={userIsSignedIn}
          setCountriesUpdated={setCountriesUpdated}
        />
      </Container>
    </>
  )
}

export default SelectCountries
