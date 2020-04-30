const Configstore = require("configstore");
const chalk = require("chalk");
const jsonPackage = require("../package.json");

class Keys {
  constructor() {
    this.conf = new Configstore(jsonPackage.name);
  }

  setKey(key) {
    this.conf.set("APIKey", key);
    return key;
  }
  getKey() {
    const key = this.conf.get("APIKey");
    if (!key) {
      return console.error(chalk.bgRed("Oh no, there is no key"));
    }
    return key;
  }
  deleteKey() {
    const key = this.conf.get("APIKey");
    if (!key) {
      return console.error(chalk.bgRed("Oh no, there is no key"));
    }
    this.conf.delete("APIKey");
    return;
  }
}
module.exports = Keys;
