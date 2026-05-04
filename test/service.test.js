const { describe } = require('node:test')
const service = require('../src/service')

// tests to make sure the directories (output, processed, and watched) exist
describe ("Service", () => {
    test('watched directory exists', () => {
        expect(service).toBe("idk");
    });

    test ('output directory exists', () => {
        expect(service).toBe("idk")
    });
});