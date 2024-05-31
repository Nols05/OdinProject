const Ship = require("./Ship");

test('Ship should initialize with the correct length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
})