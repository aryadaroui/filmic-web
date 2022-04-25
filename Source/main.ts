const { app, BrowserWindow } = require('electron')

app.commandLine.appendSwitch('enable-unsafe-webgpu');

const createWindow = () => {
	const window = new BrowserWindow({
		width: 800,
		height: 600
	})

	window.loadFile('./Build/main.html')
	// window.loadURL('https://webkit.org/demos/webgpu/compute-blur.html')
}

app.whenReady().then(() => {
	createWindow()
})

