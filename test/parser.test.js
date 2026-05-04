const { describe } = require('node:test')
const parser = require('../src/parser')

// tests the parser file to make sure the .csv information is parser into an 
// output json object
// and processed file

describe ("Parser", () => {
    test('output file should be .json', () => {
        expect(parser.setOutput(parser.output).file(basename)).toBe(".json");
    });

    test ('assert output file has same information as the .csv file', () => {
        expect(parser.setOutput(parser.output).file[0]).toBe("FirstName");
    });
});