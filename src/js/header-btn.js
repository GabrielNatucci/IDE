const {ipcRenderer} = require('electron');
const ipc = ipcRenderer;

// -- Fechar e abrir página -- //
document.getElementById('minimize').addEventListener('click', minimize);
document.getElementById('maximize').addEventListener('click', MaxUnMax);
document.getElementById('close').addEventListener('click', close);

function close () {        
    ipc.send("close");
}

const remote = require('electron').remote;
const { BrowserWindow } = remote;

function MaxUnMax () {
    var window = remote.getCurrentWindow();
    window.setFullScreen(!win.isFullScreen());
}

function minimize () {   
    ipc.send("minimize");
}