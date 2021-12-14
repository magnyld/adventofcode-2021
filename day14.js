const sample_data = `
NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C
`;

const puzzle_data = `
OHFNNCKCVOBHSSHONBNF

SV -> O
KP -> H
FP -> B
VP -> V
KN -> S
KS -> O
SB -> K
BS -> K
OF -> O
ON -> S
VS -> F
CK -> C
FB -> K
CH -> K
HS -> H
PO -> F
NP -> N
FH -> C
FO -> O
FF -> C
CO -> K
NB -> V
PP -> S
BB -> N
HH -> B
KK -> H
OP -> K
OS -> V
KV -> F
VH -> F
OB -> S
CN -> H
SF -> K
SN -> P
NF -> H
HB -> V
VC -> S
PS -> P
NK -> B
CV -> P
BC -> S
NH -> K
FN -> P
SH -> F
FK -> P
CS -> O
VV -> H
OC -> F
CC -> N
HK -> N
FS -> P
VF -> B
SS -> V
PV -> V
BF -> V
OV -> C
HO -> F
NC -> F
BN -> F
HC -> N
KO -> P
KH -> F
BV -> S
SK -> F
SC -> F
VN -> V
VB -> V
BH -> O
CP -> K
PK -> K
PB -> K
FV -> S
HN -> K
PH -> B
VK -> B
PC -> H
BO -> H
SP -> V
NS -> B
OH -> N
KC -> H
HV -> F
HF -> B
HP -> S
CB -> P
PN -> S
BK -> K
PF -> N
SO -> P
CF -> B
VO -> C
OO -> K
FC -> F
NV -> F
OK -> K
NN -> O
NO -> O
BP -> O
KB -> O
KF -> O
`;


function parseData(indata) {

    let parts = indata.trim().split("\n\n");

    return {
        template: parts[0].split(''),
        data: parts[1].trim().split("\n").reduce((p, v) => {

            let fromTo = v.split(" -> ");

            p.push({
                from: fromTo[0].split(''), 
                to: fromTo[1], 
            });

            return p;
        }, [])
    };
}

function parseData2(indata) {

    let parts = indata.trim().split("\n\n");

    return {
        template: parts[0],
        data: parts[1].trim().split("\n").reduce((p, v) => {

            let fromTo = v.split(" -> "),
                toPart = fromTo[0].split('');
            p.push({
                from: new RegExp(fromTo[0], 'g'), 
                to:  toPart[0] + '-' + fromTo[1] + '-' + toPart[1] , 
            });

            return p;
        }, [])
    };
}

function parseData3(indata) {

    let parts = indata.trim().split("\n\n");

    return {
        template: parts[0].split(''),
        data: parts[1].trim().split("\n").reduce((p, v) => {

            let fromTo = v.split(" -> ");

            p[fromTo[0]] = {
                to: [
                    fromTo[0][0] + fromTo[1], 
                    fromTo[1] + fromTo[0][1]
                ],
                count: 0,
                step_count: 0
            };

            return p;
        }, {})
    };
}

function doStep(template, input) {

    for (let i = template.length - 1; i > 0; i--) {

        let first = template[i-1],
            last = template[i];

        input.data.forEach(entry => { 
            if (entry.from[0] == first && entry.from[1] == last) {
                
                template.splice(i, 0, entry.to);
            }
        });
    }
    return template;
}

function countOccurences(template) {
    return template.reduce((r,k)=> {
        r[k] = 1+r[k] || 1;
        return r;
    }, {});
}

function getMaxMin(template) {

    let occ = countOccurences(template),
        min = Number.MAX_VALUE,
        max = 0;

    Object.keys(occ).forEach(char => {
        max = Math.max(max, occ[char]);
        min = Math.min(min, occ[char]);
    });

    return {
        min: min,
        max: max
    }
}

function part1(inData) {

    let input = parseData(inData),
        minMax;

       
    let template = input.template;

    for (let i = 0; i < 10; i++) {
        template = doStep(template, input);
    }

    minMax = getMaxMin(template);


    return minMax.max - minMax.min;
}


function part1_regexp(inData) {

    let input = parseData2(inData),
        minMax,
        replaceDash = new RegExp('-', 'g');

    console.log(input);

    let template = input.template;

    for (let i = 0; i < 10; i++) {

        input.data.forEach(rep => {
            template = template.replace(rep.from, rep.to);
            template = template.replace(rep.from, rep.to);
        });

        template = template.replace(replaceDash, '');

    }

    minMax = getMaxMin(template.split(''));

    return minMax.max - minMax.min;
}


function doStep2(template, input) {

    for (let i = template.length - 1; i > 0; i--) {

        let first = template[i-1],
            last = template[i];

        input.data.forEach(entry => { 
            if (entry.from[0] == first && entry.from[1] == last) {
                
                template.splice(i, 0, entry.to);
            }
        });
    }
    return template;
}


function addPart(data, part, step_count) {

    data[part].count += step_count;

}


function resetCount(data) {

    Object.keys(data).forEach(part => {
        data[part].step_count = data[part].count;
        data[part].count = 0;
    });

}


function countChars(data) {

    let ret = {};

    Object.keys(data).forEach(part => {
        part.split('').forEach(char => {
            if (ret[char] === undefined) {
                ret[char] = 0;
            }
            ret[char] += data[part].count;
            
        });
    });

    return ret;
}


function getMaxMinPart2(charCounts) {

    let min = Number.MAX_VALUE,
        max = 0;

    Object.keys(charCounts).forEach(charCount => {
        max = Math.max(max, charCounts[charCount]);
        min = Math.min(min, charCounts[charCount]);
    });

    return {
        min: Math.round(min / 2),
        max: Math.round(max / 2)
    }
}

function part2(inData) {

    let input = parseData3(inData),
        maxMin;

   
    let data = input.data;


    for (let i = 0; i < input.template.length - 1; i++) {        
        let part = input.template[i] + input.template[i+1];
        addPart(data, part, 1);
    } 
    
    
    for (let i = 0; i < 40; i++) {
        
        resetCount(data);

        Object.keys(data).forEach(part => {

            if(data[part].step_count > 0) {
                addPart(data, data[part].to[0], data[part].step_count);
                addPart(data, data[part].to[1], data[part].step_count);

                data[part].step_count = 0;
            }

        });

    }

    maxMin = getMaxMinPart2(countChars(data));

    return maxMin.max - maxMin.min;
}




function getResults() {

    var ret = 
        "Part 1: " + part1(puzzle_data) +  "<br>" + 
        "Part 2: " + part2(puzzle_data) + "<br>" +
        ""; 

    return ret;

}

exports.getResults = getResults;