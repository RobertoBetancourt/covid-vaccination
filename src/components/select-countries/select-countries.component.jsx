import React from 'react'
import SelectCountriesTable from './select-countries-table.component'
import SimpleMenu from '../menu/menu.component'
import { withStyles, makeStyles, Button, Container, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import { Redirect } from 'react-router'

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
  const userIsSignedIn = localStorage.getItem('token')

  React.useEffect(() => {
    const apiUrl = 'http://35.239.182.84:3001/country'
    axios.get(apiUrl)
      .then(res => {
        setCountries(res.data.contries)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Container className={classes.menu}>
        <SimpleMenu />
      </Container>
      <Container maxWidth='md' className={classes.container}>
        <SelectCountriesTable data={countries} userIsSignedIn={userIsSignedIn} />
      </Container>
    </>
  )
}

export default SelectCountries
