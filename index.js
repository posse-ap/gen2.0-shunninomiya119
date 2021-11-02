"use strict";

const modal = document.getElementById('modal');
const modal_background = document.getElementById('modal_background');
const button = document.getElementById('record_post_button');
const sp_button = document.getElementById('footer_record_post_button');
const header = document.getElementById('header');
const main = document.getElementById('main');


// モーダル画面の表示
function display_modal() {
    modal.style.display = 'block';
    modal_background.style.display = 'block';
};

button.addEventListener('click', display_modal);
sp_button.addEventListener('click', display_modal);

// モーダル画面の非表示
const modal_close_button = document.getElementById('modal_close_button');

function close_modal() {
    modal.style.display = 'none';
    modal_background.style.display = 'none';
};

modal_close_button.addEventListener('click', close_modal);

