const program = require("commander");
const { concertThis } = require("../commands/concert-this");

program
  //   .command("concert-this")
  .description("Search for upcoming concerts")
  .action(() => concertThis());
//   .action(() => console.log("query concerts here"));

program.parse(process.argv);
