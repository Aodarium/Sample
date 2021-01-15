//##########################################################
//                      Welcome left-right
//##########################################################

var welcomeBlock_lr = {
    type: "html-keyboard-response",
    stimulus: "<strong>Welcome to this first task!</strong><br><br> Press 'SPACE' to continue",
    choices: [32],
};


//##########################################################
//                      Inside a trial
//##########################################################

var cross_lr = {
    type: 'html-keyboard-response',
    stimulus: CROSS_,
    choices: jsPsych.NO_KEYS,
    trial_duration: () => {
        return 1100 + Math.floor(Math.random() * 400);
    }
};

var stimuliTarget_lr = {
    type: 'html-keyboard-response',
    stimulus: jsPsych.timelineVariable('stimuli'),
    choices: jsPsych.NO_KEYS,
    trial_duration: 100,
};

var stimuliResponse_lr = {
    type: "html-keyboard-response",
    stimulus: '',
    trial_duration: 1400,
    choices: ['s', 'l'],
    on_finish: (data) => {
        myTrial.rtStimulus = data.rt;
        myTrial.keyStimulus = data.key_press;
        myTrial.keyCorrectStimulus = jsPsych.timelineVariable('correctAnswer', true);
        myTrial.compatibility = jsPsych.timelineVariable('compatibility', true);
        myTrial.effect_position = jsPsych.timelineVariable('effect_position', true);

        if (myTrial.rtStimulus != null) myTrial.hasRespondedStimuli = true;

        if (myTrial.hasRespondedStimuli == true) {
            myTrial.isCorrectStimuli = myTrial.keyStimulus === myTrial.keyCorrectStimulus;
            if (myTrial.trainingMode && myTrial.isCorrectStimuli) myTrial.isCorrectStimuliTraining.push(1);
        }
    }
};

var stimuli_lr = {
    timeline: [stimuliTarget_lr, stimuliResponse_lr],
};

//##########################################################
//                      Training 1
//##########################################################


var infoTraining_1_1_lr = {
    type: 'html-keyboard-response',
    stimulus: "A description of the task will be presented and you will practice a bit to get use to the task." +
        "<br>You will have up to 3 attempts to respond correctly to at least 70% of the practice. " +
        "<br>After each stimulus, the correctness of your response will be presented." +
        "<br>If the correctness of your responses is less than 70%, instructions will be redisplayed and the practice will restart." +
        "<br><br>After 3 unsuccessful attempts, the experiment will be ended and your data will be deleted. You will not receive Prolific credit in this case." +
        "<br><br>Press 'SPACE' to continue",
    choices: [32]
};

var infoTraining_1_2_lr = {
    type: 'html-keyboard-response',
    stimulus: TEXT_INSTRUCTION_LR,
    choices: [32]
};

var startTraining_lr = {
    type: 'html-keyboard-response',
    stimulus: "Press 'SPACE' to start the practice",
    choices: [32]
};

var stimuliResponseCorrectness_lr = {
    type: "html-keyboard-response",
    stimulus: "",
    trial_duration: 1000,
    choices: jsPsych.NO_KEYS,
    on_start: (stimuliResponseCorrectness_lr) => {
        stimuliResponseCorrectness_lr.stimulus = myTrial.isCorrectStimuli ? "<font color='green';>Correct!</font>" : "<font color='red';>Error!</font>"
        if (!myTrial.hasRespondedStimuli){
            stimuliResponseCorrectness_lr.stimulus = "<font color='red';>Too slow!</font>";
        }
    }
};



//##########################################################
//                      Training over
//##########################################################


var trainingOver_lr = {
    type: "html-keyboard-response",
    stimulus: "",
    choices: [32],
    on_start: (trainingOver_lr) => {
        var english_text = "<strong>Great!</strong><br> You have succesfully completed the practice.<br> Now, the real task will begin.<br> Your correct key presses will now be followed by a coloured circle.<br> <br> Press 'SPACE' to continue<br> ";
        trainingOver_lr.stimulus = english_text;
    }
};

//##########################################################
//                      Error
//##########################################################


var error_lr = {
    type: 'html-keyboard-response',
    stimulus: "",
    on_start: (error_lr) => {
        if (!myTrial.isCorrectStimuli) {
            error_lr.stimulus = "<font color='red';>error!</font>";
        } 
        if (!myTrial.hasRespondedStimuli){
            error_lr.stimulus = "<font color='red';>too slow!</font>";
            slow_lr = false;
        }
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,

};

var playError_lr = {
    timeline: [error_lr],
    conditional_function: () => {
        if (myTrial.hasRespondedStimuli && myTrial.isCorrectStimuli) {
            return false;
        }
        return true;
    }
};


//##########################################################
//                      Action effect
//##########################################################


var waitingslide_lr = {
    type: 'html-keyboard-response',
    stimulus: '',
    choices: jsPsych.NO_KEYS,
    trial_duration: 300
};

var actionEffect_lr = {
    type: 'html-keyboard-response',
    stimulus: jsPsych.timelineVariable('effect_position'),
    choices: jsPsych.NO_KEYS,
    trial_duration: 500
};

var checkAnswer_lr = {
    timeline: [waitingslide_lr, actionEffect_lr],
    conditional_function: function () {
        if (myTrial.hasRespondedStimuli && myTrial.isCorrectStimuli) {
            return true;
        }
        return false;   
    }
};

var iti_lr = {
    type: 'html-keyboard-response',
    stimulus: '',
    choices: jsPsych.NO_KEYS,
    trial_duration: 100
};



//##########################################################
//                      Between a block
//##########################################################

var reminder_lr = {
    type: "html-keyboard-response",
    stimulus: "",
    on_start: function (reminder_lr) {
        var english_text = "If the arrow points RIGHT (->), press 'L'.<br>If the arrow points LEFT (<-), press 'S'.<br>If an '=' is displayed, press the <strong>SAME key</strong> as in the previous trial.<br> If an 'x' is displayed, press the <strong>OPPOSITE key</strong> as in the previous trial.<br><br>Respond both <strong>fast</strong> and <strong>accurately</strong>!<br><br> Press 'SPACE' to start";
        reminder_lr.stimulus = english_text;
        nbBlock += 1;
        nb_block_relative += 1;
    },
    choices: [32]
};

//##########################################################
//                      End of a block
//##########################################################

var endBlock_lr = {
    type: 'html-keyboard-response',
    stimulus: "",
    choices: [32],
    on_start: function (endBlock_lr) {
        var data = jsPsych.data.get().values();
        data = data.filter(elt => elt.nbBlock == nbBlock);
        var nb_slow = data.filter(elt => elt.tooslow == 1).length;
        var nb_error = data.filter(elt => elt.error == 1).length - nb_slow;
        var text_feedback_eng = "<strong>Great!</strong> You have now completed " + nb_block_relative + "/16 blocks. Feel free to take a break! <br><br> You";
        if (nb_error > 0) {
            if (nb_error == 1) text_feedback_eng += " commited " + nb_error + " error";
            else text_feedback_eng += " commited " + nb_error + " errors";
        } else {
            text_feedback_eng += " commited 0 error";
        }
        if (nb_slow > 0) {
            if (nb_error == 1) text_feedback_eng += " and did not respond on time on " + nb_slow + " trials";
            else text_feedback_eng += " and did not respond on time on " + nb_slow + " trial";
        }
        text_feedback_eng += " in the last block.<br>Please try to always respond as quickly and as accurately as possible.<br><br>Press 'SPACE' to continue";

        endBlock_lr.stimulus = text_feedback_eng;
    },
};




//##########################################################
//                      Kick exp
//##########################################################

var badTraining = {
    type: 'html-keyboard-response',
    choices: jsPsych.NO_KEYS,
    stimulus: "You failed to pass the training 3 times in a row therefore we will not be able to use your data. <br><br> The experiment is over.",
    trial_duration: 5000,
    on_finish: () => {
        jsPsych.endExperiment('The experiment is over');
    }
};
var kick = {
    timeline: [badTraining],
    conditional_function: () => {
        return myTrial.isCorrectStimuliTraining.reduce((a, b) => a + b, 0) < TRAININGLIM && counterTraining == 3;
    }
};

//##########################################################
//                      New attempt
//##########################################################

var newTraining_lr = {
    type: 'html-keyboard-response',
    choices: [32],
    stimulus: "You committed too many errors during this practice. <br> The instructions will be displayed one more time and another practice will start.<br><br> Press 'SPACE' to continue.",
};
var trainingFail_lr = {
    timeline: [newTraining_lr],
    conditional_function: () => {
        return myTrial.isCorrectStimuliTraining.reduce((a, b) => a + b, 0) < TRAININGLIM && counterTraining < 2;
    }
};