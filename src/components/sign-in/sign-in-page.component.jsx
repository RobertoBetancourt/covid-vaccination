import React from 'react'
// import Container from '@material-ui/core/Container';
import { Button, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SignInForm from './sign-in-form.component'
import SignUpForm from './sign-up-form.component'
import SimpleMenu from '../menu/menu.component'
// import axios from 'axios'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
  signInLabel: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 35
  },
  menu: {
    paddingTop: 10
  },
  signInForm: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20
  },
  backgroundImage: {
    backgroundImage: 'url(/img/landing_page.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }
}))

const SignInPage = () => {
  const classes = useStyles()

  const [signIn, setSignIn] = React.useState(true)
  const [signUpSuccess, setSignUpSuccess] = React.useState(false)

  const onClickSignUp = () => {
    setSignUpSuccess(false)
    setSignIn(false)
  }

  const onClickSignIn = () => {
    setSignIn(true)
  }

  return (
    <>
      <div style={{
        backgroundColor: '#3f51b5',
        height: '100vh'
      }}
      >
        <Container className={classes.menu}>
          <SimpleMenu light />
        </Container>
        <Container className={classes.signInForm} maxWidth='sm'>
          {
            signUpSuccess &&
              <Alert severity='success'>¡El registro ha sido exitoso!</Alert>
          }
          {
            signIn
              ? <>
                <Typography variant='h4' className={classes.signInLabel}>
                  Iniciar sesión
                </Typography>
                <SignInForm />
                <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                >
                  <Button size='small' className={classes.button} onClick={onClickSignUp}>
                    ¿No tienes una cuenta? Regístrate
                  </Button>
                </div>
                </>
              : <>
                <Typography variant='h4' className={classes.signInLabel}>
                  Regístrate
                </Typography>
                <SignUpForm setSignUpSuccess={setSignUpSuccess} setSignIn={setSignIn} />
                <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                >
                  <Button size='small' className={classes.button} onClick={onClickSignIn}>
                    ¿Ya tienes una cuenta? Inicia sesión
                  </Button>
                </div>
                </>
          }

        </Container>
      </div>
    </>
  )
}

export default SignInPage
