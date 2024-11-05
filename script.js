const contentSection = document.getElementById('content');
const enterButton = document.getElementById('enter');
const labelSpan = document.getElementById('label');
const theInfiniteImageStore = [];

function addImage(path, id) {
    if (document.getElementById(id)) {
        return;
    }
    const image = document.createElement('img');
    image.src = path;
    image.id = id;
    contentSection.append(image);
    theInfiniteImageStore.push(image);
}

function removeImage(id) {
    const images = theInfiniteImageStore.filter((image) => image.id === id);
    images.forEach((image) => image.remove());
}

function exitOnEscKey(event) {
    if (event.code !== 'Escape') {
        return;
    }
    enterButton.style.display = '';
    labelSpan.textContent = '';
    removeImage('inside');
    addImage('./outside.jpg', 'outside');
}

function enter() {
    enterButton.style.display = 'none';
    labelSpan.textContent = 'Press Esc to exit';
    removeImage('outside');
    addImage('./inside.jpg', 'inside');
    document.body.addEventListener('keyup', (event) => exitOnEscKey(event));
}

addImage('./outside.jpg', 'outside');
enterButton.addEventListener('click', enter);