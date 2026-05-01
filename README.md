# URL Saver Chrome Extension

A simple Chrome extension to save and manage URLs/links for future reference.

## Features
- Save URLs with one click
- Persistent storage (links persist across browser sessions)
- URL validation (only http and https accepted)
- Delete saved links
- Empty state message when no links saved
- Clean, modern UI with hover effects
- Scrollable list when many links
- Keyboard support: Press Enter to submit

## Installation
1. Ensure the following files are in the same folder:
   - `manifest.json`
   - `index.html`
   - `index.js`
   - `index.css`
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select the project folder
5. Pin the extension to your toolbar for easy access

## Usage
1. Click the extension icon in the toolbar
2. Enter a URL (include http:// or https://)
3. Click "SAVE INPUT" or press Enter
4. Click any saved link to open it in a new tab
5. Click "Delete" to remove a link

## File Structure
- `manifest.json` – Extension configuration (Manifest V3)
- `index.html` – Popup UI
- `index.js` – Core logic with Chrome Storage API
- `index.css` – Styling

## Technical Details
- Uses `chrome.storage.local` for data persistence
- Built with vanilla JavaScript, HTML, and CSS (no frameworks)
- Includes URL validation via `URL` constructor
- Event listeners for button clicks and keyboard input

## Notes
- Extension data is stored locally on your machine
- To backup/restore links, you can copy from Chrome's storage (future feature)
