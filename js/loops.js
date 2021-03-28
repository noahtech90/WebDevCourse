const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < i; j++) {
        console.log(animals[i], j)
    }
}