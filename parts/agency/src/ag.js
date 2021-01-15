//###################################################
//                     ag   						 
//													 
//													 
//	 timeline.push(part_ag) to load this part        
//													 
//###################################################

const PRACTICE = 'practice';
const REAL = 'real';
const TESTING_NB_AG = 2; // Set to 40;

var introduction_ag = {
  timeline: [welcomeBlock_ag, instructions_ag, trainingInfo_ag]
};

var practice_1 = {
  timeline: [cross_ag, ag_resp, ichComFeedback],
  timeline_variables: populatePart_ag(PRACTICE)
};
var practice_2 = {
  timeline: [cross_ag, ag_resp, gleiVerFeedback],
  timeline_variables: populatePart_ag(PRACTICE)
};


var practice_ag = {
  timeline: [ichComInstr, practice_1, gleiVerInstr, practice_2, intermissionPracticeExperiment]
};


var block_ag = {
  timeline: jsPsych.randomization.shuffle([{
    timeline: [update_ag, ichComInstr, {
      timeline: [cross_ag, ag_resp, waitingSlide, ichComFeedback],
      timeline_variables: populatePart_ag(REAL, TESTING_NB_AG)
    }, endBlock_ag]
  }, {
    timeline: [update_ag, ichComInstr, {
      timeline: [cross_ag, ag_resp, waitingSlide, ichComFeedback],
      timeline_variables: populatePart_ag(REAL, TESTING_NB_AG)
    }, endBlock_ag]
  }, {
    timeline: [update_ag, ichComInstr, {
      timeline: [cross_ag, ag_resp, waitingSlide, ichComFeedback],
      timeline_variables: populatePart_ag(REAL, TESTING_NB_AG)
    }, endBlock_ag]
  }, {
    timeline: [update_ag, ichComInstr, {
      timeline: [cross_ag, ag_resp, waitingSlide, ichComFeedback],
      timeline_variables: populatePart_ag(REAL, TESTING_NB_AG)
    }, endBlock_ag]
  }, {
    timeline: [update_ag, gleiVerInstr, {
      timeline: [cross_ag, ag_resp, waitingSlide, gleiVerFeedback],
      timeline_variables: populatePart_ag(REAL, TESTING_NB_AG)
    }, endBlock_ag]
  }, {
    timeline: [update_ag, gleiVerInstr, {
      timeline: [cross_ag, ag_resp, waitingSlide, gleiVerFeedback],
      timeline_variables: populatePart_ag(REAL, TESTING_NB_AG)
    }, endBlock_ag]
  }, {
    timeline: [update_ag, gleiVerInstr, {
      timeline: [cross_ag, ag_resp, waitingSlide, gleiVerFeedback],
      timeline_variables: populatePart_ag(REAL, TESTING_NB_AG)
    }, endBlock_ag]
  }, {
    timeline: [update_ag, gleiVerInstr, {
      timeline: [cross_ag, ag_resp, waitingSlide, gleiVerFeedback],
      timeline_variables: populatePart_ag(REAL, TESTING_NB_AG)
    }, endBlock_ag]
  }])
};


var part_ag = {
  timeline: [introduction_ag, practice_ag, block_ag],
};