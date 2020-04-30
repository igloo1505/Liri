const inquirer = require("inquirer");
const colors = require("colors");
const Keys = require("../lib/Keys");

const key = {
  async set() {
    // console.log("setting here");
    const keys = new Keys();
    const input = inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter Spotify API key".green,
      },
    ]);
  },
  show() {
    console.log("Show here");
  },
  remove() {
    console.log("Remove here");
  },
};

module.exports = key;
