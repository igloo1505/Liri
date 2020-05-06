const inquirer = require("inquirer");
require("colors");
var moment = require("moment");

const axios = require("axios");
const rootUrl = "https://rest.bandsintown.com/artists/";
const closeUrl = "/events?app_id=codingbootcamp";

const concertThis = async () => {
  try {
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "artist",
        message: "Who would like concert information regarding?",
      },
    ]);
    const res = await axios.get(`${rootUrl}${input.artist}${closeUrl}`);

    if (res.data.length > 0) {
      return res.data.forEach((d) =>
        console.log(
          `${d.venue.name.blue}\r\n ${d.venue.location.red}\r\n ${moment(
            d.datetime
          ).format("MMMM Do YYYY")} \r\n`
        )
      );
    } else if (res.data.length == 0) {
      return console.log(
        `\r\n It doesn't look like ${input.artist} has any shows coming up...\r\n`
          .red
      );
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { concertThis };
