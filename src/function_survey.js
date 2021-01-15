
function sendDataSurvey(id, data, kind) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './writeFile.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.send(JSON.stringify({
        filename: id,
        filedata: {
            value: data
        },
        kind: kind
    }));
}

function sendDataSurvey(id){
    var data = jsPsych.data.get().filter({type: 'survey'});
    sendData(id, data, "preSurvey");
}







