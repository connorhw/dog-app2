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


function displayResults(responseJson) {
  console.log(responseJson);

  for (let i=0; i<=responseJson.length-1; i++){
    $('.results-img').append(
      `<img src="${responseJson[i].message}" class="results-img">`
    )
  }
  $('.results').removeClass('hidden');
}


function watchForm() {
  getDogImage();
};

$(function() {
  console.log('App has loaded!');
  watchForm();
});