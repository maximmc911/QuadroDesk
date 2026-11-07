import { app, BrowserWindow, Menu } from "electron";
import path from "path";
//const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow(
   /*  { width: 1200, height: 800 } */ {
      // fullscreen: true,
      // frame: true
      width: 1920,
      height: 800
    },
  );
  // Menu.setApplicationMenu(null)
  // win.setFullScreen(true)
  if(app.isPackaged){
    win.loadFile(path.join(app.getAppPath(), 'dist' , 'index.html'))
  }else{

    win.loadURL("http://localhost:5173");
  }
  //  win.loadFile("dist/index.html");
   // Поможет найти ошибки загрузки в DevTools
  win.webContents.on(
    'did-fail-load',
    (_event, errorCode, errorDescription, validatedURL) => {
      console.error(
        'Ошибка загрузки:',
        errorCode,
        errorDescription,
        validatedURL
      )
    }
  )
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
/* 
const { app, BrowserWindow } = require("electron")
const path = require("path")

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800
  })

  win.loadFile("dist/index.html")
}

app.whenReady().then(() => {
  createWindow()
})


*/
