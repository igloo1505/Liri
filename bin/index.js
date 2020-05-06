#!/usr/bin/env node
const program = require("commander");
const jsonPackage = require("../package.json");
program
  .version(jsonPackage.version)
  .command("config", "Manage API configuration.")
  .command("concert-this", "See upcoming concerts for specified Artist.")
  .command("spotify-this", "Search spotify for song information")
  .command("movie-this", "Return movie details from OMDB")
  .command("do-what-it-says", "Randomly input stuff for no clear reason")
  .parse(process.argv);
