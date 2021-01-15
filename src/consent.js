const text = {
    english: "<div style='text-align: justify; width:1000px;'><strong>Informed Consent</strong> <br><br>" +
        "Dear Participant,<br><br>" +
        "thank you for participating in a study of the Cognition, Action, and Sustainability Unit of the University of Freiburg!<br><br>" +
        "The aim of our research is to get a better understanding of human behavior and mental processes. For this purpose, in the following study, your behavior will be measured (e.g. choices, reaction times). " +
        "Your participation in this study is <strong>voluntary</strong>. You may withdraw your consent to participate at any time without providing a reason for doing so and without fear of prejudice.<br>" +
        "As no personal data will be collected, <strong>your data and your person cannot be connected after data collection</strong> - the data set is anonymous. Respectively, deletion of your data will not be possible after data collection has been completed, as we cannot retrace your data set.<br>" +
        "The <strong>results and anonymized data collected in this study will be published as a scientific publication</strong>. This will happen in an anonymized format, so that no data can be traced back to a specific person. The <strong>completely anonymized data of this study will be made available to other researchers and/or on the Internet</strong> via the data archive Open Science Framework (OSF). By doing so, this study follows the recommendations of the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) and the Deutsche Gesellschaft für Psychologie (DGPS, German Psychological Society) regarding quality assurance in research.<br>" +
        "<strong>Leaving the experiment</strong> (or simply switching tabs in you browser) before the final slide will end the experiment and <strong>you will not receive any compensation</strong>.<br><br>"+
        "If you have any questions now or after the experiment, please contact Florian Gouret (florian.gouret@psychologie.uni-freiburg.de).<br><br><br>" +
        "I hereby declare, that I understand the above described conditions of participation and I agree to participate under these conditions. <br>" +
        "</div><br><br>",
};

var consent = {
    type: 'html-button-response',
    stimulus: text.english,
    choices: ['I agree', 'I do not agree and will not participate'],
    on_finish: (data) => {
        if (data.button_pressed == 1) {
            jsPsych.endExperiment('The experiment is over');
        } else {
            consentGiven = true;
        }
    }
};

const welcome = 
        "Dear Participant,<br><br>" +
        "welcome to this experiment, please answer these questions first."
;

var welcomePage = {
    type: 'html-button-response',
    stimulus: welcome,
    choices: ['Next'],
    
};