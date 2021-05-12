import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {
  Link
} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { grey, indigo } from '@material-ui/core/colors'

const SimpleMenu = (props) => {
  const { light } = props
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // const onClick = () => {
  //   <Link />
  // }

  return (
    <div>
      <IconButton aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
        <MenuIcon style={light ? { color: grey[50] } : { color: indigo[900] }} />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/'>
          <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        </Link>
        <Link to='/acerca_de'>
          <MenuItem onClick={handleClose}>Acerca de</MenuItem>
        </Link>
        <Link to='/iniciar_sesion'>
          <MenuItem onClick={handleClose}>Iniciar sesión</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default SimpleMenu
