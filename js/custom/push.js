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
 "I don't know how long it will take to not think about you",
 "If you are not good enough for me now, hopefully you always try to be good enough for me tomorrow",
 "You know the sun and the moon? They are different but complete each other",
 "You still there?",
 "You still there?",
 "How could i convince you?",
 "You won't do same mistake, we already learned it",
 "Tell me the way to convince you :(",
 "I am really tired hufft",
 "I am not looking for somebody with some superhuman gifts",
 "I guess i have a hundred sentences here :)",
 "It running randomly",
 "It changes every 7 seconds",
 "Please Jasmine"
]
$('.toast').toast('show');
randomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)]
  }
  let message;
  setInterval(() => {
      message = randomMessage();
  }, 1000);

  const messageToYou = document.querySelector('#messageToYou');
  const messageBody = document.querySelector('#messageBody');
  let messageBodyValue = false;
  setInterval(()=>{
    messageToYou.textContent = message;
    if(!messageBodyValue){
      messageBody.classList.remove('d-none');
      messageBodyValue = true;
    }
  }, 7000)
    
