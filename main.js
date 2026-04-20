import {app, BrowserWindow, Menu} from 'electron'

//const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow(/* { width: 1200, height: 800 } */ {
    fullscreen: true,
    // frame: true
  });
  // Menu.setApplicationMenu(null)
  // win.setFullScreen(true)
  win.loadURL('http://localhost:5173');
  
  
}

app.whenReady().then(createWindow);