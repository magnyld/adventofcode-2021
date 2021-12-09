const sample_data = `
2199943210
3987894921
9856789892
8767896789
9899965678
`;

const puzzle_data = `
6587893456954341398543210234567899875421012578932123459998764323569999996432345899989359878998654345
5476894579873210197654328757678910976532323457891012398997653212998798789521256789879498764679795456
5345679989864321349865479869799929987643498598932923987989543209876697654320145679965987653567989767
3235678999965443567976567878999898997654587678949899876878994319965498765421236789764398532479879878
0124789339897764678987878989998767898986798989298798765756989498754349899535456899879987691298568989
1235693219799865889698989990987856789997899592139679984445678987643237998646567890998698989987457899
2348789398678976789569999921976745678998985431095459873234569998765145689987899932349579768976567978
4567899976599989895478999899875435899359876545984398765145678999843234567898976543998498657697798964
7688999875487899976789298767986546789999988769873239876234567892954345678909997659876597646579899543
9799998764325578987899109654397967999879999898764346984345678921986456789319889799989986534466989542
9989879875413467998998923993239878998758999969975899876476789210987567895498779989992395421355678954
9876569974324678959987899889101989987646489459896789976567894321297678976987667879893987510134569999
8765498765456899769996798767992493499832367999789893987678965456998989989876546758789997921235678988
9874349876567998998965689656789569989753458987678962398989879599879799992965434345678986437367889876
8765456987678987987654678945679678979768667896569541239899998989965678901977321237899876545459993998
9876567898789996796543489939798989764979778965499432345789997879974589919898934348901997668567892109
9987998999896789899755569898987897653989899012378945497899965467893469898789895459919898877679954919
9898919789965678989876798767346789762399943234569767989999854359932599787698789667899769989789899897
8759105679654569878998899856235999321239854355878979879998765567893987654589678978998953599896798786
6543214598979698968899999843123568910198765467989998767899976779964599643279567899687892498945697655
7954323497898966556789987654013467892499976589099987756789987889995798732153456789576931987432398543
9899435986577942347896598732123458999987899693239865347991298999989987643012348894345899876541239432
8798949765456891238965439653234567898976798789399876456789459999879876532145457896876789987832396543
7686799887347920145976549878347698987755679899989986567897667898965987674234668999987895498743987965
6595789998967891247897656989498999876544587999879987678998778987864398765545979998998989359654599876
5434678999298932346789767896569098987623456796567898989539899876543219876656897987889874298765678987
4323576789399543456789978998789197898212345679335679999421921988754301998767986576569763189896789198
3212345789987676577899899239899976789853458789124679878999890199865492999878975432478952076999893239
4523456897898787689998789129998765698767569991012399865788799345987989899989896543578943145698994345
5635567896789898799029569098899987999878978962193987654647678976799878799998798654567899239987989469
8756678935978999898998678987799999899989989643989996543234567897898968678987698785678998998795878978
9897889123467893967899789876678999768393498959878989654346778998987654567896539876789457789654769899
6998993234679932456999899865589996543212347898765578995487899989998785678974323987992345678943456797
4349965345789531345799987643499987664324456987654456789598999878999876789865434598943567889752589895
6459876459999910239898798101989198976535967899532345678949988767899989899989545999759878997643569994
9878987767899891398989543219879239987649898998721235789039879857999994978998769899998989498957698989
7999999878986789997679654598768945798959799987632345892129967234678943567899898798767894329878987978
6989987989345679896598995987654999899898679876543566943298654123487892389989987657656789210989876569
5978996591236798789456789998743878998786567987664689954679942012456799459876799543234568921298975497
9769889432445987679345699865432459987675478998785799895799842123867898967995698432123556932967964326
8958778956759876531256789987543579876564367899896895789998763435798957899854597543012345899859873214
7643568997969765430347893987654678976444259899987924556799878976899645798643498632124556789645995403
8532456789879876321346932398767889987320145789699012345679989987896536899854987653246787896539876912
7421345678989985442457893599898994598321237894556923966889999998998745698765698764345678954321989893
6530496989498996584668999989999213469644345892349899897899999879799656789876789875456799987553598789
7699989892397987676789998979992101278955456789498756789999898765688979897987894989667976599679699667
8987979789986599987899887968989232349866667899976546689998765544567899956598923499878987698798986545
9976867678965434598999765457678945458978878999895634578987654333456989645459012398989898789987654436
8765454567897665679998654346567896567989989998764323689999765212345678932399923987698789892498742123
6874343789799779789876543213458998678999799987653212387921976924566789543989899876554678943985431012
5432102345678989999965432102349999799987678987654501276892989896677899959876798765432567899876543243
7643412456789999989878676413456899989876469898876612345999898789998998899995439876753458976987654354
7655324577897899878989654329567988764514345789987843456798766599889987689984323987764967894398766456
8786734678976799767998765567978976543101234599998954567899954349778996569876212398876878999989877767
9897645689565698757899887679999098654332345698999875678999843234567897678965104569997889798976998978
1998756789434569943535998789899129786445689997999989899998785123456998789874315678998996567895329989
2349967896513479892124569896788939896576898786789996921989632013667899892965326679019965456996210197
3959879974323569769023456975767945987687987675678985439876543124589976920976434567997894346789321256
9899989965434679658934567894556899998999876554567976545987654565697895439876565879876543235678932345
9768999899565798747895879913445678989678965423456897656898765677796796549987676789998432126799543556
6756897788979899656789989101236789676569874312345798968999879788954789678999789899987643235689699789
4346796567898998767899894212345896545456965101276789879998999899432688989989892968998754345678988999
5657893456987899878998765523466789634349876514567892989987656999543567899876901259789895466789877889
8789932678976789989579865434567898722298765423698921291296545678957678998765432345678976989898656878
9897643789865678996469876558778969810129895434789210199986534589998989349876553499899989999986543566
8987654898754567902345998669899654323345987567994391987673323467899995456987694989999999999986432345
7898765998843236899458998789998969834589998989879989876542012456945896678998989878998788898976521289
6569976987654345678967999898587897655678999898765779765432135578935789789459976568986577667898432478
9439898998765469989998987967476789767789988766434568976543234689124678992349865457997402456789543567
8998789659989598898989876653345678978999876654323456897654345691012567891998754349876212398897654678
7987679743497697767878965422234567899999875421012698998765676789323456789876542298765435678998865789
6592578932398986656467897910123456979899986534123589239876797896454567997984321059876568789999976890
9421349890199875433356789891954569456798986546254678998987898989765679545975472347998678899897989921
8210445789987654321245898799895698969897698755378999467998949678976889439986567656999789998796597532
7421234894599943210134987688789987898987549875489312359879234567987899998797678797899899989689459843
6439345943239874321345798454698976767895434976678954598762123456899999897698989989989979876568998754
6598997894999765633466954343567895456795323987889895689953234567999898789439899879876569965457998765
7987889999889876545789875212398954346789412398998789998764348789898775678919789767996498754345689896
9895678987676987986791995101457893244898901999975698789765459898799654567997637657984349843234569987
8654567896565698997892983212346789123457899899894987699986567899654523456789521749873249654445678999
7643298789434569898939865423567891012346798798795699789297978999543312978898430123965398979966989645
8964345679323458789920977674578942199967989689589999892198989998662106899986521239877987897897895434
9876798789012345699891988795689543987899876567477899943019799987543245679199542345998976545789999321
2989899893123556798789599876897659896789765435356789942165678998765358989098993556799865434668998910
1094945943238767987699432987999798765679976321234567893234569679878767899987689698899987323457897892
9943237895445898958567941098998999654789897542348788954345689456989878999865567989989865412368956789
8832146789556999543479892129987678932396789656569899995456791349897989987654349878878954323779768999
7654258997697976432358789234987467890145698767678998789767890998756399899785498765469895965689979889
8765767989989999751234689345986358943235699898989998689878999876543268799996789874399769898789898776
9979979878879987642956796569875467894346789969799987578989998987654156678998992986987656789899787545
9898998765968899799899898679989878976459894356678965467899887598721034567899321987896545678998676434
9767897654656789988778999789398989997568999234579874356789756459842125788965439999999767899876545323
8656789843234899876567899892127898987678988946698763244578942398763236999877898999899978975975432102
6545678952123678975457989942016567898789767897987653123569321987654349989989987998799989764986548726
2135678953234567894345678932123459989894356789796542012459432798789498978990196754678997653297659645
6545699975545678943234569643234569878943234598679765423498943679899987867891985653589987654398799856
7678789987656989434126678964365798569892125679569876536567894567998766756789873542357898765989923987
9989890199788999321018999765456987456789287894379987789879976898987654347898762101237789889875210198
0198931369899998732129678976569876345994399965456998897989197899599875456999854345345679998764321239
1987642456910987654334567897679985456895679876597899956791098965431986567899965456786789459875643467
`;


function parseData(indata) {
    return indata.trim().split("\n").reduce((p, v) => {
        p.push(v.split("").map(n => parseInt(n, 10)));
        return p;
    }, []);
}

function findClosest(data, x, y) {

    let ret = {
        current: {val: data[y][x], x: x, y: y},
        up: {val: 99},
        left: {val: 99},
        right: {val: 99},
        down: {val: 99},
    };

    if (y > 0) {
        ret.up = {
            val: data[y-1][x],
            y: y-1,
            x: x
        };
    }

    if (y < data.length - 1) {
        ret.down = {
            val: data[y+1][x],
            y: y+1,
            x: x
        }; 
    }

    if (x > 0) {
        ret.left = {
            val: data[y][x-1],
            y: y,
            x: x-1
        };
    }

    if (x < data[y].length - 1) {
        ret.right = {
            val: data[y][x+1],
            y: y,
            x: x+1
        };
    }

    return ret;

}


function findLowPoints(data) {

    let lowPoints = [];

    for (let y = 0; y < data.length; y++) {

        for(let x = 0; x < data[y].length; x++) {

            let closest = findClosest(data, x, y);

            if (
                closest.current.val < closest.up.val && 
                closest.current.val < closest.down.val && 
                closest.current.val < closest.left.val && 
                closest.current.val < closest.right.val
            ) {

                lowPoints.push({
                    y: y,
                    x: x,
                    depth: closest.current.val
                });
            }

            //console.log("row data: " + y, current, left, right, up, down);
        }
        
    }

    return lowPoints;


}


function part1(input) {

    let data = parseData(input),
        riskLevel = 0,
        lowPoints = findLowPoints(data);

    lowPoints.forEach(lowPoint => riskLevel += lowPoint.depth +1);

    return riskLevel;    
}


function findNextClosest(data, cur, amount, alreadyBeen) {

    let key = cur.current.y + "-" + cur.current.x;

    if (alreadyBeen.indexOf(key) !== -1) {
        return 0;
    }

    alreadyBeen.push(key);


    if (cur.left.val < 9) {
        amount += findNextClosest(data, findClosest(data, cur.left.x, cur.left.y), 1, alreadyBeen);
    }
    if (cur.right.val < 9) {
        amount += findNextClosest(data, findClosest(data, cur.right.x, cur.right.y), 1, alreadyBeen);
    }
    if (cur.up.val < 9) {
        amount += findNextClosest(data, findClosest(data, cur.up.x, cur.up.y), 1, alreadyBeen);
    }
    if (cur.down.val < 9) {
        amount += findNextClosest(data, findClosest(data, cur.down.x, cur.down.y), 1, alreadyBeen);
    }

    return amount;
}


function basinSize(data, basin) {
    
    let closest = findClosest(data, basin.x, basin.y);


    let size = findNextClosest(data, closest, 1, []);

    
    return size;
}

function arraySort(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });

    return arr;
}


function part2(input) {

    let data = parseData(input),
        basinSizes = [],
        lowPoints = findLowPoints(data);

    lowPoints.forEach((lowPoint, index) => {
        basinSizes.push(basinSize(data, lowPoint));
    });

    arraySort(basinSizes);

    return basinSizes[basinSizes.length-1] *
        basinSizes[basinSizes.length-2] * 
        basinSizes[basinSizes.length-3];
}

function getResults() {

    var ret = 
        "Part 1: " + part1(puzzle_data) +  "<br>" + 
        "Part 2: " + part2(puzzle_data) + "<br>" +
        ""; 

    return ret;
}

exports.getResults = getResults;