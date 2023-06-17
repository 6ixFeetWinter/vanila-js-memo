//onClick関数
const onclick = () => {
  const textElement = document.querySelector('.memoText');//入力された情報を確認するためinpuitタグを取得　変数textElementに格納
  if(!textElement.value){　//インプットタグの中身があるか確認 !textElement.value === textElement.value === ""ってこと
    alert('メモを追加してください');
  }else{
    const text = textElement.value; //インプットタグの中身を変数テキストに格納
    textElement.value = "";

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
//ボタンを取得、クリックイベントでオンクリック関数実行
document.querySelector('.addMemo').addEventListener('click', () => onclick());