// function addItems(num) {
//   const list = document.getElementById('list');
//   for (let i = 0; i < num; i++) {
//     const item = document.createElement('li');
//     item.textContent = `Item ${list.childElementCount + 1}`;
//     list.appendChild(item);
//   }
// }

// addItems(10);

// window.addEventListener('scroll', () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     addItems(2);
//   }
// });
for (let i = 0; i < 10; i++) {
  addItem(i);
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItem(i++);
    addItem(i++);
  }
});

function addItem(i) {
  const li = document.createElement('li');
  li.textContent = 'Item ' + i;
  document.querySelector('ul').appendChild(li);
}