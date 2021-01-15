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

//##################################################
//Functions for the agency part

function populatePart_ag(kind, nb_trials = 40) {
    var block = [];
    var trials = Array(40).fill(0, 0);
    trials.fill(40, 10, 20);
    trials.fill(80, 20, 30);
    trials.fill(120, 30, 40);
    trials = shuffle(trials);
    for (var i = 0; i < nb_trials; i++) {
        block.push({
            NbTrial: i + 1,
            delaySound: trials[i],
        });
    }
    if (kind == 'practice') {
        var practice_number = 4;
        var block = [];
        var trials = Array(4).fill(0, 0);
        trials.fill(40, 1, 2);
        trials.fill(80, 2, 3);
        trials.fill(120, 3, 4);
        trials = shuffle(trials);
        for (var i = 0; i < practice_number; i++) {
            block.push({
                NbTrial: i + 1,
                delaySound: trials[i],
            });
        }
        return block;
    }
    return block;
}