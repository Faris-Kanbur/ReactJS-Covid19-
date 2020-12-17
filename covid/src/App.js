import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

import covidLogo from "./covid-19.svg"

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <img src={covidLogo} alt="Covid19 Logo" style={{height:150, width: 150 , marginTop: 25 }}/>

        </Grid>
       
      </Container>
    </React.Fragment>
  )
}

export default App
