import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // 有就放，沒有先拿掉也可以
    }
  });

  const devUrl = process.env.EDITOR_UI_DEV_URL;

  if (devUrl) {
    // dev 模式：連到 Vite dev server
    win.loadURL(devUrl);
  } else {
    // 之後做正式版打包時再改這裡（載入打包好的 index.html）
    win.loadFile(path.join(__dirname, '../public/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});