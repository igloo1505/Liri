const program = require("commander");
const { movieSearch } = require("../commands/movie-this");

program.description("Search OMDB for movie details.").action(() => {
  movieSearch();
});

program.parse(process.argv);
