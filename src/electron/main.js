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
  win.loadURL("http://localhost:5173");
  //  win.loadFile("dist/index.html");
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  createWindow()
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
