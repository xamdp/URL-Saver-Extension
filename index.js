let mylinks = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const errorEl = document.getElementById('error-message');

inputBtn.addEventListener('click', function () {
	const url = inputEl.value.trim();
	errorEl.style.display = 'none';
	if (url === '') {
		errorEl.textContent = 'Please enter a URL';
		errorEl.style.display = 'block';
		return;
	}

	if (!isValidUrl(url)) {
		errorEl.textContent = 'Invalid URL. Must start with http:// or https://';
		errorEl.style.display = 'block';

		return;
	}

	mylinks.push(url);
	inputEl.value = '';

	chrome.storage.local.set({ mylinks: mylinks }, function () {
		renderLinks();
	});
});

function isValidUrl(string) {
	try {
		const url = new URL(string);
		return url.protocol === 'http:' || url.protocol === 'https:';
	} catch (_) {
		return false;
	}
}

function renderLinks() {
	const emptyMessageEl = document.getElementById('empty-message');
	if (mylinks.length === 0) {
		ulEl.innerHTML = '';
		emptyMessageEl.style.display = 'block';
		return;
	}

	emptyMessageEl.style.display = 'none';

	let listItems = '';
	for (let link = 0; link < mylinks.length; link++) {
		listItems += `<li class="link-item"><a target="_blank" rel="noopener noreferrer" href="${mylinks[link]}"> ${mylinks[link]}</a>
			<button class="delete-btn" data-index="${link}">Delete
			</button></li>`;
	}
	ulEl.innerHTML = listItems;

	const deleteButtons = document.querySelectorAll('.delete-btn');
	deleteButtons.forEach((button) => {
		button.addEventListener('click', handleDelete);
	});
}

function handleDelete(event) {
	const index = parseInt(event.target.dataset.index);
	mylinks.splice(index, 1);

	chrome.storage.local.set({ mylinks: mylinks }, function () {
		renderLinks();
	});
}

function loadLinks() {
	chrome.storage.local.get(['mylinks'], function (result) {
		if (result.mylinks) {
			mylinks = result.mylinks;
			renderLinks();
		}
	});
}

// debugging purpose
function here() {
	for (let i = 0; i < mylinks.length; i++) {
		console.log('just something');
	}
}

loadLinks();
