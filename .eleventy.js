const rmj = require('render-markdown-js')

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk,html,md");
    
    eleventyConfig.addPassthroughCopy('src');
    eleventyConfig.addPassthroughCopy('admin');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('images');
    

    eleventyConfig.addNunjucksFilter("rmj", function(content) {
        return rmj(content);
    });

    eleventyConfig.addNunjucksFilter("limit", function (array, limit) {
        return array.slice(0, limit);
    });

    eleventyConfig.addFilter("sortAlphabetically", collection => {
        return collection.sort((a, b) => {
            const titleA = a.data.title || '';
            const titleB = b.data.title || '';
    
            // Función de comparación que tiene en cuenta números
            const compareFunction = (strA, strB) => {
                const numA = parseFloat(strA);
                const numB = parseFloat(strB);
    
                // Si ambos son números, compáralos numéricamente
                if (!isNaN(numA) && !isNaN(numB)) {
                    return numA - numB;
                }
    
                // Si al menos uno no es un número, usa localeCompare para ordenar alfabéticamente
                return strA.localeCompare(strB);
            };
    
            return compareFunction(titleA, titleB);
        });
    });
}
