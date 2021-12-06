const sample_input = [3,4,3,1,2];
const puzzle_input = [2,5,5,3,2,2,5,1,4,5,2,1,5,5,1,2,3,3,4,1,4,1,4,4,2,1,5,5,3,5,4,3,4,1,5,4,1,5,5,5,4,3,1,2,1,5,1,4,4,1,4,1,3,1,1,1,3,1,1,2,1,3,1,1,1,2,3,5,5,3,2,3,3,2,2,1,3,1,3,1,5,5,1,2,3,2,1,1,2,1,2,1,2,2,1,3,5,4,3,3,2,2,3,1,4,2,2,1,3,4,5,4,2,5,4,1,2,1,3,5,3,3,5,4,1,1,5,2,4,4,1,2,2,5,5,3,1,2,4,3,3,1,4,2,5,1,5,1,2,1,1,1,1,3,5,5,1,5,5,1,2,2,1,2,1,2,1,2,1,4,5,1,2,4,3,3,3,1,5,3,2,2,1,4,2,4,2,3,2,5,1,5,1,1,1,3,1,1,3,5,4,2,5,3,2,2,1,4,5,1,3,2,5,1,2,1,4,1,5,5,1,2,2,1,2,4,5,3,3,1,4,4,3,1,4,2,4,4,3,4,1,4,5,3,1,4,2,2,3,4,4,4,1,4,3,1,3,4,5,1,5,4,4,4,5,5,5,2,1,3,4,3,2,5,3,1,3,2,2,3,1,4,5,3,5,5,3,2,3,1,2,5,2,1,3,1,1,1,5,1];

function dayPass(dataInput, days) {
    for (let i = 0; i < days; i++ ) {
        
        for (let j = dataInput.length-1; j >= 0; j--) {

            if(dataInput[j] === 0) {
                dataInput.push(8);
                dataInput[j] = 7;
            }

            dataInput[j]--;
        }
    }

    return dataInput;
}

function part1() {

    var fishes = dayPass(puzzle_input.slice(), 80);

    return fishes.length;
}
function part2() {
    var fishes = [];
    // fishes = dayPass(puzzle_input.slice(), 256);
    return fishes.length;
}

function getResults() {

    var ret = 
        "Part 1: " + part1() +  "<br>" + 
        "Part 2: " + part2() + "<br>" +
        ""; 

    return ret;
}

exports.getResults = getResults;