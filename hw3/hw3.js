var CODE = "qazwsxedcrfvtgbyhnujmikolp";
var codeArray = [];
var number = 0;
var txt = "";
var i = '';

function createCode() {

    var index = parseInt(Math.random() * 26);
    return CODE.charAt(index);
};
const log = document.getElementById('log');

document.addEventListener('keydown', logKey);


function logKey(e) {

    inp()
    if (codeArray[0] == e.key) {
        codeArray.shift();
        txt=txt.slice(0, -1);
        
    }
log.textContent = txt;


}
function inp() {
    {
        i = createCode();
        codeArray.push(i);
        txt = `${i}` + txt;
        
    }
}