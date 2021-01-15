class TrialAG {

    constructor(id) {
        this.id = id;
        this.dataAG = [];

        this.nbBlock = 1;
        this.nbTrial = 0;

        this.RT = 0;
        this.delaySound = 0;
        this.meVsComputerLeftInput = "";
        this.delayVsSimLeftInput = "";
        this.keyPressed = 0;


    }

    save() {
        this.dataAG.push(`${this.id},${this.nbBlock},${this.nbTrial},${this.RT},${this.delaySound},${this.meVsComputerLeftInput},${this.delayVsSimLeftInput},${this.keyPressed}\n`);
    }


    resetData() {
        this.RT = 0;
        this.delaySound = 0;
        this.meVsComputerLeftInput = "";
        this.delayVsSimLeftInput = "";
        this.keyPressed = 0;
    }
   

    sendData(data, kind) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', './writeFile.php');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(JSON.stringify({
            filename: this.id,
            filedata: {
                value: data
            },
            kind: kind
        }));
    }

    sendEnd() {
        window.location.href = `/experiment_over?id=${this.id}&message=end`;
    }
}