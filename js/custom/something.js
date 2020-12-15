function type(element, text) {
  new TypeIt("#" + element, {
    strings: text,
    speed: 80,
    waitUntilVisible: true
  }).go();
}

type("first",
  "At the first time i met you behind GSG, i felt something that made me smile. It was weird because i didn't know you, never met you, even saw you before."
);

setTimeout(() => {
  type("second",
    "After that scene, i often keep my eyes on you in my silent. Covered something inside and no one knew that. Then time flied seconds by seconds, minutes by minutes, days by days, i knew that evidently you had someone in yourlife."
  )
}, 19000);


setTimeout(() => {
  type("third",
    "Of course when people entered university level, they would have new relation, friends, circle, and it was just like waw, we had same circle. It made me smile (again) a little bit. I always holded my feeling and still no one knew it."
  )
}, 40000);


setTimeout(() => {
  type("fourth",
    "Our circle forced us to meet often. I felt we were getting closer every days. Besides, i knew you were with someone and wanted to close this feeling. But, this feeling kept making me think about you."
  )
}, 59000);

setTimeout(() => {
  type("fifth",
    "Yeah, eventhough i was watching you in class, or outside class. I don't want it bothered my study. So i tried hard to study very well, prepare my life even without you. But, i think i am a multitasking person. Proven by i kept my eyes on you and still not bad on my grade, Alhamdulillah :)) "
  )
}, 78000);

setTimeout(() => {
  type("sixth",
    "I was dizzy thinking about this, our circle frequently engaged us to take walks, watching movies together, and stuff like that which made us meet more often and often."
  )
}, 102000);

setTimeout(() => {
  type("seventh",
    "I felt tired with myself, with this weird feeling (Beside other problems), so i tried to change my circle with Fergie, Bus, and Fuad, thinking it could be made me more calm. They were really good to me, especialy Fergie, one of my best that i never forget. When no one supported me, he was there. Sometimes on weekend, i went to his home just to spent times together playing in his room (FIFA) "
  )
}, 132000);

setTimeout(() => {
  type("eight",
    "It's time. Trying to stayed away but turned out to be closer. Yes, i remembered we start chatting a lot, whether you asked for help with your KP System, listening your long story about your grandfather, or just playing Hago until at 3am. It was full of fun. Thanks "
  )
}, 175000);

setTimeout(() => {
  type("nineth",
    "Something can happen that we never imagine before. You also had problems with him, you were getting closer to me, and it was really deep 'Looking for someone that could lead me better'. Suddenly on my mind, 'oh okay'. After that, i tried my best to take care of you, made you happy every single day, and just like Callum Scott part 'I climb every mountain and swim every ocean, just to be with you...' (#hehehehe). "
  )
}, 195000);

setTimeout(() => {
  type("tenth",
    "This was all we know. I loved you just the way you are, not demanded anything except to be better from you because i really loved you. How can i forget something that i spent every days with? Although for only 5-6 months. It meant a lot for me. "
  )
}, 220000);

setTimeout(() => {
  type("eleventh",
    "Everyday we passed things together, you knew me very well, you knew how i was, then you started thinking you were not good enough for me. I explained with thousand words, and still you kept with your thinking, i did everything just to make you sure, you didn't hear, i tried hard to convince you, 'I am not looking for somebody with superhuman gift, just something i can turn to somebody i can miss' ~ dududu dududu dudu. You were with your mind. "
  )
}, 240000);

setTimeout(() => {
  type("twelfth",
    "Be honest, i was sad but what else i could do? Everything had been done and i didn't find any ways to enter your life anymore. So i thought i must move on, anything i did to forget you: <br> 1. Removing all things related to you <br> 2. Blocking all things related to you <br> 3. Even started hating you (admitted it's not good) <br> 4. Being with someone else "
  )
}, 265000);

setTimeout(() => {
  type("thirteenth",
    "Almost all things i have done to forget you, and it started working. I recover myself slowly but it's getting better. Then i tried to get through the day well. When i saw your chat on groups, i said to myself 'Yaudalah, udah lewat, gpp'. It worked, but not all function worked. Deep within my heart, still you were sitting there... "
  )
}, 286000);

setTimeout(() => {
  type("fourteenth",
    "Times changed, i still feel the same to you, it might be changed a little because we grow up and have better vision for future. <br>'Mungkin kalo i say' <br> 'Sigit, would you like to start all over again with me?' <br> 'What would you say' <br> :) "
  )
}, 300000);

setTimeout(() => {
  type("myAnswer",
    "You know i love you Contact, Amel, Jasmine or whoever your name is. I just love you really. But, i don't know when you asked me that caused you are bored at home and cannot hang out with your friends, only supposition question, or deep from your heart. Other than that, i am afraid when you are with me i set rules for your life, i don't want to do that, you are an active person, i can't prevent your activity and i really don't want to. Further when you asked me, i didn't know what to say after what i have been through and you have been through. I am afraid to dissapoint you and you are afraid to hurt me for the second times. I only can say, i don't want to lose you like i lose you before or lose you in any other way. I can't answer we could start all over again or not, i just love you and don't want to lose you again. Let times answer this question, because times that bring us to this feeling. Just like we talked on last night, 'Kalo jodoh ya udah lanjut itu yang terbaik, kalo engga, berarti itu yang terbaik'. I am focusing on my life, if you want to accompany me through things what will happen in front of, and grow together, start together, be better together until times answer your question, i would be very happy... <br><br> ~ Nitip"
  );
}, 315000);

// Images
let images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg"
]


randomImage = () => {
  return images[Math.floor(Math.random() * images.length)]
}

// randomSong = () => {
//   return songs[Math.floor(Math.random() * songs.length)]
// }

// get tag img
let ourImg = document.querySelectorAll('img');
// convert to array
let ourImgArray = Array.prototype.slice.call(ourImg);
// getRandom img
ourImgArray.slice(1).forEach(element => {
  element.src = "img/custom/"+randomImage();
});

// const ourAudio = document.querySelector('source');
// ourAudio.src = "assets/"+randomSong()+".mp3";

const btnOurSong = document.querySelector('#btnOurSong');
const ourSong = document.querySelector('#ourSong');

function createElement(classes) {
  const el = document.createElement('i');
  el.classList.add('fas');
  el.classList.add(classes);
  return el;
}
const play = createElement('fa-play');
const pause = createElement('fa-pause');
btnOurSong.appendChild(play);

btnOurSong.classList.remove('d-none');

btnOurSong.addEventListener('click', function () {
  // Play Perfect
  if (ourSong.paused) {
    ourSong.play();
    btnOurSong.replaceChild(pause, play)
  } else {
    ourSong.pause();
    btnOurSong.replaceChild(play, pause)
  }
});

// Mengatur waktu akhir perhitungan mundur
let countDownDate = new Date("Sept 10, 2022 08:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
let x = setInterval(function () {

  // Untuk mendapatkan tanggal dan waktu hari ini
  let now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  let distance = countDownDate - now;

  // Perhitungan waktu untuk hari, jam, menit dan detik
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById("countdown").innerHTML = "<h3 class='text-primary'>"+ days + "d " + hours + "h " +
    minutes + "m " + seconds + "s "+"</h3>";

  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<span class='text-primary'> Congrats to whoever be with you.</span>";
  }
}, 1000);
