const program = require("commander");
const { spotifySearch } = require("../commands/spotify-this-song");

program
  //   .command("concert-this")
  .description("Search for upcoming concerts")
  .action(() => spotifySearch());

program.parse(process.argv);
