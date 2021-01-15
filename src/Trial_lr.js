class TrialLR {

    constructor(id, group) {
        this.id = id;
        this.group = group;
        //this.run = [];
        this.run = "id,group,nbtrial,nbblock,pressCross,hasResponded_stimuli,hasResponded_actionEffect,hasRespondedTooEarly,isCorrect_stimuli,isCorrect_actionEffect,rt_stimulus,rt_inter,rt_actionEffect,stimulus,stimulus_actionEffect,key_correct_stimulus,key_correct_action_effect,key_stimulus,key_actionEffect,key_inter,effect_delay,position,error_stimulus,error_actionEffect";

        this.compatibility = 1;

        this.nbtrial = 1;
        this.nbblock = 1;

        this.stimulus = 0;
        this.hasRespondedStimuli = false;
        this.rtStimulus = 0;
        this.keyCorrectStimulus = 0;
        this.keyStimulus = 0;
        this.isCorrectStimuli = false;
        this.delay = 0;

        this.tooSlowCnt = 0;

        this.isCorrectStimuliTraining = [];
        this.counterTraining = 0;
        this.trainingMode = true;

    }

    saveLS() {
        this.errorStimulus = this.hasRespondedStimuli == true && this.isCorrectStimuli == false;
        this.run += '\n' + [
            this.id,
            this.group,
            this.nbTrial,
            this.nbBlock,
            this.hasRespondedStimuli,
            this.hasRespondedTooEarly,
            this.isCorrectStimuli,
            this.rtStimulus,
            this.stimulus,
            this.stimulusActionEffect,
            this.keyCorrectStimulus,
            this.keyStimulus,
            this.effect_delay,
            this.position,
            this.errorStimulus,
        ].toString();
    }

    resetData() {
        this.dataComplete = {
            date: this.time,
            id: this.id,
            block:this.nbblock,
            kind: 3,
            block: this.nbblock,
            value: []
        };
        this.run = [];
    }
    resetBlock() {
        this.tooEarlycnt = 0;
        this.tooSlowCnt = 0;
        this.nbtrial = 0;
    }

    initTrial() {
        this.stimulus = 0;
        this.hasRespondedStimuli = false;
        this.rtStimulus = 0;
        this.keyCorrectStimulus = 0;
        this.keyStimulus = 0;
        this.isCorrectStimuli = false;
        this.delay = 0;
        this.tooSlowCnt = 0;
        
    }
    resetTraining() {
        this.nbtrial = 1;
        this.nbblock = 1;

        this.stimulus = 0;
        this.hasRespondedStimuli = false;
        this.rtStimulus = 0;
        this.keyCorrectStimulus = 0;
        this.keyStimulus = 0;
        this.isCorrectStimuli = false;
        this.delay = 0;

        this.tooSlowCnt = 0;

        this.isCorrectStimuliTraining = [];        
    }



    sendEnd() {
        window.location.href = `/experiment_over?id=${this.id}&message=end`;
    }
}