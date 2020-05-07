const Configstore = require("configstore");
const chalk = require("chalk");
const inquirer = require("inquirer");
require("colors");
var Spotify = require("node-spotify-api");
const jsonPackage = require("../package.json");

class KeyStore {
  constructor() {
    this.config = new Configstore(jsonPackage.name);
  }
  setKey(key, service) {
    console.log("reached setKey as ", key, service);
    this.config.set(`${service}`, key);
    return key;
  }
  getKey(service) {
    const key = this.config.get(service);
    if (!key) {
      return console.error(chalk.bgRed.blackBright("Oh no, there is no key"));
    } else if (key) {
      console.log(`${service}: ${key}`);
      return key;
    }
  }
  getSpotify() {
    const key = this.config.get("spotify");
    if (!key) {
      return console.log(
        "An api key is required. Try using: 'liri config -h'".red
      );
    }
    const spotify = new Spotify({
      id: key,
      secret: "3d9b73794c794ebea4e65856d2e09a8e",
    });
    return spotify;
  }
  async deleteKey() {
    const input = await inquirer.prompt([
      {
        type: "list",
        name: "service",
        message: "Delete the key for which service?",
        choices: ["OMDB", "spotify"],
      },
    ]);
    const key = this.config.get(input.service);
    console.log("key", key);
    if (!key) {
      return console.error(chalk.bgRed("Oh no, there is no key"));
    }
    this.config.delete(input.service);
    return;
  }
}
module.exports = KeyStore;
