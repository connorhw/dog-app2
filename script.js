'use strict';

function getDogImage(){
  $('#dog-form').submit(function(event){
    event.preventDefault();
    var numberOfPics = $('.number-of-dogs-entry').val();
    fetch('https://dog.ceo/api/breeds/image/random/'+ numberOfPics)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      //.catch(numberOfPics < 1 || numberOfPics > 50 => `Invalid input`)
  });
}

function displayResults(responseJson) {
  console.log(responseJson);
  clearDOM();
  for (let i=0; i<=responseJson.message.length-1; i++){
    $('.dogs').append(
      `<img src="${responseJson.message[i]}" class="results-img">`
    )
  }
  $('.results').removeClass('hidden');
}

function clearDOM() {
  $('.dogs').empty();
}

function watchForm() {
  getDogImage();
};

$(function() {
  console.log('App has loaded!');
  watchForm();
});