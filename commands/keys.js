const inquirer = require("inquirer");
const colors = require("colors");
const KeyStore = require("../lib/KeyStore");

const requiredTrue = (input) => (input === "" ? "A key is required" : true);

const key = {
  async set() {
    const keyStore = new KeyStore();
    const input = await inquirer.prompt([
      {
        type: "list",
        name: "service",
        message: "set API key for which service?",
        choices: ["spotify", "OMDB"],
      },
    ]);
    const keyInput = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: `Enter ${input.service} key:`,
        validate: requiredTrue,
      },
    ]);
    const setKey = keyStore.setKey(keyInput.key, input.service);
    if (setKey) {
      console.log(`${input.service} API Key set`);
    }
  },
  async show() {
    const keyStore = new KeyStore();
    const input = await inquirer.prompt([
      {
        type: "list",
        name: "service",
        message: "Display key for which service?",
        choices: ["OMDB", "spotify"],
      },
    ]);
    const keyReturned = keyStore.getKey(input.service);
    return keyReturned;
  },
  remove() {
    const keyStore = new KeyStore();
    keyStore.deleteKey();
  },
};

module.exports = key;
