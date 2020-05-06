const inquirer = require("inquirer");
require("colors");
const KeyStore = require("../lib/KeyStore");

const keyStore = new KeyStore();
const spotifySearch = async (term) => {
  try {
    const spotify = keyStore.getSpotify();
    if (spotify === undefined) {
      return;
    }
    let input = "";
    if (term) {
      input = term;
    } else if (!term) {
      input = await inquirer.prompt([
        {
          type: "input",
          name: "searchTerm",
          message: "What song would you like information on?",
        },
      ]);
      input = input.searchTerm;
    }
    await spotify.search({ type: "track", query: input }, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        data.tracks.items.forEach((d) =>
          console.log(
            `\r\n${JSON.stringify(d.album.artists[0].name).blue} \r\n ${
              d.name
            } \r\n\ View on Spotify: ${d.external_urls.spotify.red} \r\n`
          )
        );
      }
    });
  } catch (error) {
    console.error(error);
  }
};

// spotify.search(
//   { type: "track", query: "All the Small Things" },
//   (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(data);
//     }
//   }
// );

module.exports = { spotifySearch };
