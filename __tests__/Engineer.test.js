const engineer = require('../lib/Engineer.js');


test('creates an engineer object', () => {
    const engineer = new Engineer('Sean');

    expect(engineer.name).toBe('Sean');
    expect(engineer.id).toBe(expect.any(Number));
    expect(engineer.email).toEqual(expect.any('smurphy@email.com'));
});

test('get engineer name', () => {
    const engineer = new Engineer('Sean', '24', 'smurphy@email.com');
    expect(engineer.getName()).toBe('Sean');
});

test('get engineer id', () => {
    const engineer = new Engineer('Sean', '24', 'smurphy@email.com'); // 24 because it is my favorite number 
    expect(engineer.getId()).toBe('24');
});

test('get engineer email', () => {
    const engineer = new Engineer('Sean', '24', 'smurphy@email.com');
    expect(engineer.getEmail()).toBe('smurphy@email.com');
});

// not sure if this one is nessessary but have to test reqardless
test('get engineer role', () => {
    const engineer = new Engineer('Sean', '24', 'smurphy@email.com');
    expect(engineer.getEmail()).toBe('engineer');
});