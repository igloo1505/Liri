const program = require("commander");
const { doWhatItSays } = require("../commands/do-what-it-says");
const fs = require("fs");

program
  //   .command("concert-this")
  .description("Randomly search stuff")
  .action(() => doWhatItSays());

program.parse(process.argv);
