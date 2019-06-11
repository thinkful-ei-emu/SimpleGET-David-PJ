'use strict';
/*eslint-env jquery*/

//stored input
const handleSubmission = function(){ $('.js-display').click(event => {
  event.preventDefault();
  console.log('button pressed');
  const input = $('.js-input').val();
  fetchData(input);
});
};

const fetchData = function(num){
  let url = 'https://dog.ceo/dog-api/documentation/random/3';
  // url+= num;
  const option = {mode: 'no-cors'};
  fetch(url,option)
    .then(response => response.json())
    .then(jsonData => createData(jsonData))
    .catch(error => console.log(url));
};

const createData = function(jsonData){
  let messages = jsonData.message;
  console.log(messages);
  // return messages.map(getImg).join('');
};

const getImg = function(src) {
  return `<img src="${src}"/>`;
};

$(handleSubmission);


