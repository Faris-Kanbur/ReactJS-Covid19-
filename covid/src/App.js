import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { fetchCountries } from "./components/api";
import covidLogo from "./covid-19.svg";
import AreaChart from "./components/AreaChart";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "50px auto",
    minWidth: "40%",
  }
}));

const App = () => {
  const classes = useStyles();

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("turkey");

  useEffect(() => {
    const fetchCountriesData = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    };
    fetchCountriesData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <img
            src={covidLogo}
            alt="Covid19 Logo"
            style={{ height: 120, width: 120, marginTop: 25 }}
          />

          <FormControl className={classes.formControl}>
            <Select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
             {
               countries.map(country => (
                <MenuItem value={country.Slug}>{country.Country}</MenuItem>
               ))
             }
            </Select>
          </FormControl>

            <Grid item xs={12}>
              <Paper>
                <AreaChart country={country} />
              </Paper>
            </Grid>

        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
