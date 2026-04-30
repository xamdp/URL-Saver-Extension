let mylinks = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
	if (inputEl.value.trim() === '') return;
	mylinks.push(inputEl.value);
	inputEl.value = '';
	chrome.storage.local.set({ mylinks: mylinks }, function () {
		renderLinks();
	});
});

function renderLinks() {
	let listItems = '';
	for (let link = 0; link < mylinks.length; link++) {
		listItems += `<li><a target="_blank" rel="noopener noreferrer" href="${mylinks[link]}"> ${mylinks[link]}</a></li>`;
	}
	ulEl.innerHTML = listItems;
}

function loadLinks() {
	chrome.storage.local.get(['mylinks'], function (result) {
		if (result.mylinks) {
			mylinks = result.mylinks;
			renderLinks();
		}
	});
}

function here() {
	for (let i = 0; i < mylinks.length; i++) {
		console.log('just something');
	}
}

loadLinks();
