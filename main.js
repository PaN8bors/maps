function main() {
    const myPets = new Map();

    myPets.set('Saturn', 'hamster');
    myPets.set('Venus', 'hamster');
    myPets.set('Alex', 'dog');
    myPets.set('Emmary', 'cat');
    myPets.set('Shoeless Joe', 'dog');
    myPets.set('Tigger', 'cat');
    myPets.set('Thumper', 'bunny');
    myPets.set('Cooper', 'dog');

    myPets.forEach((type, name) => {
    console.log(`${name} is a ${type}`);
    });
}

main();