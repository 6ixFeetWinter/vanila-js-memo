const onclick = () => {
  const textElement = document.querySelector('.memoText');
  if(textElement === ""){
    alert('メモを追加してください');
  }else{
    const text = textElement.value;
    textElement.value = '';

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;
    const ul = document.querySelector('.memoList');

    const removeButton = document.createElement('button');
    removeButton.textContent = '削除';
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