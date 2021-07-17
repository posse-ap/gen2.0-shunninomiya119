'use strict';
const correctAnswerButton = document.getElementById('correct-answer');
const incorrectAnswerButton = document.getElementById('incorrect-answer');
const incorrectAnswerButton2 = document.getElementById('incorrect-answer2');
const resultDivided = document.getElementById('result-area');

//無名関数で正解を表示する
correctAnswerButton.onclick = () => {
    // 全てのボタンが2回目は押せないようにする
    correctAnswerButton.classList.add('click_invalidation');
    incorrectAnswerButton.classList.add('click_invalidation');
    incorrectAnswerButton2.classList.add('click_invalidation');

    // ボタンの背景色と文字の色を変える
    correctAnswerButton.style.background='#287dff';
    correctAnswerButton.classList.toggle('font-color')

    // 結果を表示するエリアを作る
    resultDivided.classList.add('result-area');

    // エリア内に文章を表示する
    const header = document.createElement('h4');
    header.innerText = '正解！';
    resultDivided.appendChild(header);
    header.classList.add('underline');　// 正解！に下線をつける

    const paragraph = document.createElement('p');
    paragraph.innerText = '正解は「' + correctAnswerButton.innerText + '」です！';
    resultDivided.appendChild(paragraph);

}

incorrectAnswerButton.onclick = () => {
    correctAnswerButton.classList.add('click_invalidation');
    incorrectAnswerButton.classList.add('click_invalidation');
    incorrectAnswerButton2.classList.add('click_invalidation');
    
    incorrectAnswerButton.style.background= '#ff5128';
    incorrectAnswerButton.classList.toggle('font-color')

    resultDivided.classList.add('result-area');

    const header = document.createElement('h4');
    header.innerText = '不正解！';
    resultDivided.appendChild(header);
    header.classList.add('underline');

    const paragraph = document.createElement('p');
    paragraph.innerText = '正解は「' + correctAnswerButton.innerText + '」です！';
    resultDivided.appendChild(paragraph);
 
}

incorrectAnswerButton2.onclick = () => {
    correctAnswerButton.classList.add('click_invalidation');
    incorrectAnswerButton.classList.add('click_invalidation');
    incorrectAnswerButton2.classList.add('click_invalidation');

    incorrectAnswerButton2.style.background= '#ff5128';
    incorrectAnswerButton2.classList.toggle('font-color')
    
    resultDivided.classList.add('result-area');

    const header = document.createElement('h4');
    header.innerText = '不正解！';
    resultDivided.appendChild(header);
    header.classList.add('underline');

    const paragraph = document.createElement('p');
    paragraph.innerText = '正解は「' + correctAnswerButton.innerText + '」です！';
    resultDivided.appendChild(paragraph);
}







