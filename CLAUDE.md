# Simple Chrome Extension - URL Saver

## Overview
A Chrome extension that allows users to save URLs/links for future reference. Users can input links and visit them later from a saved list.

**Current Status**: Functional Chrome extension with persistent storage.

## Current Implementation

### Files
- `index.html` - Main UI with input field, save button, and list container
- `index.js` - Core logic for saving and rendering links
- `index.css` - Basic styling for input, button, and list
- `practice/` - Learning/experimental folder (not part of main extension)

### How It Works (Current)
1. User enters a URL in the input field
2. Clicks "SAVE INPUT" button
3. URL is added to `mylinks` array and saved to `chrome.storage.local`
4. Links are rendered as clickable list items with `target="_blank"`
5. On popup open, saved links are automatically loaded from storage

### Current Limitations
- **No validation**: Accepts any text, not validated as URLs
- **No delete functionality**: Cannot remove saved links
- **No edit functionality**: Cannot modify saved links

## What's Missing (To Be a Functional Chrome Extension)

### Required for Chrome Extension
[x] 1. **`manifest.json`** - Required configuration file for any Chrome extension
   - Defines extension name, version, permissions, and entry points
   - Required for Chrome to recognize and load the extension

[x] 2. **Chrome Storage API** - For persistent data storage
   - Use `chrome.storage.local` or `chrome.storage.sync` instead of in-memory array
   - Data persists across browser sessions and device sync (with sync)

[x] 3. **Popup Page** - The extension popup interface
   - Current `index.html` would become the popup
   - Needs to be configured in manifest.json

### Recommended Features
4. **URL Validation** - Ensure inputs are valid URLs
   - Validate before saving
   - Show error messages for invalid URLs

5. **Delete Links** - Remove unwanted saved links
   - Add delete button for each list item
   - Confirm before deletion

6. **Edit Links** - Modify saved URLs
   - Allow editing existing links

7. **Empty State** - Show message when no links are saved
   - Better UX when list is empty

8. **Link Count** - Display number of saved links
   - Visual feedback on how many links are stored

9. **Export/Import** - Backup and restore saved links
   - Export to JSON
   - Import from JSON

10. **Search/Filter** - Find specific saved links
    - Search through saved links
    - Filter by criteria

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)
- Chrome Extension APIs (to be implemented)

## Project Structure
```
chromeExtension/
├── index.html          # Main UI (will become popup)
├── index.js            # Core logic
├── index.css           # Styling
├── .prettierrc.json    # Code formatting config
├── .gitignore          # Git ignore rules
├── README.md           # Basic project description
├── CLAUDE.md           # This file
└── practice/           # Learning/experimental code
    ├── index.html
    ├── index.js
    ├── index.css
    └── vite.config.js
```

## Development Notes
- The `here()` function in `index.js` appears to be unused/debug code
- The `practice/` folder contains unrelated learning exercises and can be ignored
- Current styling uses a green color scheme (#5f9341)
- Links open in new tab with `target="_blank"` and security attributes

## Next Steps (To Make It a Real Chrome Extension)
[x] 1. Create `manifest.json` with proper configuration
[x] 2. Replace in-memory array with `chrome.storage.local`
3. Add URL validation
4. Implement delete functionality
[x] 5. Test by loading as unpacked extension in Chrome Developer Mode
