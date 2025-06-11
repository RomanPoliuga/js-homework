// === Завдання 1 ===
const textInput = document.getElementById('textInput');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', () => {
  changeButton.textContent = textInput.value;
});

// === Завдання 2 ===
const changeImageBtn = document.getElementById('changeImageBtn');
changeImageBtn.addEventListener('click', () => {
  const img = document.getElementById('imageToChange');
  img.src = 'https://placekitten.com/200/200';
});

// === Завдання 3 ===
const changeLinkBtn = document.getElementById('changeLinkBtn');
changeLinkBtn.addEventListener('click', () => {
  const link = document.getElementById('myLink');
  const img = document.getElementById('myPic');

  link.href = 'https://gptonline.ai/';
  link.textContent = 'Перейти на GPTOnline';
  img.alt = 'Це зображення кота';
});

// === Завдання 4 ===
const updateListBtn = document.getElementById('updateListBtn');
updateListBtn.addEventListener('click', () => {
  const list = document.getElementById('myList');
  list.firstElementChild.textContent = 'Новий перший елемент';
});
