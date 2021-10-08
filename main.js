// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('div#modal');
modal.classList.add("hidden")

const allHearts = document.querySelectorAll('span.like-glyph');

allHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
    .then(() => {
      if (heart.classList.value.includes('activated-heart')) {
        heart.classList.remove('activated-heart');
        heart.innerHTML = EMPTY_HEART;
      } else {
        heart.classList.add('activated-heart');
        heart.innerHTML = FULL_HEART;
      }
    })
    .catch(error => {
      setTimeout(() => modal.classList.add("hidden"), 3000);
      modal.classList.remove('hidden');
      document.querySelector('p#modal-message').innerHTML = error;
    })
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
