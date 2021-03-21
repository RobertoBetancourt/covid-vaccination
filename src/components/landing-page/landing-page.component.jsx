import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
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
    fontWeight: 'bold'
  }
})

const LandingPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Typography variant='h1' className={classes.title}>
          Vacunación COVID-19
        </Typography>
      </Container>
    </div>
  )
}

export default LandingPage
