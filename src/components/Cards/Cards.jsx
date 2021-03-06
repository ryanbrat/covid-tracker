import React from "react"
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if(!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="infected card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Number of Cases</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2} seperator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString( )}</Typography>
            <Typography variant="body2">Number of Covid-19 cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="recovered card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={recovered.value} duration={2} seperator="," />
              </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString( )}</Typography>
            <Typography variant="body2">Number of Covid-19 recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="deaths card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={deaths.value} duration={2} seperator="," />
              </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString( )}</Typography>
            <Typography variant="body2">Number of Covid-19 deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
