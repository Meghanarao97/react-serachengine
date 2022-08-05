import React from "react";
import "./App.css";
import CountryName from "../../react-coutry/src/CountryName/country";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      searchValue: "",
      countries: [],
      filteredCountries: [],
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          countries: data,
        });
      });
  }

  onChange = (e) => {
    this.setState({ ...this.state, searchValue: e.target.value });
    const filtered = this.state.countries.filter((country) => {
      return country.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      ...this.state,
      filteredCountries: filtered,
      searchValue: e.target.value,
    });
  };

  render() {
    const { countries, searchValue, filteredCountries } = this.state;
    const data = searchValue ? filteredCountries : countries;
    if (countries.length === 0) {
      return <div>Loading countries data..</div>;
    } else {
      return (
        <div className="App">
          {/* <CountryName /> */}
          <input
            className="box"
            type="text"
            value={this.state.searchValue}
            placeholder="Search for country....."
            onChange={this.onChange}
          ></input>
          {searchValue.length && filteredCountries.length === 0 ? (
            <div>No countries found</div>
          ) : (
            data.map((country, index) => (
              <CountryName
                key={country.name}
                name={country.name}
                code={country.alpha2Code}
                code1={country.alpha3Code}
                capital={country.capital}
                area={country.area}
                image={country.flag}
                region={country.region}
              />
            ))
          )}
        </div>
      );
    }
  }
}

export default App;
