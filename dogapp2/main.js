/* eslint-disable no-console */
/* eslint-env jquery */
'use strict';

function getData(input){
  // handle fetch request
  let url = 'https://dog.ceo/api/breed/';
  url += input + '/images/random/1';
  fetch(url).then(data => data.json())
    .then(obj => createHtml(obj))
    .catch(e=>alert(e.message));
}
function handleInput(){
  //event handler
  $('.js-form').submit((e) =>{
    e.preventDefault();
    getData($('.js-input').val());
  });
}
function handleError(e){
  alert(e.message);
}
function createHtml(data){
  console.log(data);
  if(data.code === '404'){
    alert('sorry that breed wasnt found');
  }else{
    updateHtml(`<img src="${data.message}">`);
  }
}
function updateHtml(html){
  //adds string to document
  $('.js-output').html(html);
}

$(handleInput);