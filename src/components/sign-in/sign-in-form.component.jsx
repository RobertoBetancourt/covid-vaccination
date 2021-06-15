import React from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles, Button, Container, TextField, Typography } from '@material-ui/core'
// import ConfirmationDialog from '../utils/confirmation-dialog.component'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Alert from '@material-ui/lab/Alert'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  informationContent: {
    color: 'black',
    lineHeight: 1.3
  },
  contactContainer: {
    marginTop: 40,
    textAlign: 'center',
    marginBottom: 70
  },
  form: {
    margin: theme.spacing(1)
  },
  informationField: {
    marginTop: 25,
    marginBottom: 25
  },
  errorMessage: {
    textAlign: 'right',
    color: 'red'
  }
}))

const SignInForm = () => {
  const classes = useStyles()
  const { register, errors, handleSubmit } = useForm()
  // const [open, setOpen] = React.useState(false)
  const [isSignedIn, setIsSignedIn] = React.useState(false)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  // const handleClickOpen = () => {
  //   setIsSignedIn(true)
  // }

  const onSubmit = async (data) => {
    // console.log('data', data)
    setLoading(true)
    const input = {
      mail: data.email,
      password: data.password
    }

    axios.post('http://localhost:8000/login', input)
      .then(res => {
        const token = res.data?.token
        localStorage.setItem('token', token)
        window.dispatchEvent(new Event('storage'))
        // console.log(res)
        // console.log(res.data)
        setIsSignedIn(true)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        if (error.response.status === 401) {
          setError('El correo o la contraseña son incorrectos. Intente nuevamente')
        } else {
          setError('Ocurrió un error inesperado. Por favor intente nuevamente.')
        }
      })
  }

  // const informationDialog = {
  //   title: 'Información registrada exitosamente',
  //   content: 'Estaremos en contacto contigo para brindarte información del proyecto.',
  //   button: 'Cerrar'
  // }

  if (isSignedIn) {
    return <Redirect to='/' />
  }

  return (
    <Container maxWidth='md' className={classes.contactContainer}>
      {
        error.length > 0 &&
          <Alert severity='error'>{error}</Alert>
      }
      <Container maxWidth='sm'>
        <form>
          <div className={classes.informationField}>
            <TextField
              fullWidth
              variant='outlined'
              inputRef={register({ required: true })}
              name='email'
              id='email'
              label={<Typography variant='h6' component='label'>Correo electrónico</Typography>}
              InputProps={{ style: { fontSize: 30 } }}
            />
            <div className={classes.errorMessage}>
              {errors.email && errors.email.type === 'required' && (
                <Typography component='span'>El correo electrónico es requerido</Typography>
              )}
            </div>
          </div>

          <div className={classes.informationField}>
            <TextField
              fullWidth
              variant='outlined'
              inputRef={register({ required: true })}
              name='password'
              id='password'
              type='password'
              label={<Typography variant='h6' component='label'>Contraseña</Typography>}
              InputProps={{ style: { fontSize: 30 } }}
            />
            <div className={classes.errorMessage}>
              {errors.password && errors.password.type === 'required' && (
                <Typography component='span'>La contraseña es requerida</Typography>
              )}
            </div>
          </div>
          {
            loading
              ? <CircularProgress />
              : <Button
                  onClick={handleSubmit(onSubmit)}
                  style={{ fontSize: 20, width: '100%' }}
                  variant='contained'
                  size='large'
                  color='primary'
                >
                Iniciar sesión
              </Button>
          }

        </form>
      </Container>
      {/* <ConfirmationDialog
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        title={informationDialog.title}
        content={informationDialog.content}
        button={informationDialog.button}
      /> */}
    </Container>
  )
}

export default SignInForm
