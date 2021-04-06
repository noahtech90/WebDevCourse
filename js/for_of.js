
function forOf() {
    const subreddits = ['nature', 'news', 'others'];

    for (let i = 0; i < subreddits.length; i++) {
        console.log(subreddits[i])
    }

    for (let sub of subreddits) {
        console.log(sub)
    }
}

const testScores = {
    keenan: 80,
    noah: 60,
    sarah: 70
}

for (let person in testScores) {
    console.log(person, testScores[person])
}
console.log(Object.keys(testScores))
let total = 0
for (let score of Object.values(testScores)) {
    console.log(score)
    total += score
}

let scores = Object.values(testScores).length

console.log(total / scores)