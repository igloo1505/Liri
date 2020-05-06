const inquirer = require("inquirer");
require("colors");
const { randomized } = require("../random.js");
const { spotifySearch } = require("../commands/spotify-this-song");
const fs = require("fs");
const axios = require("axios");

const doWhatItSays = async () => {
  fs.readFile("random.txt", "utf8", (err, data) => {
    if (err) {
      console.error("error", err);
    }
    let randomFromRandomized = Math.floor(Math.random() * randomized.length);
    if (randomized[randomFromRandomized].key == "spotify-this") {
      console.log("randmizing...");
      spotifySearch(randomized[randomFromRandomized].term);
    }
  });
};

module.exports = { doWhatItSays };
