import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import LandingPageForm from './landing-page-form.component'
import ProjectInformation from './project-information.component'

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  backgroundImage: {
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
  informationContent: {
    color: 'black',
    lineHeight: 1.3
  },
  contactContainer: {
    marginTop: 70,
    textAlign: 'center'
  },
  form: {
    margin: theme.spacing(1)
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

const LandingPage = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.backgroundImage}>
        <Container className={classes.imageContainer}>
          <Typography variant='h1' className={classes.title}>
            Vacunación COVID-19
          </Typography>
        </Container>
      </div>
      <ProjectInformation />
      <LandingPageForm />
    </div>
  )
}

export default LandingPage
