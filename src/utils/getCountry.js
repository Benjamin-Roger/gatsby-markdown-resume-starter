import config from 'config';

const { countriesArray } = config;

export function getCountry(code) {

  return countriesArray.filter((country) => country.id === code)[0];
}
