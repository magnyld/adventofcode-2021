const sample_data = `
5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526
`;

const puzzle_data = `
2238518614
4552388553
2562121143
2666685337
7575518784
3572534871
8411718283
7742668385
1235133231
2546165345
`;

function parseData(indata) {
    return indata.trim().split("\n").reduce((p, v) => {
        p.push(v.split("").map(n => parseInt(n, 10)));
        return p;
    }, []);
}

function part1(input) {

    let data = parseData(input);
        
    console.log(data);
    
    return 0;
}

function part2(input) {

    let data = parseData(input);
    
    return 0;
}

function getResults() {

    var ret = 
        "Part 1: " + part1(sample_data) +  "<br>" + 
        "Part 2: " + part2(sample_data) +  "<br>" + 
        "";
    return ret;
}

exports.getResults = getResults;