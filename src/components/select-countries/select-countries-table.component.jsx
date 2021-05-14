import React from 'react'
import { withStyles, makeStyles, Button, Container, TextField, Typography } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Alert } from '@material-ui/lab'
// import Typography from '@material-ui/core/Typography';

const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#000A77',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      // backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50
  },
  table: {
    minWidth: 700
  },
  circularProgress: {
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  info: {
    marginBottom: 10
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const SelectCountriesTable = (props) => {
  const { data, userIsSignedIn } = props

  // console.log(data)
  const classes = useStyles()
  const rows = data || []

  if (rows.length === 0) {
    return (
      <div className={classes.circularProgress}>
        <CircularProgress />
      </div>
    )
  }
  // console.log(rows)
  return (
  // <Container maxWidth='md' className={classes.container}>
    <>
      <div className={classes.titleContainer}>
        <Typography variant='h4' gutterBottom>
          Países mostrados en gráfica
        </Typography>
      </div>
      {
        !userIsSignedIn &&
          <div className={classes.info}>
            <Alert severity='info'>
              Inicia sesión como administrador para mostrar u ocultar países en la gráfica
            </Alert>
          </div>
      }
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align='center'>País</StyledTableCell>
              <StyledTableCell align='center'>Mostrar / Ocultar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component='th' scope='row'>
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.name}</StyledTableCell>
                <StyledTableCell align='center'>
                  {
                    // userIsSignedIn
                      row.active === true
                        ? <Button color='secondary' disabled={!userIsSignedIn}>Ocultar</Button>
                        : <Button color='primary' disabled={!userIsSignedIn}>Mostrar</Button>
                      // : 'Inicia sesión para mostrar u ocultar'
                  }
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  // </Container>
  )
}

export default SelectCountriesTable
