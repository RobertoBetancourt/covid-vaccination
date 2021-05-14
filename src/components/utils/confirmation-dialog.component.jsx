import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from '@material-ui/core'

const ConfirmationDialog = (props) => {
  const { open, handleClose, title, content, button } = props

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          <Typography variant='h5'>{title || 'Éxito'}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {content || 'Operación realizada exitosamente.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            {button || 'Entendido'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ConfirmationDialog
