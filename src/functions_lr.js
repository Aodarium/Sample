function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

//#####################################################################
// Functions for the left-right part


function reverseKey(x) {
    return x === 83 ? 76 : 83;
}

function populate_part_left_right(compatibility, nbTrials = NBTRIAL) {
    var block = generate_left_right(compatibility, nbTrials);
    if (nbTrials == NBTRIAL) {
        while (block.filter(elt => elt.correctAnswer == 120).length != block.filter(elt => elt.correctAnswer == 300).length) {
            block = generate_left_right(compatibility, nbTrials);
        }
    }
    position_comp += 1;
    console.log(block);
    return block;
}

function generate_left_right(compatibility, nbTrials) {

    const STARTER = ["->", "<-"];
    const COMPATIBILITY_TMP = compatibility;
    var block = [];

    var trials = Array(nbTrials).fill('x', 0);
    trials.fill('=', nbTrials/2);
    trials = shuffle(trials);
    trials[0] = Math.random() > 0.5 ? STARTER[0] : STARTER[1];

    var correctKey;

    for (var i = 0; i < nbTrials; i++) {

        var effectPosition;
        if (i == 0) {
            correctKey = trials[i] == STARTER[0] ? 76 : 83;
            if (COMPATIBILITY_TMP == -1) effectPosition = correctKey == 83 ? CIRCLE[1 + COLOR] : CIRCLE[0 + COLOR];
            if (COMPATIBILITY_TMP == 1) effectPosition = correctKey == 83 ? CIRCLE[0 + COLOR] : CIRCLE[1 + COLOR];
        } else {
            correctKey = trials[i] == '=' ? correctKey : reverseKey(correctKey);
            if (COMPATIBILITY_TMP == -1) effectPosition = correctKey == 83 ? CIRCLE[1 + COLOR] : CIRCLE[0 + COLOR];
            if (COMPATIBILITY_TMP == 1) effectPosition = correctKey == 83 ? CIRCLE[0 + COLOR] : CIRCLE[1 + COLOR];
        }

        block.push({
            nbTrial: i + 1,
            stimuli: trials[i] == '=' || trials[i] == 'x' ? '<p style="font-size:30px">' + trials[i] + '</p>' : trials[i],
            correctAnswer: correctKey,
            effectPosition: effectPosition, 
            compatibility: COMPATIBILITY_TMP,
        });

    }

    return block;
}

