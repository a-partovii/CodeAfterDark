// Sample test cases (same as the question statement)
const testCases = [
    {
        n: 5,
        k: 3,
        villas: [
            [90, 50, 5],
            [50, 10, 1],
            [70, 30, 3],
            [80, 40, 4],
            [60, 20, 2],
        ],
    },
    {
        n: 4,
        k: 0,
        villas: [
            [40, 72, 7],
            [60, 21, 8],
            [20, 32, 3],
            [80, 39, 2],
        ],
    },
];

// Prints the selected villa number
testCases.forEach((test, idx) => {
    const totalPeople = test.k + 1; // k = friends count | 1 = Amin himself
    let bestIndex = 1;
    let bestCost = Infinity;

    test.villas.forEach(([a, b, x], i) => {
        const cost = totalPeople <= x ? a : a + (totalPeople - x) * b;
        if (cost < bestCost) {
            bestCost = cost;
            bestIndex = i + 1;
        }
    });

    console.log(`Sample output ${idx + 1}: ${bestIndex}`);
});
