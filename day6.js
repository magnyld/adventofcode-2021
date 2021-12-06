const sample_input = [3,4,3,1,2];
const puzzle_input = [2,5,5,3,2,2,5,1,4,5,2,1,5,5,1,2,3,3,4,1,4,1,4,4,2,1,5,5,3,5,4,3,4,1,5,4,1,5,5,5,4,3,1,2,1,5,1,4,4,1,4,1,3,1,1,1,3,1,1,2,1,3,1,1,1,2,3,5,5,3,2,3,3,2,2,1,3,1,3,1,5,5,1,2,3,2,1,1,2,1,2,1,2,2,1,3,5,4,3,3,2,2,3,1,4,2,2,1,3,4,5,4,2,5,4,1,2,1,3,5,3,3,5,4,1,1,5,2,4,4,1,2,2,5,5,3,1,2,4,3,3,1,4,2,5,1,5,1,2,1,1,1,1,3,5,5,1,5,5,1,2,2,1,2,1,2,1,2,1,4,5,1,2,4,3,3,3,1,5,3,2,2,1,4,2,4,2,3,2,5,1,5,1,1,1,3,1,1,3,5,4,2,5,3,2,2,1,4,5,1,3,2,5,1,2,1,4,1,5,5,1,2,2,1,2,4,5,3,3,1,4,4,3,1,4,2,4,4,3,4,1,4,5,3,1,4,2,2,3,4,4,4,1,4,3,1,3,4,5,1,5,4,4,4,5,5,5,2,1,3,4,3,2,5,3,1,3,2,2,3,1,4,5,3,5,5,3,2,3,1,2,5,2,1,3,1,1,1,5,1];

function populateFromModel(input) {
    let model = [0,0,0,0,0,0,0,0,0];

    input.forEach(n => model[n]++);

    return model;
}

function arraySum(myArray) {
    return myArray.reduce((a, b) => a + b, 0);
}

function dayPass2(dataInput, days) {

    let days_lived = populateFromModel(dataInput);
    
    for (let i = 0; i < days; i++) {
        let day0 = days_lived.shift();        
        days_lived[6] += day0;
        days_lived.push(day0);
    }

    return days_lived;
}

function part1() {
    let fishes = dayPass2(puzzle_input, 80);
    return arraySum(fishes);
}

function part2() {
    let fishes = dayPass2(puzzle_input, 256);
    return arraySum(fishes);
}

function getResults() {

    var ret = 
        "Part 1: " + part1() +  "<br>" + 
        "Part 2: " + part2() + "<br>" +
        ""; 

    return ret;
}

exports.getResults = getResults;