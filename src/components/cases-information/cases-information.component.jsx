import React from 'react'
import {
  Card,
  CardContent,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core'
import SimpleMenu from '../menu/menu.component'
import { gql, useQuery } from '@apollo/client'
import { format } from 'date-fns'

const GET_CONTINENT_INFORMATION = gql`
  query GetContinentInformation($continent: String!) {
    getContinentInformation(continent: $continent) {
      cases
      todayCases
      deaths
      todayDeaths
      updated
    }
  }
`

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 5
  },
  menu: {
    paddingTop: 50
  },
  root: {
    minWidth: 275,
    marginTop: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20
  },
  information: {
    fontSize: 20,
    paddingLeft: 20,
    marginTop: 15
  },
  pos: {
    marginBottom: 12
  },
  containerCircularProgres: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30
  },
  continentContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

const ContinentInformation = (props) => {
  const { continent } = props
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_CONTINENT_INFORMATION, {
    variables: { continent }
  })

  const continentInformation = {
    Europe: {
      name: 'Europa',
      img: 'Europe.png'
    },
    Asia: {
      name: 'Asia',
      img: 'Asia.png'
    },
    Africa: {
      name: 'África',
      img: 'Africa.png'
    },
    'North America': {
      name: 'América del Norte',
      img: 'NorthAmerica.png'
    },
    'South America': {
      name: 'América del Sur',
      img: 'SouthAmerica.png'
    },
    'Australia-Oceania': {
      name: 'Oceanía',
      img: 'Oceania.png'
    }
  }

  const information = {
    cases: '',
    todayCases: '',
    deaths: '',
    todayDeaths: '',
    updated: null
  }

  if (data) {
    information.cases = data.getContinentInformation?.cases
    information.todayCases = data.getContinentInformation?.todayCases
    information.deaths = data.getContinentInformation?.deaths
    information.updated = format(new Date(+data.getContinentInformation?.updated), 'dd/MM/yyyy')
  }

  if (loading) {
    return (
      <Container className={classes.containerCircularProgres}>
        <CircularProgress />
      </Container>
    )
  }

  if (!data || error) {
    return null
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.continentContainer}>
          <div>
            <Typography className={classes.title} gutterBottom>
              {continentInformation[continent].name}
            </Typography>
            <Typography className={classes.information} gutterBottom>
              Fecha de actualización: {information.updated}
            </Typography>
            <Typography className={classes.information} gutterBottom>
              Total de casos: {information.cases}
            </Typography>
            <Typography className={classes.information} gutterBottom>
              Casos el día de hoy: {information.todayCases}
            </Typography>
            <Typography className={classes.information} gutterBottom>
              Total de personas fallecidas: {information.deaths}
            </Typography>
          </div>
          <div>
            <img alt='grafica' src={`img/${continentInformation[continent].img}`} className={classes.graphImage} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const CasesInformation = () => {
  const classes = useStyles()

  const [continent, setContinent] = React.useState('')

  const handleChange = (event) => {
    setContinent(event.target.value)
  }

  return (
    <>
      <Container className={classes.menu}>
        <SimpleMenu />
      </Container>
      <Container maxWidth='md' className={classes.container}>
        <Typography variant='h4' gutterBottom>
          Información de casos por continente
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id='continent-label'>Continente</InputLabel>
          <Select
            labelId='continent-label'
            id='continent'
            value={continent}
            onChange={handleChange}
          >
            <MenuItem value='North America'>América del Norte</MenuItem>
            <MenuItem value='South America'>América del Sur</MenuItem>
            <MenuItem value='Europe'>Europa</MenuItem>
            <MenuItem value='Asia'>Asia</MenuItem>
            <MenuItem value='Africa'>África</MenuItem>
            <MenuItem value='Australia-Oceania'>Oceanía</MenuItem>
          </Select>
          <FormHelperText>Selecciona el continente que desees para visualizar información</FormHelperText>
        </FormControl>
        {
          continent &&
            <ContinentInformation continent={continent} />
        }
      </Container>
    </>
  )
}

export default CasesInformation
