import React from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles, Button, Container, TextField, Typography } from '@material-ui/core'
import ConfirmationDialog from '../utils/confirmation-dialog.component'
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

const SignUpForm = (props) => {
  const { setSignUpSuccess, setSignIn } = props
  const classes = useStyles()
  const { register, errors, handleSubmit } = useForm()
  // const [open, setOpen] = React.useState(false)
  // const [isSignedUp, setIsSignedUp] = React.useState(false)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  // const handleClickOpen = () => {
  //   setIsSignedIn(true)
  // }

  const onSubmit = (data) => {
    setLoading(true)
    const input = {
      name: data.name,
      mail: data.email,
      password: data.password
    }
    console.log(input)
    axios.post('http://35.239.182.84:3001/register', input)
      .then(res => {
        console.log(res)
        if (res.data?.user?.id) {
          setError('')
          setSignUpSuccess(true)
          setSignIn(true)
        }
      })
      .catch((error) => {
        console.log(error)
        setError('Ocurrió un error inesperado. Por favor intente nuevamente.')
      })
  }

  // if (isSignedUp) {
  //   return <Redirect to='/iniciar_sesion' />
  // }

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
              name='name'
              id='name'
              label={<Typography variant='h6' component='label'>Nombre</Typography>}
              InputProps={{ style: { fontSize: 30 } }}
            />
            <div className={classes.errorMessage}>
              {errors.name && errors.name.type === 'required' && (
                <Typography component='span'>El nombre es requerido</Typography>
              )}
            </div>
          </div>

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
                Regístrate
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

export default SignUpForm
