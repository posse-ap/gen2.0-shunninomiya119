"use strict";

const modal = document.getElementById('modal');
const button = document.getElementById('record_post_button');
const header = document.getElementById('header');
const main = document.getElementById('main');


// モーダル画面の表示
function display_modal() {
    modal.style.display = 'block';
};

button.addEventListener('click', display_modal);

// モーダル画面の非表示
const modal_close_button = document.getElementById('modal_close_button');

function close_modal() {
    modal.style.display = 'none';
};

modal_close_button.addEventListener('click', close_modal);





let checkbox_array = document.querySelectorAll('.checkbox');

checkbox_array.forEach(checkbox => {
    checkbox.addEventListener('change', checked);
});

console.log(checkbox_array)
function checked(e) {
   e.target = checked_box;
   checked_box.style.backgroundColor = 'blue';
}