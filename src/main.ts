import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false  // Ajout pour les fichiers locaux
    }
  });

  // Charger le fichier HTML avec le chemin absolu
  const htmlPath = path.join(__dirname, '../src/index.html');
  mainWindow.loadFile(htmlPath);
  
  // Ouvrir automatiquement les DevTools pour déboguer
  mainWindow.webContents.openDevTools();
  
  // Masquer la barre de menu
  mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
