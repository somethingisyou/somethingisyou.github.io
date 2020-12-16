const btnOurSong = document.querySelector('#btnOurSong');
const ourSong = document.querySelector('#ourSong');

function createElement(classes) {
  const el = document.createElement('i');
  el.classList.add('fas');
  el.classList.add(classes);
  return el;
}

btnOurSong.addEventListener('click', function () {
  // Play Song
  if (ourSong.paused) {
    ourSong.play();
    btnOurSong.textContent = "Enough";
  } else {
    ourSong.pause();
    btnOurSong.textContent = "Listen";
  }
});