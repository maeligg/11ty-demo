module.exports = function(eleventyConfig) {
    // The following copies to `_site/img`
    eleventyConfig.addPassthroughCopy("img");
};