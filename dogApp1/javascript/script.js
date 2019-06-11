'use strict';
/*eslint-env jquery*/

//stored input
const handleSubmission = function(){ $('.js-display').click(event => {
  event.preventDefault();
  const input = $('.js-input').val();
  if(input > 50 || input < 1 ){
    alert('please enter a value between 1 and 50');
  }else{
    fetchData(input); 
  }
});
};

function fetchData(input) {
  let url = 'https://dog.ceo/api/breeds/image/random/';
  url += input;
  fetch(url).then(data => data.json()).then(obj => createData(obj));
}


const createData = function(jsonData){
  let messages = jsonData.message;
  console.log(jsonData.message);
  addHTML(messages.map(getImg).join(''));
};
function addHTML(theHtml){
  console.log('adding imgs');
  let result = '<section class="js-results">';
  result += theHtml;
  result += '</section>';
  $('.js-results').replaceWith(result);
}
const getImg = function(src) {
  return `<img src="${src}"/>`;
};

$(handleSubmission);


