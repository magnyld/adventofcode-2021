const util = require('util');

const sample_data_small = `
11111
19991
19191
19991
11111
`;


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

function doIncrease(data, y, x) {
    
    if(data[y] === undefined || data[y][x] === undefined) {
        return;
    }
    if (data[y][x] < 10) {
        data[y][x]++;
    }
}


function increaseNeighbours(data, y, x) {

    doIncrease(data, y-1, x); // up
    doIncrease(data, y+1, x); // down
    doIncrease(data, y, x-1); // left
    doIncrease(data, y, x+1); // right
    doIncrease(data, y-1, x-1); // up left
    doIncrease(data, y-1, x+1); // up right
    doIncrease(data, y+1, x-1); // down left
    doIncrease(data, y+1, x+1); // down right
}

function increaseEnergy(data) {

    for (let y = 0; y < data.length; y++) {
        
        for(let x = 0; x < data[y].length; x++) {
            data[y][x]++;
        }
    }
}

function doFlash(data) {
    let flashed = false;
    for (let y = 0; y < data.length; y++) {
        
        for(let x = 0; x < data[y].length; x++) {
        
            if (data[y][x] === 10) {
                data[y][x]++; // exclude from next run
                increaseNeighbours(data, y, x);

                return true;
            }             
        }
    }

    return flashed;
}

function clearFlashed(data) {
    for (let y = 0; y < data.length; y++) {
        
        for(let x = 0; x < data[y].length; x++) {
        
            if (data[y][x] > 9) {
                data[y][x] = 0;                
            }
        }
    }
}

function dump(data) {
    console.log(util.inspect(data, { compact: true,breakLength: data.length+20}));
}

function part(input) {

    let data = parseData(input),
        totalFlashes = 0,
        roundAllFlashes = false;
        

    //console.log("After step: " + (0));
    //dump(data);

    for (let i = 0; i < 500; i++) {
    //    console.log("After step: " + (i + 1));
        let flashes = 0;
        increaseEnergy(data);
    
        while(doFlash(data)) {
            flashes++;
        }

        if (!roundAllFlashes && (data.length * data[0].length) === flashes) {
            roundAllFlashes = i + 1;
        }        
        
        if (i < 100) {
            totalFlashes += flashes;
        }

        clearFlashed(data);
        //dump(data);
        
    }
    
    return {totalFlashes: totalFlashes, roundAllFlashes: roundAllFlashes};
}

function getResults() {

    var ret = 
        "Part 1: " + part(puzzle_data).totalFlashes +  "<br>" + 
        "Part 2: " + part(puzzle_data).roundAllFlashes +  "<br>" + 
        "";
    return ret;
}

exports.getResults = getResults;