const axios = require('axios')
const { conn } = require('../db');
const { Country, Activity } = conn.models;
const COUNTRIES_API = 'https://restcountries.com/v3/all'

async function getAllCountries() {
  try {
    const response = await axios.get(COUNTRIES_API);
    const allCountries = response.data.map(country => ({
      id: country.cca3,
      name: country.name.common,
      flag: country.flags[0],
      region: country.region,
      capital: country.capital ? country.capital[0] : 'Not specified',
      subregion: country.subregion,
      area: country.area,
      population: country.population,
      activities: [{
        name: "Ski",
        difficulty: 1,
        duration: 5,
        season: "invierno"
      }]
    }))
    return allCountries
  } catch (error) {
    console.error(error);
  }
}

const seedDatabase = async () => {
  const countries = await getAllCountries()
  await Country.bulkCreate([countries[0], countries[1]], {
    include: [Activity]
  })
}

module.exports = {
  seedDatabase
}
