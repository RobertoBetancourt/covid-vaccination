import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import DashboardGraph from './dashboard-graph.component'
import Menu from '../menu/menu.component'

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
  }
})

const Dashboard = () => {
  const classes = useStyles()

  return (
    <div>
      <Container className={classes.menu}>
        <Menu color='white' />
      </Container>
      <Container className={classes.container}>
        <Typography variant='h1' className={classes.title}>
          Vacunación COVID-19
        </Typography>
      </Container>
      <DashboardGraph />
    </div>
  )
}

export default Dashboard
