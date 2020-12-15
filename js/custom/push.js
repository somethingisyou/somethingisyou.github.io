let messages = [
 "You hurted me as always",
 "When you left me and it was fine",
 "I know i never had a chance, but i don't believe it",
 "I just still love you even it's hurting",
 "I don't know how to forget you",
 "You are running in my mind",
 "You are running in my heart also",
 "Stay or Leave? pls stay :(",
 "If you are not good enough for me now, hopefully you always try to be good enough for me tomorrow",
 ":(",
]

randomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)]
  }
  let message;
  setInterval(() => {
      message = randomMessage();
  }, 1000);

  setInterval(()=>{
    Push.create("Hello, I know it's you!", {
        body: message,
        icon: 'https://jiwamuku.id/rps//cat-sad.jpg',
        timeout: 8000,
        onClick: function () {
          window.focus();
          this.close();
        }
      });
  }, 10000)
    
