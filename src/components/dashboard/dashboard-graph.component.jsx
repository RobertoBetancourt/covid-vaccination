import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import { ResponsiveLine } from '@nivo/line'
// import { boolean } from '@storybook/addon-knobs'

const useStyles = makeStyles({
  container: {
    marginTop: 50
  },
  title: {
    textAlign: 'center'
  }
})

const isMainCountry = (countryToSearch) => {
  const mainCountries = ['Saudi Arabia', 'Brazil', 'China', 'France', 'Japan', 'South Africa', 'Australia', 'Canada', 'India', 'Italy', 'Argentina', 'Mexico', 'United Kingdom', 'United States', 'South Korea', 'Turkey']
  console.log(countryToSearch)
  if (mainCountries.includes(countryToSearch)) {
    return true
  } else {
    return false
  }
}

const MyResponsiveLine = ({ data }) => {
  const newData = []

  for (let i = 0; i < data.length; i++) {
    if (isMainCountry(data[i].country)) {
      const tempData = []
      let tempObj = {}
      let tempDataObj = {}

      for (let j = 0; j < data[i].data.length; j++) {
        if (typeof data[i].data[j].people_vaccinated !== 'undefined') {
          tempDataObj = {
            x: data[i].data[j].date,
            y: data[i].data[j].people_vaccinated
          }

          tempData.push(tempDataObj)
        }
      }

      tempObj = {
        id: data[i].country,
        data: tempData
      }

      newData.push(tempObj)
    }
  }

  return (
    <div style={{ height: 600 }} className='App'>
      <ResponsiveLine
        data={newData}
        margin={{ top: 20, right: 120, bottom: 100, left: 90 }}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d'
        }}
        xFormat='time:%Y-%m-%d'
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false
        }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'No. de personas vacunadas',
          legendOffset: -80,
          legendPosition: 'middle'
        }}
        axisBottom={{
          format: '%b %d',
          // tickValues: "every 2 days",
          // tickRotation: -90,
          legend: 'Fecha',
          legendOffset: 40
        }}
        colors={{ scheme: 'set1' }}
        pointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel='y'
        pointLabelYOffset={-12}
        useMesh
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

const DashboardGraph = () => {
  const classes = useStyles()
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // The empty deps array [] means this useEffect will run once, similar to componentDidMount()
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json')
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result)
          setIsLoaded(true)
        },
        // Note: it is important to handle errors here
        // and not in a catch() block so that we do not
        // intercept errors from real errors in the components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  return (
    <Container width='md' className={classes.container}>
      <Typography variant='h4' className={classes.title}>
        Número de personas vacunadas por país
      </Typography>
      {
        isLoaded && !error &&
          <MyResponsiveLine data={items} />
      }
    </Container>
  )
}

export default DashboardGraph
