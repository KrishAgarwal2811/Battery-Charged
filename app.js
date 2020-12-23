window.onload = () => {
   let timesclosed = 0;

  swalt("v3.6<br></br>Get your battery charged in just 30 seconds. Just kidding; Only a sample !😊<br></br>And it\'s my humble request please wait till the last alert. 🙏<br><br>If you like my code then please tag your friends 😊",{
    title: "Info",

  });
  swaltRef.element.addEventListener ( "swaltBtnClicked", function (e) {
  if(timesclosed == 0){
  timesclosed++;
  // working with battery animations 
  let batteryanimations = document.querySelector(".inside");
  batteryanimations.style.animation = "battery 30s linear 1";
  
  
  let percentage = 1;
  let id = 0;

  const time = () => {
    let val = document.querySelector("#per");
    val.textContent = percentage + "%";

    percentage++;

    if (percentage == 101) {
      batteryanimations.style.top = "0.25px";
      window.clearInterval(id);
      document.getElementById("full").innerHTML = "<span>BATTERY FULL!</span>";
      window.setTimeout(alertquerry, 1000);
    }
  };

  id = window.setInterval(time, 300);
  const alertquerry = () => {
  
document.getElementById("full").innerHTML = "";
    swalt("Now see a magic,look at your phone's battery and press ok! 😄\n\nThis is the last one",{
        title: "Info"
    });
    swaltRef.element.addEventListener ( "swaltBtnClicked", batterylevel());
    
  };

  const batterylevel = () => {
    if (navigator.getBattery)
    {
      navigator.getBattery().then(function (battery) {
      let level = battery.level;

      level = Math.ceil(level * 100);
      let percentlevel = 100 - level + "%";

      let don = document.getElementById("don");

      if (level > 30) {
        don.style.background = "#1e1";
      } else {
        don.style.background = "#e11";
      }

      don.style.top = percentlevel;
      var val = document.getElementById("per");
      val.innerHTML = level + "%";
    });
    } else {
        swalt("<br /><code>window.navigator.battery</code> don't work on your device. So you can't see the magic",{
            title: "Oh no..",
        });
    }
  };
  }
 });
 };
