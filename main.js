// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function changeHeart(icon) {
  if (icon === EMPTY_HEART){
    icon = FULL_HEART;
  } else { icon = EMPTY_HEART }
}

const allHearts = document.querySelectorAll('span.like-glyph')

allHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    // const config = {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //     Accept: "application/json"
    //   },
    //   body: {
    //     "like-glyph": FULL_HEART
    //   }
    // };

    fetch(mimicServerCall(url, config))
    .then(resp => resp.json())
    .then(json => {
      changeHeart(heart);
      alert('You changed the heart!')
    })
    .catch(error => {
      const modal = document.querySelector('div#modal');
      modal.classList.remove('hidden');
      const p = document.querySelector('p#modal-message')
      p.innerHTML = error;

      setTimeout((modal.ClassName = 'hidden'), 3000)
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
