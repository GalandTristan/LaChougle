module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "./src/font": "./font",
        "./src/styles": "./styles",
        "./src/img": "./img",
        "./src/favicon.ico": "./favicon.ico",
    });
    return {
        dir: {
            input: "src",
            output: "dist"
        },
        htmlTemplateEngine: "njk",
    }
};