const {ipcRenderer,} = require('electron');
const ipc = ipcRenderer;
const DOM = {
    minimize: document.getElementById('minimize'),
    MaxUnMax: document.getElementById('maximize'),
    close: document.getElementById('close')
}
// -- Fechar e abrir página -- //
DOM.minimize.addEventListener('click', minimize);
DOM.MaxUnMax.addEventListener('click', MaxUnMax);
DOM.close.addEventListener('click', close);

function close () {        
    ipc.send("close");
}

function MaxUnMax () {
    ipc.send("MaxUnMax");
}

function minimize () {   
    ipc.send("minimize");
}
