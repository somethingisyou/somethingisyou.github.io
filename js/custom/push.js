let messages = [
 "You hurted me as always",
 "You still there?"
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
    
