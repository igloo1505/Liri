#!/usr/bin/env node
const program = require("commander");
const jsonPackage = require("../package.json");
program
  .version(jsonPackage.version)
  .command("key", "Manage API key")
  .parse(process.argv);
