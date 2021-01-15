//##########################################################
//                      English
//##########################################################

var scaleGender = [
    "male",
    "female",
    "other"
];
var scaleSchool = [
    "I have not graduated",
    "School Leaving Qualification (approx. Haupt-/Volksschulabschluss, approx. 10 years of school)",
    "Secondary School Qualification (approx. Mittlere Reife/Realschule/Abschluss der Polytechnischen Oberschule)",
    "Advanced Techinal College Qualification (approx. Fachhochschulreife)",
    "Baccalaureate/Abitur/ALevels",
    "other"
];
var scaleEducation = [
    "no professional/vocational training",
    "currently in professional/vocational training or student (not graduated)",
    "completed professional/vocational training or master craftsman",
    "university graduate or similar",
    "doctoral title or higher",
    "other"
];
var handDominant = [
    'Left',
    'Right',
    'Ambidextrous'
];

var questionAge = {
    type: "survey-text",
    questions: [{
        prompt: "<div>Please answer the next questions.</div><br><br><br>" +
            "How old are you?",
        rows: 1,
        columns: 20,
        name: "age",
        required: true
    }],
    button_label: "Next",
    data: {
        convertable: true,
        type: 'survey'
    }
};

var questionHand = {
    type: 'survey-multi-choice',
    questions: [{
        prompt: "<strong>Hand:</strong> ",
        options: handDominant,
        name: "hand",
        required: true
    }, ],
    button_label: "Next",
    data: {
        convertable: true,
        type: 'survey'
    }
};

var questionDemographicChoice = {
    type: 'survey-multi-choice',
    questions: [{
            prompt: "<strong>Gender:</strong> ",
            options: scaleGender,
            name: "gender",
            required: true
        },
        {
            prompt: "<strong>What is your highest educational level?</strong>",
            options: scaleSchool,
            name: "school",
            required: true
        },
        {
            prompt: "<strong>What is your highest level of qualification?</strong>",
            options: scaleEducation,
            name: "education",
            required: true
        },
    ],
    button_label: "Next",
    on_finish: (data) => {
        if (data.responses.includes('currently in professional/vocational training or student (not graduated)')) {
            education_text = true;
        } else {
            education_text = false;
        }
    },
    data: {
        convertable: true,
        type: 'survey'
    }
};

var questionDemographicText = {
    type: "survey-text",
    questions: [{
        prompt: "<div> You are currently a worker, in professional/vocational training or a student</div>" +
            "<div> What field are you working in/doing professional/vocational training in or which subject are you studying? <div> What is your job and field of interest or which subject are you studying?</div>",
        rows: 10,
        columns: 80,
        name: "education_text",
        required: true
    }, ],
    button_label: "Next",
    data: {
        convertable: true,
        type: 'survey'
    }
};


var endSurvey = {
    type: 'html-keyboard-response',
    stimulus: 'The experiment is about to start. <br> <br> ' +
        'Please bear in mind that leaving this session prematurely (e.g. by switching or closing the tab) will end  the study and make the allocation of your participation credit impossible. The experiment lasts about 60 min and you will have the opportunity to take a break every few minutes.' +
        "<br><br>Press 'SPACE' to continue.",
    choices: [32]
};