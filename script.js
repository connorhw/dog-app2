'use strict';

function getDogImage(){
  $('#dog-form').submit(function(event){
    event.preventDefault();
    var numberOfPics = $('.number-of-dogs-entry').val();
    fetch('https://dog.ceo/api/breeds/image/random/'+ numberOfPics)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson));
  });
}


function displayResults(responseJson) {
  console.log(responseJson);

  for (let i=0; i<=responseJson.message.length-1; i++){
    $('.dogs').append(
      `<img src="${responseJson.message[i]}" class="results-img">`
    )
  }
  $('.results').removeClass('hidden');
}

function clearDOM() {
  $('#dog-form').clear();
}
/*
function restartQuiz() {
    location.reload(watchForm());
  
  $('.submit').replaceWith(
    `<button type="reset" class="reset">Reset</button>`
  )
  watchForm($('.reset').replaceWith(`<button type="submit" class="submit">THESE!</button>`));

  $('.main').on('click', '.submit', function(event) {
    location.reload(getDogImage());
  });

}
*/

function watchForm() {
  getDogImage();
  clearDOM();
};

$(function() {
  console.log('App has loaded!');
  watchForm();
});