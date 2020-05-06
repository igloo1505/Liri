const program = require("commander");
const key = require("../commands/keys");

program.command("set").description("set API key for spotify").action(key.set);

program
  .command("show")
  .description("Show API key for spotify")
  .action(key.show);

program
  .command("remove")
  .description("remove API key for spotify")
  .action(key.remove);

program.parse(process.argv);
