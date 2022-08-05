import React from "react";

function CountryName(props) {
  const { code, name, capital, code1, area, image, region } = props;
  return (
    <div className="CountryName">
      <h5>name: {name}</h5>
      <img className="myImage" src={image} />
      <div className="CountryName-alpha2Code">shortcut: {code}</div>
      <div className="CountryName-alpha3Code">abbreviation: {code1}</div>
      <div className="CountryName-capital">capital: {capital}</div>
      <div className="CountryName-area">area: {area}</div>
      <div className="CountryName-region">region: {region}</div>
    </div>
  );
}
export default CountryName;
