import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  informationContent: {
    color: 'black',
    lineHeight: 1.3
  },
  informationContainer: {
    marginTop: 50,
    textAlign: 'center'
  },
  card: {
    maxWidth: 345
  },
  numbersImage: {
    height: 250

  },
  graphImage: {
    paddingLeft: 17,
    paddingRight: 17,
    marginTop: 27,
    width: 250
  },
  tableImage: {
    height: 250
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 50,
    textAlign: 'center'
  },
  numbersTitle: {
    marginBottom: 5
  },
  blackFont: {
    color: 'black'
  }
}))

const ProjectInformation = () => {
  const classes = useStyles()
  return (
    <div>
      <Container maxWidth='md' className={classes.informationContainer}>
        <Typography variant='h3' component='p' className={classes.informationContent}>
          Este proyecto está enfocado en proveer información útil, veraz y actualizada del proceso de vacunación en los diferentes países de América Latina.
        </Typography>
      </Container>
      <Container maxWidth='md' className={classes.informationContainer}>
        <Typography variant='h3' component='p' className={classes.informationContent}>
          Lo anterior será presentado por medio de:
        </Typography>
      </Container>
      <Container maxWidth='md' className={classes.cardsContainer}>
        <Card className={classes.card} variant='outlined'>
          <CardContent>
            <Typography className={[classes.blackFont, classes.numbersTitle]} variant='h4' component='h2'>
              Cifras
            </Typography>
            <img src='img/numbers.png' className={classes.numbersImage} />
          </CardContent>
        </Card>
        <Card className={classes.card} variant='outlined'>
          <CardContent>
            <Typography className={classes.blackFont} variant='h4' component='h2'>
              Gráficas
            </Typography>
            <img src='img/graph.png' className={classes.graphImage} />
          </CardContent>
        </Card>
        <Card className={classes.card} variant='outlined'>
          <CardContent>
            <Typography className={classes.blackFont} variant='h4' component='h2'>
              Tablas
            </Typography>
            <img src='img/table.png' className={classes.tableImage} />
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default ProjectInformation
