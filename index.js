mylinks = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
    mylinks.push(inputEl.value);
    inputEl.value = '';
    renderLinks();
});

function renderLinks() {
    let listItems = '';
    for (let link = 0; link < mylinks.length; link++) {
        listItems += `<li><a target="_blank" rel="noopener noreferrer" href="${mylinks[link]}"> ${mylinks[link]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
}

function here() {
    for (let i = 0; i < mylinks.length; i++) {
        console.log('just something');
    }
}
