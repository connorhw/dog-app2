'use strict';

function getDogImage(){
  $('#dog-form').submit(function(event){
    event.preventDefault();
    var numberOfPics = $('.number-of-dogs-entry').val();
    fetch('https://dog.ceo/api/breeds/image/random/'+ numberOfPics)
      .then(response => response.json())
      .then(responseJson => 
      displayResults(responseJson));
  });
}

/*
function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
}
*/

function watchForm() {
  getDogImage();
};

$(function() {
  console.log('App has loaded!');
  watchForm();
});