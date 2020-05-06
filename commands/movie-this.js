const inquirer = require("inquirer");
require("colors");
const axios = require("axios");
const KeyStore = require("../lib/KeyStore");
const rootUrl = "http://www.omdbapi.com/";

const requiredTrue = (input) => (input === "" ? "A title is required" : true);

const movieSearch = async () => {
  const keyStore = new KeyStore();
  const APIkey = await keyStore.getKey("OMDB");
  const input = await inquirer.prompt([
    {
      type: "input",
      message: "What movie would you like to search for?",
      name: "movieSearch",
      validate: requiredTrue,
    },
  ]);
  const queryURL = `${rootUrl}?apikey=${APIkey}&t=${input.movieSearch}`;
  const res = await axios.get(queryURL);
  const Rotten = res.data.Ratings.filter(
    (src) => src.Source === "Rotten Tomatoes"
  );
  let displayReturn = `\r\n ${res.data.Title.blue}
  \r\n ${res.data.Year}
  \r\n ${res.data.Rated}
  \r\n Rotten Tomatoes: ${Rotten[0].Value.red}
  \r\n Produced in: ${res.data.Country.blue}
  \r\n Languages: ${res.data.Language.yellow}
  \r\n Cast: ${res.data.Actors}
  \r\n Plot: ${res.data.Plot}
  `;
  console.log(displayReturn);
};

module.exports = { movieSearch };
