const seatingChart = [
    ['Mark', 'Eric', 'Candance'],
    ['Sarah', 'Tony', 'Becaa']
]

for (i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]
    console.log(`Row ${i} `)
    for (j = 0; j < row.length; j++) {
        console.log(`Person ${row[j]} `)
    }
}

count = 0;
while (count <= 10) {
    console.log(count);
    count++;
}