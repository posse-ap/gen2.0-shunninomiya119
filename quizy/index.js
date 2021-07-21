'use strict';
const correct_answer_button = document.getElementById('correct_answer');
const incorrect_answer_button = document.getElementById('incorrect_answer');
const incorrect_answer_button2 = document.getElementById('incorrect_answer2');
const result_divided = document.getElementById('result_area');

let choices = [
    ['たかなわ', 'たかわ', 'こうわ'],
    ['かめと', 'かめど', 'かめいど'],
    ['おかちまち', 'こうじまち', 'かゆまち'],
    ['おなりもん', 'ごせいもん', 'おかどもん'],
    ['たたりき', 'たたら', 'とどろき'],
    ['せきこうい', 'いじい', 'しゃくじい'],
    ['ぞうしき', 'ざっしき', 'ざっしょく'],
    ['みとちょう', 'ごしろちょう', 'おかちまち'],
    ['ししぼね', 'ろっこつ', 'しこね'],
    ['こぐれ', 'こばく', 'こしゃく'],
    
];

let images = [
    'https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png',,
    'https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png',
    'https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png',
    'https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png',

];

let main;
 main +='<div id="display_area" class = "container_wrapper">'
 +'<h3 class = "size question_underline">1.この地名はなんて読む？</h3>'
 +'<img src= alt="">'
 +'<p> <button id="correct_answer"></button></p>'
 +'<p> <button id="incorrect_answer"></button> </p>'
 +'<p> <button id="incorrect_answer2"></button> </p>'
 +'<div id="result_area"></div>'
 +'</div>'

 const loop = document.getElementById('loop');
 loop.innerHTML = main




for (let i = 0; i < choices.length; i++) {
    
    correct_answer_button.innerText = 
    
}

//無名関数を使って結果を表示する
correct_answer_button.onclick = () => {
    // 全てのボタンが2回目は押せないようにする
    correct_answer_button.classList.add('click_invalidation');
    incorrect_answer_button.classList.add('click_invalidation');
    incorrect_answer_button2.classList.add('click_invalidation');

    // ボタンの背景色と文字の色を変える
    correct_answer_button.style.background='#287dff';
    correct_answer_button.classList.toggle('font_color');

    // 結果を表示するエリアを作る
    result_divided.classList.add('result_area');

    // エリア内に文章を表示する
    const header = document.createElement('h4');
    header.innerText = '正解！';
    result_divided.appendChild(header);
    header.classList.add('answer_underline'); // 正解！に下線をつける

    const paragraph = document.createElement('p');
    paragraph.innerText = '正解は「' + correct_answer_button.innerText + '」です！';
    result_divided.appendChild(paragraph);

}

// 同様にもう二つの選択しに対しても設定
incorrect_answer_button.onclick = () => {
    correct_answer_button.classList.add('click_invalidation');
    incorrect_answer_button.classList.add('click_invalidation');
    incorrect_answer_button2.classList.add('click_invalidation');
    
    incorrect_answer_button.style.background= '#ff5128';
    incorrect_answer_button.classList.add('font_color');
    // 正解のボタンも色が変わるようにする
    correct_answer_button.style.background='#287dff';
    correct_answer_button.classList.toggle('font_color');

    result_divided.classList.add('result_area');

    const header = document.createElement('h4');
    header.innerText = '不正解！';
    result_divided.appendChild(header);
    header.classList.add('answer_underline');

    const paragraph = document.createElement('p');
    paragraph.innerText = '正解は「' + correct_answer_button.innerText + '」です！';
    result_divided.appendChild(paragraph);
 
}

incorrect_answer_button2.onclick = () => {
    correct_answer_button.classList.add('click_invalidation');
    incorrect_answer_button.classList.add('click_invalidation');
    incorrect_answer_button2.classList.add('click_invalidation');

    incorrect_answer_button2.style.background= '#ff5128';
    incorrect_answer_button2.classList.toggle('font_color')
    correct_answer_button.style.background='#287dff';
    correct_answer_button.classList.toggle('font_color');
    
    result_divided.classList.add('result_area');

    const header = document.createElement('h4');
    header.innerText = '不正解！';
    result_divided.appendChild(header);
    header.classList.add('answer_underline');

    const paragraph = document.createElement('p');
    paragraph.innerText = '正解は「' + correct_answer_button.innerText + '」です！';
    result_divided.appendChild(paragraph);
}






