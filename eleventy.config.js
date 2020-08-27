const handlebarsDateformat = require('handlebars-dateformat');
const handlebarsHelpers = require('handlebars-helpers');

function config(config) {
  config.addPassthroughCopy({ "src/assets/images": "images" });
  config.addPassthroughCopy({ "src/assets/video": "video" });
  config.addPassthroughCopy({ "src/assets/fonts": "fonts" });
  config.addPassthroughCopy({ "src/assets/meta": "/" });
  config.addPassthroughCopy({ "src/assets/stylesheets": "/" });
  config.addPassthroughCopy({ "src/views/**/*.jpg": "images" });

  config.addHandlebarsShortcode("dateFormat", handlebarsDateformat);
  config.addHandlebarsShortcode("reverse", handlebarsHelpers.array().reverse);
  config.setUseGitIgnore(false);

  return {
    dir: {
      input: "./src/views",
      output: "./dist",
      includes: "../components",
      layouts: "../layouts",
      data: "../data",
    },
    passthroughFileCopy: true,
    templateFormats: ["md", "hbs", "liquid"]
  };
};

module.exports = config;
