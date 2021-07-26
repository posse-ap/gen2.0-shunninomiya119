'use strict';

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
    'https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png',
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

for (let i = 0; i < choices.length; i++) {
    
    let display_area = '';
    display_area +='<div id="display_area" class = "container_wrapper">'
    +'<h3 class = "size question_underline">1.この地名はなんて読む？</h3>'
    +`<img src="${images[i]}">`;
    for (let k = 0; k < choices[i].length; k++) {
    display_area +=`<p> <button id="choices_button">${choices[i][k]}</button></p>`
    };
    display_area +='<div id="result_area"></div>'
    +'</div>';

    document.write(display_area);
    console.log(display_area);

};

const choices_button = document.getElementById('choices_button');
const result_divided = document.getElementById('result_area');

choices_button.addEventListener('click', my_func);

function my_func() {
    if (choices[0][0] || [1][2] || [2][0] || [3][0] || [4][2] || [5][2] || [6][0] || [7][2] || [8][0] [9][0]) {
        // ボタンの背景色と文字の色を変える
       choices_button.style.background='#287dff';
       choices_button.classList.toggle('font_color');
   
       // 結果を表示するエリアを作る
       result_divided.classList.add('result_area');
   
       // エリア内に文章を表示する
       const header = document.createElement('h4');
       header.innerText = '正解！';
       result_divided.appendChild(header);
       header.classList.add('answer_underline'); // 正解！に下線をつける
   
       const paragraph = document.createElement('p');
       paragraph.innerText = '正解は「' + choices_button.innerText + '」です！';
       result_divided.appendChild(paragraph);   
   } else {
       choices_button.style.background= '#ff5128';
       choices_button.classList.add('font_color');
       // 正解のボタンも色が変わるようにする
       choices_button.style.background='#287dff';
       choices_button.classList.toggle('font_color');
   
       result_divided.classList.add('result_area');
   
       const header = document.createElement('h4');
       header.innerText = '不正解！';
       result_divided.appendChild(header);
       header.classList.add('answer_underline');
   
       const paragraph = document.createElement('p');
       paragraph.innerText = '正解は「' + choices_button.innerText + '」です！';
       result_divided.appendChild(paragraph);    
   };
};

