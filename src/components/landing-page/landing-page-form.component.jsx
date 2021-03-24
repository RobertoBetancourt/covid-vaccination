import React from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles, Button, Container, TextField, Typography } from '@material-ui/core'
import ConfirmationDialog from '../utils/confirmation-dialog.component'

const useStyles = makeStyles((theme) => ({
  informationContent: {
    color: 'black',
    lineHeight: 1.3
  },
  contactContainer: {
    marginTop: 70,
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

const LandingPageForm = () => {
  const classes = useStyles()
  const { register, errors, handleSubmit } = useForm()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (data) => {
    console.log(data)
    handleClickOpen()
  }

  const informationDialog = {
    title: 'Información registrada exitosamente',
    content: 'Estaremos en contacto contigo para brindarte información del proyecto.',
    button: 'Cerrar'
  }

  return (
    <Container maxWidth='md' className={classes.contactContainer}>
      <Typography variant='h3' component='p' className={classes.informationContent}>
        ¿Deseas mantenerte informado? Déjanos tu información de contacto:
      </Typography>
      <Container maxWidth='sm'>
        <form>
          <div className={classes.informationField}>
            <TextField
              fullWidth
              variant='outlined'
              inputRef={register({ required: true })}
              name='name'
              id='name'
              label={<Typography variant='h5' component='label'>Nombre</Typography>}
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
              label={<Typography variant='h5' component='label'>Correo electrónico</Typography>}
              InputProps={{ style: { fontSize: 30 } }}
            />
            <div className={classes.errorMessage}>
              {errors.email && errors.email.type === 'required' && (
                <Typography component='span'>El correo electrónico es requerido</Typography>
              )}
            </div>
          </div>
          <Button
            onClick={handleSubmit(onSubmit)}
            style={{ fontSize: 22 }}
            variant='contained'
            size='large'
            color='primary'
          >
            Enviar
          </Button>
        </form>
      </Container>
      <ConfirmationDialog
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        title={informationDialog.title}
        content={informationDialog.content}
        button={informationDialog.button}
      />
    </Container>
  )
}

export default LandingPageForm
