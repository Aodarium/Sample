//##########################################################
//                      Welcome ag
//##########################################################

var welcomeBlock_ag = {
    type: "html-keyboard-response",
    stimulus: "",
    on_start: (welcomeBlock_ag) => {
      nbBlockRelative_ag = 0;
      var englishText = "<strong>Welcome to the second and last task!</strong> <br> <br>  Press 'SPACE' to continue <br>";
      welcomeBlock_ag.stimulus = englishText;
    },
    choices: [32],
  };
  
  
  var instructions_ag = {
    type: 'html-keyboard-response',
    stimulus: INSTRUCTION_TEXT_AG.english,
    choices: [32],
    on_start: () => {
      nbBlockRelative_ag = 1;
    }
  };
  
  
  //##########################################################
  //                      Training ag
  //##########################################################
  
  var trainingInfo_ag = {
    type: 'html-keyboard-response',
    stimulus: "We will start with a brief practice of the task, so that you can familiarize yourself with it. <br><br> Press 'SPACE' to continue",
    choices: [32]
  };
  
  
  //##########################################################
  //                      Update - intermission
  //##########################################################
  
  var intermissionPracticeExperiment = {
    type: 'html-keyboard-response',
    stimulus: "<strong>Great!</strong><br>Now the real experiment can begin!<br><br>Press 'SPACE' to continue",
    choices: [32]
  };
  
  var update_ag = {
    type: 'html-keyboard-response',
    stimulus: '',
    choices: jsPsych.NO_KEYS,
    trial_duration: 1,
    on_start: () => {
      myTrial.nbBlock += 1;
      myTrial.nbTrial = 0;
    },
  };
  
  //##########################################################
  //                      ich_com
  //##########################################################
  
  
  var ichComInstr = {
    type: 'html-keyboard-response',
    stimulus: "",
    choices: [32],
    on_start: (ichComInstr) => {
      var textInstruction = "Next Block:" + RANDOM_ICH_AG > 0.5 ? "<strong>Me</strong> vs. <strong>Computer</strong><br>" : "<strong>Computer</strong> vs. <strong>Me</strong><br>";
      var infoInstruction = RANDOM_ICH_AG > 0.5 ? BOX_ICH.ich : BOX_ICH.computer;
      ichComInstr.stimulus = textInstruction + infoInstruction + "<br>Start with 'SPACE'.";
    }
  };
  
  var ichComFeedback = {
    type: 'audio-keyboard-response',
    stimulus: AUDIO_KEY_AG,
    choices: ['s', 'l'],
    prompt: '',
    on_finish: (data) => {
      myTrial.RT = data.rt; // data.rt from jspsych
      myTrial.keyPressed = data.key_press;
      myTrial.delaySound = jsPsych.timelineVariable('delaySound', true)
      myTrial.nbBlock = nbBlock;
      myTrial.meVsComputerLeftInput = RANDOM_ICH_AG > 0.5 ? "me" : "pc";
      myTrial.delayVsSimLeftInput = "-";
      myTrial.save();
      myTrial.resetData();
    },
    on_start: (ichComFeedback) => {
      var infoInstruction = RANDOM_ICH_AG > 0.5 ? BOX_ICH.ich : BOX_ICH.computer;
      ichComFeedback.prompt = infoInstruction;
    }
  };
  
  //##########################################################
  //                      glei_ver
  //##########################################################
  
  var gleiVerInstr = {
    type: 'html-keyboard-response',
    stimulus: "",
    choices: [32],
    on_start: (gleiVerInstr) => {
      var textInstruction = "Next Block:" + RANDOM_SIM_AG > 0.5 ? "<strong>Simultaneously</strong> vs. <strong>Delayed</strong><br>" : "<strong>Delayed</strong> vs. <strong>Simultaneously</strong><br>";
      var infoInstruction = RANDOM_SIM_AG > 0.5 ? BOX_SIMULTANEOUSLY.simultaneously : BOX_SIMULTANEOUSLY.delayed;
      gleiVerInstr.stimulus = textInstruction + infoInstruction + "<br>Start with 'SPACE'.";
    }
  };
  
  
  var gleiVerFeedback = {
    type: 'audio-keyboard-response',
    stimulus: AUDIO_KEY_AG,
    choices: ['s', 'l'],
    prompt: '',
    on_finish: (data) => {
      myTrial.RT = data.rt;
      myTrial.keyPressed = data.key_press;
      myTrial.delaySound = jsPsych.timelineVariable('delaySound', true)
      myTrial.nbBlock = nbBlock;
      myTrial.delayVsSimLeftInput = RANDOM_SIM_AG > 0.5 ? "simultaneous" : "delay";
      myTrial.meVsComputerLeftInput = "-";
      myTrial.save();
      myTrial.resetData();
    },
    on_start: (gleiVerFeedback) => {
      var infoInstruction = RANDOM_SIM_AG > 0.5 ? BOX_SIMULTANEOUSLY.simultaneously : BOX_SIMULTANEOUSLY.delayed;
      gleiVerFeedback.prompt = infoInstruction;
    }
  };
  
  //##########################################################
  //                      In between
  //##########################################################
  
  var ag_resp = {
    type: "html-keyboard-response",
    stimulus: " ",
    choices: [32],
  };

  var waitingSlide = {
    type: "html-keyboard-response",
    stimulus: " ",
    trial_duration: jsPsych.timelineVariable('delaySound')
  };
  
  //##########################################################
  //                      Block end
  //##########################################################
  
  var endBlock_ag = {
    type: 'html-keyboard-response',
    stimulus: "",
    choices: [32],
    on_start: function (update) {
      var data = jsPsych.data.get().values();
      data = data.filter(elt => elt.nbBlock == nbBlock);
      var englishText = "Great! You have now completed " + nbBlockRelative_ag + "/8 blocks. Feel free to take a break! <br><br> Press 'SPACE' to continue";
      update.stimulus = englishText;
      nbBlockRelative_ag += 1;
    },
  };
  
  
  //##########################################################
  //                      Cross
  //##########################################################
  
  const cross_ag = {
    type: 'html-keyboard-response',
    stimulus: "<table style=' margin-left:auto; margin-right:auto'><tr><td style='width:100px; font-size: 30px;'>+</td></tr></table><br>",
    choices: jsPsych.NO_KEYS,
    trial_duration: 500,
    on_start: () => {
      myTrial.nbTrial += 1;
    }
  };