var loopTrialTraining_lr = {
    timeline: [
        cross_lr,
        stimuli_lr,
        stimuliResponseCorrectness_lr,
    ],
    timeline_variables: populate_part_left_right(1, TRAINING)
};



var training_1 = {
    timeline: [
        kick,
        infoTraining_1_2_lr,
        startTraining_lr,
        loopTrialTraining_lr,
        trainingFail_lr
    ],
    loop_function: () => {
        if (myTrial.isCorrectStimuliTraining.reduce((a, b) => a + b, 0) > TRAININGLIM) {
            console.log(myTrial.isCorrectStimuliTraining);
            counterTraining = 0;
            myTrial.resetTraining();
            myTrial.initTrial();
            return false;
        } else {
            console.log(myTrial.isCorrectStimuliTraining);
            myTrial.isCorrectStimuliTraining = [];
            counterTraining += 1;
            myTrial.initTrial();
            return true;
        }
    },
};



var timeline_lr = [
    welcomeBlock_lr,
    infoTraining_1_1_lr,
    infoTraining_1_2_lr,
    training_1,
    trainingOver_lr
];




for (var i = 0; i < 4; i++) {
	var trialsPressure_lr = {
		timeline: [cross_lr, stimuli_lr, playError_lr, checkAnswer_lr, iti_lr],
		timeline_variables: populate_part_left_right(compatibility_ls),
	};
	timeline_lr.push({
		timeline: [reminder_lr, trialsPressure_lr, endBlock_lr]
	});
}

for (var i = 0; i < 4; i++) {
	var trialsPressure_lr = {
		timeline: [cross_lr, stimuli_lr, playError_lr, checkAnswer_lr, iti_lr],
		timeline_variables: populate_part_left_right(compatibility_ls * -1),
	};
	timeline_lr.push({
		timeline: [reminder_lr, trialsPressure_lr, endBlock_lr]
	});
}

var part_lr = {timeline: timeline_lr};

// --> block_lr