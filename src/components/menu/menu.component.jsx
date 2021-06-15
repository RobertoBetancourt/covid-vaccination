import React from 'react'
// import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link, Redirect } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { grey, indigo } from '@material-ui/core/colors'

const SimpleMenu = (props) => {
  const { light } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [isSignedOut, setIsSignedOut] = React.useState(false)
  // const [isSignedIn, setIsSignedIn] = React.useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsSignedOut(true)
    setAnchorEl(null)
  }

  const userIsSignedIn = localStorage.getItem('token')

  if (isSignedOut && window.location.pathname !== '/') {
    return <Redirect to='/' />
  }

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
          <MenuItem onClick={handleClose}>Inicio</MenuItem>
        </Link>

        <Link to='/acerca_de'>
          <MenuItem onClick={handleClose}>Acerca de</MenuItem>
        </Link>
        <Link to='/seleccionar_paises'>
          <MenuItem onClick={handleClose}>Países en gráfica</MenuItem>
        </Link>
        <Link to='/informacion_casos'>
          <MenuItem onClick={handleClose}>Información de casos</MenuItem>
        </Link>
        {
          userIsSignedIn?.length > 0
            ? <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
            : <Link to='/iniciar_sesion'>
              <MenuItem onClick={handleClose}>Iniciar sesión</MenuItem>
              </Link>
        }
      </Menu>
    </div>
  )
}

export default SimpleMenu
