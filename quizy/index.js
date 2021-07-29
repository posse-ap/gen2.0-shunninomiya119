'use strict';

let choices = [
    ['たかなわ', 'たかわ', 'こうわ'],
    ['かめいど', 'かめど', 'かめと'],
    ['おかちまち', 'こうじまち', 'かゆまち'],
    ['おなりもん', 'ごせいもん', 'おかどもん'],
    ['とどろき', 'たたら', 'たたりき'],
    ['しゃくじい', 'いじい', 'せきこうい'],
    ['ぞうしき', 'ざっしき', 'ざっしょく'],
    ['おかちまち', 'ごしろちょう', 'みとちょう'],
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
    +`<img src="${images[i]}">`
    // idを固定しない方法を探す
    +`<p> <button id="choices_button0" onclick = "my_func(${[i]},0,0)">${choices[i][0]}</button> </p>`
    +`<p> <button id="choices_button1" onclick = "my_func(${[i]},1,0)">${choices[i][1]}</button> </p>`
    +`<p> <button id="choices_button2" onclick = "my_func(${[i]},2,0)">${choices[i][2]}</button> </p>`
    +'<div id="result_area"></div>'
    +'</div>';

    document.write(display_area);

};

const choices_button0 = document.getElementById('choices_button0');
const choices_button1 = document.getElementById('choices_button1');
const choices_button2 = document.getElementById('choices_button2');
const result_divided = document.getElementById('result_area');

// my_funcの引数は仮引数。実引数の意味がわかるような名前をつける
function my_func(question_number,choices_number,correct_answer_number) {
    if (choices_number === correct_answer_number) {
       choices_button0.classList.add('click_invalidation');
       choices_button1.classList.add('click_invalidation');
       choices_button2.classList.add('click_invalidation');
        
        // ボタンの背景色と文字の色を変える
       choices_button0.style.background='#287dff';
       choices_button0.classList.add('font_color');
   
       // 結果を表示するボックスを作る
       result_divided.classList.add('result_box');
   
       // エリア内に文章を表示する
       const header = document.createElement('h4');
       header.innerText = '正解！';
       result_divided.appendChild(header);
       header.classList.add('answer_underline'); // 正解！に下線をつける
   
       const paragraph = document.createElement('p');
       paragraph.innerText = `正解は「${choices_button0.innerText}」です！`;
       result_divided.appendChild(paragraph);   

    } else if (choices_number === 1) {
       choices_button0.classList.add('click_invalidation');
       choices_button1.classList.add('click_invalidation');
       choices_button2.classList.add('click_invalidation');
       
       choices_button1.style.background= '#ff5128';
       choices_button1.classList.add('font_color');
    　　// 正解のボタンも色を変える
       choices_button0.style.background='#287dff';
       choices_button0.classList.add('font_color');

       
       result_divided.classList.add('result_box');
   
       const header = document.createElement('h4');
       header.innerText = '不正解！';
       result_divided.appendChild(header);
       header.classList.add('answer_underline');
   
       const paragraph = document.createElement('p');
       paragraph.innerText = `正解は「${choices_button0.innerText}」です！`;
       result_divided.appendChild(paragraph);  

    } else {
        choices_button0.classList.add('click_invalidation');
        choices_button1.classList.add('click_invalidation');
        choices_button2.classList.add('click_invalidation');

        choices_button2.style.background= '#ff5128';
        choices_button2.classList.add('font_color');
        // 正解のボタンも色を変える
        choices_button0.style.background='#287dff';
        choices_button0.classList.add('font_color');

        
        result_divided.classList.add('result_box');
    
        const header = document.createElement('h4');
        header.innerText = '不正解！';
        result_divided.appendChild(header);
        header.classList.add('answer_underline');
    
        const paragraph = document.createElement('p');
        paragraph.innerText = `正解は「${choices_button0.innerText}」です！`;
        result_divided.appendChild(paragraph); 
        
    };
};






