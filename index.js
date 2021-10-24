"use strict";

const modal = document.getElementById('modal');
const button = document.getElementById('record_post_button');
const header = document.getElementById('header');
const main = document.getElementById('main');



function display_modal() {
    modal.style.display = 'block';
};

button.addEventListener('click', display_modal);