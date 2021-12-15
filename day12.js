const sample_data = `
start-A
start-b
A-c
A-b
b-d
A-end
b-end
`;

const puzzle_data = `
ey-dv
AL-ms
ey-lx
zw-YT
hm-zw
start-YT
start-ms
dv-YT
hm-ms
end-ey
AL-ey
end-hm
rh-hm
dv-ms
AL-dv
ey-SP
hm-lx
dv-start
end-lx
zw-AL
hm-AL
lx-zw
ey-zw
zw-dv
YT-ms
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