import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    paddingTop: 50
  }
})

const DashboardGraph = () => {
  const classes = useStyles()
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // The empty deps array [] means this useEffect will run once, similar to componentDidMount()
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (isLoaded) {
    console.log(items)
  }
  return (
    <Container width='md' className={classes.container}>
      Gráfica
    </Container>
  )
}

export default DashboardGraph
