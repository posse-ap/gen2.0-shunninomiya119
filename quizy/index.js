'use strict';

let choices = [
    ['たかなわ', 'たかわ', 'こうわ'],
    ['かめいど', 'かめど', 'かめと'],
    ['こうじまち', 'おかとまち', 'かゆまち'],
    ['おなりもん', 'ごせいもん', 'おかどもん'],
    ['とどろき', 'たたら', 'たたりき'],
    ['しゃくじい', 'いじい', 'せきこうい'],
    ['ぞうしき', 'ざっしき', 'ざっしょく'],
    ['おかちまち', 'ごしろちょう', 'みとちょう'],
    ['ししぼね', 'ろっこつ', 'しこね'],
    ['こぐれ', 'こばく', 'こしゃく'],
];

// 配列ランダムソート（シャッフル）関数
// 関数の定義はfor分の中ではなくグローバルでする！→グローバルで定義しておけばいつでも呼び出せるから
function shuffleArray(arr) {
    let n = arr.length;
    let temp = 0, i = 0;

    while (n) {
        i = Math.floor(Math.random() * n--);  // 0以上2未満のランダムな整数を取得
        temp = arr[n];
        arr[n] = arr[i];
        arr[i] = temp;
    }
    return arr;
};

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

// display_areaを空の文字列と置く
let display_area = '';

for (let i = 0; i < choices.length; i++) {
    // シャッフルする前の配列から正解を取ってくる
    let correct_answer = choices[i][0];
    // i番目の配列をシャッフル
    shuffleArray(choices[i]);
    // シャッフルした配列の中から、シャッフル前の配列から取ってきた正解のインデックスを見つける
    let correct_answer_index = choices[i].findIndex(element => element === correct_answer);

    display_area +='<div class="content_wrapper">'
    +`<h1 class="size question_underline">${i+1}. この地名はなんて読む？</h1>`
    +`<img src="${images[i]}" class="image">`
    // idは固有なもののため、問題番号ごとの選択肢ボタンと解答ボックスのidを取得できるように、idに問題番号を表す変数iをつける
    +`<p> <button class="button${i}" id="option_button${i}_0" onclick = "my_func(${[i]},0,${correct_answer_index})">${choices[i][0]}</button> </p>`
    +`<p> <button class="button${i}" id="option_button${i}_1" onclick = "my_func(${[i]},1,${correct_answer_index})">${choices[i][1]}</button> </p>`
    +`<p> <button class="button${i}" id="option_button${i}_2" onclick = "my_func(${[i]},2,${correct_answer_index})">${choices[i][2]}</button> </p>`
    +`<div id="answer_box${i}"></div>`
    +'</div>';
};

// headerの直後にdisplay_areaを挿入する
document.getElementById('header').insertAdjacentHTML('afterend', display_area);

// my_funcを定義する時の引数は仮引数。実引数の意味がわかるような名前をつける
function my_func(question_number, option_number, correct_answer_number) {
    // 選択番号のところをcorrect_answer_numberという変数で表してあげれば、正解のインデックスと同じ選択番号のボタンを正解のボタンとして取ってこれる
    let correct_button= document.getElementById(`option_button${question_number}_${correct_answer_number}`);

    // 不正解の時の処理のために、全てのボタンを取ってくる
    let option_button0 = document.getElementById(`option_button${question_number}_0`);
    let option_button1 = document.getElementById(`option_button${question_number}_1`);
    let option_button2 = document.getElementById(`option_button${question_number}_2`);

    let answer_box = document.getElementById(`answer_box${question_number}`);

    if (option_number === correct_answer_number) {
        // 全てのボタンを二度目は押せないようにする
        option_button0.classList.add('click_invalidation');
        option_button1.classList.add('click_invalidation');
        option_button2.classList.add('click_invalidation');

        // 正解の選択肢ボタンの背景色と文字の色を変える
        correct_button.style.background = '#287dff';
        correct_button.classList.add('font_color');

        // 解答を表示するボックスを作る
        answer_box.classList.add('answer_box');

        // 解答ボックス内に文章を表示する
        const paragraph1 = document.createElement('p');
        paragraph1.innerText = '正解！';
        answer_box.appendChild(paragraph1);
        paragraph1.classList.add('answer_underline'); // 正解！に下線をつける
        const paragraph2 = document.createElement('p');
        paragraph2.innerText = `正解は「${correct_button.innerText}」です！`;
        answer_box.appendChild(paragraph2);
        
    } else if (option_number === 0) {  // else ifは何回使っても良いため、全ボタンに対して不正解の時の処理を場合分けする。
        // if分は最初のifが通ったらその後のelseの処理は見ないため、elseifの条件式の中に正解のボタンがあったとしても影響はない

        // 全てのボタンを二度目は押せないようにする
        option_button0.classList.add('click_invalidation');
        option_button1.classList.add('click_invalidation');
        option_button2.classList.add('click_invalidation');

        //  押したボタンの色を間違えた時の色に変える
        option_button0.style.background = '#ff5128';
        option_button0.classList.add('font_color');

        // 正解の選択肢ボタンの色も変えてわかりやすくする
        correct_button.style.background = '#287dff';
        correct_button.classList.add('font_color');

        // 解答を表示するボックスを見えるようにする
        answer_box.classList.add('answer_box');

        // 解答ボックス内に文章を表示する
        const paragraph1 = document.createElement('p');
        paragraph1.innerText = '不正解！';
        answer_box.appendChild(paragraph1);
        paragraph1.classList.add('false_underline');
        const paragraph2 = document.createElement('p');
        paragraph2.innerText = `正解は「${correct_button.innerText}」です！`;
        answer_box.appendChild(paragraph2);

    } else if (option_number === 1) {
        // 全てのボタンを二度目は押せないようにする
        option_button0.classList.add('click_invalidation');
        option_button1.classList.add('click_invalidation');
        option_button2.classList.add('click_invalidation');

        //  押したボタンの色を間違えた時の色に変える
        option_button1.style.background = '#ff5128';
        option_button1.classList.add('font_color');

        // 正解の選択肢ボタンの色も変えてわかりやすくする
        correct_button.style.background = '#287dff';
        correct_button.classList.add('font_color');

        // 解答を表示するボックスを見えるようにする
        answer_box.classList.add('answer_box');

        // 解答ボックス内に文章を表示する
        const paragraph1 = document.createElement('p');
        paragraph1.innerText = '不正解！';
        answer_box.appendChild(paragraph1);
        paragraph1.classList.add('false_underline');
        const paragraph2 = document.createElement('p');
        paragraph2.innerText = `正解は「${correct_button.innerText}」です！`;
        answer_box.appendChild(paragraph2);
    
    } else {
        // 全てのボタンを二度目は押せないようにする
        option_button0.classList.add('click_invalidation');
        option_button1.classList.add('click_invalidation');
        option_button2.classList.add('click_invalidation');

        //  押したボタンの色を間違えた時の色に変える
        option_button2.style.background = '#ff5128';
        option_button2.classList.add('font_color');

        // 正解の選択肢ボタンの色も変えてわかりやすくする
        correct_button.style.background = '#287dff';
        correct_button.classList.add('font_color');

        // 解答を表示するボックスを作る
        answer_box.classList.add('answer_box');

        // 解答ボックス内に文章を表示する
        const paragraph1 = document.createElement('p');
        paragraph1.innerText = '不正解！';
        answer_box.appendChild(paragraph1);
        paragraph1.classList.add('false_underline');
        const paragraph2 = document.createElement('p');
        paragraph2.innerText = `正解は「${correct_button.innerText}」です！`;
        answer_box.appendChild(paragraph2);
    };
};








