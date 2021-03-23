import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

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

const LandingPageForm = () => {
  const classes = useStyles()
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (

    <Container maxWidth='md' className={classes.contactContainer}>
      <Typography variant='h3' component='p' className={classes.informationContent}>
        ¿Deseas mantenerte informado? Déjanos tu información de contacto:
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField fullWidth variant='outlined' inputRef={register} name='name' id='name' label='Nombre' />
        <TextField fullWidth variant='outlined' inputRef={register} name='email' id='email' label='Correo electrónico' />

        <Button variant='contained' color='primary' type='submit'>Enviar información</Button>
      </form>
    </Container>

  )
}

export default LandingPageForm
