const person = {
    totalSteps: 20000,
    totalMiles: 211.7,
    avgCalorieBurn: 2000
};

const road = {
    length: 10,
    person: false
};

if (person.totalMiles < 1000) {
    road.person = true
}

console.log(road)


