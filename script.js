//your JS code here. If required.

let infos = window.navigator;
const info = document.getElementById("browser-info");

info.innerText = `You are using ${infos.appName} version ${infos.appVersion}`;

document.body.appendChild(info);