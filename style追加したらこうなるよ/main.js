const onclick = () => {
  const textElement = document.querySelector('.memoText');
  if(textElement.value === ""){
    alert('メモを追加してください');
  }else{
    const text = textElement.value;
    textElement.value = '';

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;
    const ul = document.querySelector('.memoList');

    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.addEventListener('click', () => {
      const target = removeButton.closest('li');
      ul.removeChild(target);
    })

    li.appendChild(p);
    li.appendChild(removeButton);
    ul.appendChild(li);
  }
}
document.querySelector('.addMemo').addEventListener('click', () => onclick());