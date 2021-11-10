"use strict";

const modal = document.getElementById('modal');
const modal_background = document.getElementById('modal_background');
const button = document.getElementById('record_post_button');
const sp_button = document.getElementById('footer_record_post_button');


// モーダル画面の表示
function display_modal() {
    modal.style.display = 'block';
    modal_background.style.display = 'block';
};

button.addEventListener('click', display_modal);
sp_button.addEventListener('click', display_modal);


// loading画面の表示
const loading_modal = document.getElementById('loading');
const loading_content = document.getElementById('loading_content');
const done_content = document.getElementById('done_content');
const modal_record_post_button = document.getElementById('modal_record_post_button');

function loading() {
    loading_modal.style.display = 'block';
    setTimeout(() => {
        loading_content.style.display = 'none';
        done_content.style.display = 'block';
    }, 3000);
}

modal_record_post_button.addEventListener('click', loading)


// 三つのモーダル画面の非表示
const modal_close_button = document.getElementById('modal_close_button');
const loading_close_button = document.getElementById('loading_close_button');
let close_buttons = [modal_close_button, loading_close_button];
// 入力フォームの内容
const formElement = document.getElementById('modal_form');
let checkbox_containers = document.querySelectorAll('.checkbox_container');

function close_modal() {
    modal.style.display = 'none';
    loading_modal.style.display = 'none';
    modal_background.style.display = 'none';
    // 入力フォームのリセット
    formElement.reset();
    // 選択したチェックボックスの色を戻す
    checkbox_containers.forEach(container => {
        container.style.background ='#f5f5f8'
    });
    loading_content.style.display = 'block';
    done_content.style.display = 'none';
};

close_buttons.forEach(close_button => {
    close_button.addEventListener('click', close_modal);
});

// チェックボックスがチェックされたら背景色を変える
let checkboxes = document.querySelectorAll('.checkbox');

function checked(e) {
    let checked_box = e.target;
    let checkbox_container = checked_box.parentNode;
    checkbox_container.style.background = '#3ccfff';
};

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', checked)
});



// twitter共有機能
const twitter_checkbox = document.modal_form.twitter_checkbox // checkboxの取得
modal_record_post_button.addEventListener('click', function(event) {
    if (twitter_checkbox.checked) {
        event.preventDefault();
    var left = Math.round(window.screen.width / 2 - 275);
    var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
    window.open(
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("twitter_comment").value),
        null,
        "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);
    }
});

// const $form = $('#twitter_comment')
// $('.modal_record_post_button').on('click', evt => {
//   $form.submit()
//   $form[0].reset()
//   return false
// })