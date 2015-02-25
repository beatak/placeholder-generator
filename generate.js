'use strict';

var lorem = require('lorem-ipsum');
var LOREM_DEFAULT_OPT = {
    count: 1,               // Number of words, sentences, or paragraphs to generate.
    units: 'sentences',     // Generate words, sentences, or paragraphs.
    sentenceLowerBound: 5,  // Minimum words per sentence.
    sentenceUpperBound: 15, // Maximum words per sentence.
    paragraphLowerBound: 3, // Minimum sentences per paragraph.
    paragraphUpperBound: 7, // Maximum sentences per paragraph.
    format: 'plain'         // Plain text or html
};

module.exports = function (length) {
    var parag, diff,
        count = 0,
        result = [];
    
    do {
        parag = lorem(LOREM_DEFAULT_OPT);
        result.push(parag);
        count += parag.length + 1;
    } while (length > count);

    diff = count - length;
    parag = parag.substring(0, parag.length - diff);
    parag = parag.substring(0, parag.lastIndexOf(' '));
    parag = parag + '.';
    result[result.length - 1] = parag;

    return result.join(' ');
};
