'use strict';
/*eslint-env jquery*/

//stored input
const handleSubmission = function(){ $('.js-display').click(event => {
  event.preventDefault();
  const input = $('.js-input').val();
  fetchData(input);
});
};

function fetchData() {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => 
      createData(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


const createData = function(jsonData){
  let messages = jsonData.message;
  console.log(jsonData.message);
  addHTML(messages.map(getImg).join(''));
};
function addHTML(theHtml){
  $('.js-results').append(theHtml);
}
const getImg = function(src) {
  return `<img src="${src}"/>`;
};

$(handleSubmission);


