const CROSS_ = '<div style="font-size:30px">+</div>';
const CIRCLE = ['<p style="height: 100px;  width: 100px;  background-color: #002FFF;  border-radius: 50%; position: relative; left:-400px"/>',
  '<p style="height: 100px;  width: 100px;  background-color: #E6BB07;  border-radius: 50%; position: relative; left:400px"/>',
  '<p style="height: 100px;  width: 100px;  background-color: #E6BB07;  border-radius: 50%; position: relative; left:-400px"/>',
  '<p style="height: 100px;  width: 100px;  background-color: #002FFF;  border-radius: 50%; position: relative; left:400px"/>'
];
const COLOR = Math.random() < 0.5 ? 0 : 2;
const NBTRIAL = 10;
const TRAINING = 2;
const TRAININGLIM = Math.floor(TRAINING*0.7);
const START_COMP = Math.random() > 0.5 ? 0 : 1;



//general
var myTrial = new TrialLR(123456);

var nbBlock = 0;
var part_number = 0;
var nb_block_relative = 0;
var cnt = 0;
var cnt_good = 0;
var compatibility = START_COMP == 0 ? [0, 0, 0, 1, 1] : [0, 1, 1, 0, 0];
var position_comp = 0;
var training_completed = 0;


var counterTraining = 0;
var slow_ls = false;
var compatibility_ls = Math.random() > 0.5 ? -1 : 1;



const TEXT_INSTRUCTION_LR = `
  Please place your LEFT INDEX FINGER on the 'S'-KEY and your RIGHT INDEX FINGER on the 'L'-KEY.<br><br>
  In this part of the experiment, you will need to respond as fast and accurately as you can.<br><br>
  In each trial, you will first see a '+' in the middle of the screen. Then, a symbol that you need to respond to as fast and accurately as you can will appear. After your response, you will receive feedback regarding the correctness of your response.<br><br>
  In the first trial of a block, an ARROW pointing in one of two directions will appear.<br>
  Press <strong>'L'</strong> if the <strong>arrow points RIGHT (->)</strong>. <br>
  Press <strong>'S'</strong> if the <strong>arrow points LEFT (<-)</strong>.<br><br>
  The arrows determine your initial response. In the following trials, always use the correct response of the <strong>previous</strong> trial as reference.<br>
  In the following trials, either an '=' or an 'x' is displayed.<br>
  If an '=' is displayed, press the <strong>SAME</strong> key as in the previous trial.<br>
  If an 'x' is displayed, press the <strong>OPPOSITE</strong> key as in the previous trial.<br><br>
  Example:<br>
  <table style='width:55%; margin-left:auto; margin-right:auto'>
    <tr><th>--TRIAL--</th><th>--SYMBOL--</th><th>--CORRECT RESPONSE--</th><th>--CORRECT KEY PRESS--</th></tr>
    <tr><td>1</td><td><--</td><td>LEFT</td><td>S</td></tr>
    <tr><td>2</td><td>=</td><td>LEFT</td><td>S</td></tr>
    <tr><td>3</td><td>x</td><td>RIGHT</td><td>L</td></tr>
    <tr><td>4</td><td>x</td><td>LEFT</td><td>S</td></tr>
  </table><br><br>
  <strong>IMPORTANT!</strong><br>
  If you make a mistake, think of what the correct response would have been and base your reaction in the following trial on that.<br><br>
  Example:<br>
  <table style='width:50%; margin-left:auto; margin-right:auto'>
    <tr><th>--TRIAL--</th><th>--SYMBOL--</th><th>--CORRECT RESPONSE--</th><th>--KEY PRESS--</th></tr>
    <tr><td>1</td><td><-</td><td>LEFT</td><td><font color='green'>S</font></td></tr>
    <tr><td>2</td><td>=</td><td>LEFT</td><td><font color='red'>L (FALSE!)</font></td></tr>
    <tr><td>3</td><td>x</td><td>RIGHT</td><td><font color='green'>L</font></td></tr>
  </table><br><br>
   
  Press 'SPACE' to start<br><br><br>`;