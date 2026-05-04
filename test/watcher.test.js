const { describe } = require('node:test')
const watcher = require('../src/watcher')


describe ("Watcher", () => {
    test('watcher is watching', () => {
        expect(watcher.watch(length)).toBe("idk");
    });

    test ('watcher is watching', () => {
        expect("watcher content").toBe("idk")
    });
});
