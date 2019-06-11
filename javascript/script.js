'use strict';
/*eslint-env jquery*/

//stored input
const handleSubmission = function(){ $('.js-display').click(event => {
  event.preventDefault();
  const input = $('.js-input').val();
  fetchData(input);
});
};

const fetchData = function(num){
  let url = 'https://dog.ceo/dog-api/documentation/random/';
  url+= num;
  const option = {mode: 'no-cors'};
  fetch(url, option).then(data => data.json()).then(obj => console.log(obj));

};

const createData = function(jsonData){
  let messages = jsonData.message;
  console.log(jsonData);
  // return messages.map(getImg).join('');
};

const getImg = function(src) {
  return `<img src="${src}"/>`;
};

$(handleSubmission);


