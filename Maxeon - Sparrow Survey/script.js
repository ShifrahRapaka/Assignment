 function openForm1() {
    var x = document.getElementById("myForm1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("myForm2");
  var z = document.getElementById("cross");
  if(y.style.display === "block"){
    y.style.display = "none";
    x.style.display = "none";
    z.style.backgroundImage = "url(./assets/Sparrowbird.png)";
  }
  
  }

  function openForm2(){
    document.getElementById("myForm1").style.display = "none";
    document.getElementById("myForm2").style.display = "block";
    document.getElementById("cross").style.backgroundImage = "url(./assets/clear-24px.svg)";

  }


  function add(){
      var inp = document.getElementById("userInput").value;
      console.log(inp);
      if (inp!=""){
        var txt = $("<div></div>").addClass("messageUser").text(inp);
        $("div.lower").append(txt);
        document.getElementById("userInput").value=""

        fetch('https://api.adviceslip.com/advice')
        .then((response) => {
            return response.json()
            }, 6000)
        .then((data) => {
  
        console.log(data.slip)
        advice = data.slip.advice;
        var botTxt = $("<div></div>").addClass("messageBot").text(advice);
        $("div.lower").append(botTxt);
        })
        .catch((err) => {
           console.error(err)
    })
      }
    };
    $("card-holder.lower").animate({ scrollBottom: 200 }, "slow");