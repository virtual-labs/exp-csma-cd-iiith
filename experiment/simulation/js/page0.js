var uncounter = 0;
var bncounter = 29;
var messageAfterReach = "Message.innerHTML Sent by user Recieved Succesfully !";
var botNodeSending = false;

const tw1 = document.getElementById("tw1");
const tw2 = document.getElementById("tw2");
const tw3 = document.getElementById("tw3");
const tw4 = document.getElementById("tw4");
const tw5 = document.getElementById("tw5");
const tw6 = document.getElementById("tw6");
const tw7 = document.getElementById("tw7");
const tw8 = document.getElementById("tw8");
const tw9 = document.getElementById("tw9");
const tw10 = document.getElementById("tw10");
const tw11 = document.getElementById("tw11");
const tw12 = document.getElementById("tw12");
const tw13 = document.getElementById("tw13");
const tw14 = document.getElementById("tw14");
const tw15 = document.getElementById("tw15");
const tw16 = document.getElementById("tw16");
const tw17 = document.getElementById("tw17");
const tw18 = document.getElementById("tw18");
const tw19 = document.getElementById("tw19");
const tw20 = document.getElementById("tw20");
const tw21 = document.getElementById("tw21");
const tw22 = document.getElementById("tw22");
const tw23 = document.getElementById("tw23");
const tw24 = document.getElementById("tw24");
const tw25 = document.getElementById("tw25");
const tw26 = document.getElementById("tw26");
const tw27 = document.getElementById("tw27");
const tw28 = document.getElementById("tw28");
const tw29 = document.getElementById("tw29");
const message = document.getElementById("message");

function un30() {
  uncounter = 0;
  {
    tw29.style.backgroundColor = "black";
  }
  message.innerHTML = messageAfterReach;
}

function un29() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw28.style.backgroundColor = "black";
  tw29.style.backgroundColor = "red";
  setTimeout(() => {
    un30();
  }, 500);
}

function un28() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw27.style.backgroundColor = "black";
  tw28.style.backgroundColor = "red";
  setTimeout(() => {
    un29();
  }, 500);
}

function un27() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw26.style.backgroundColor = "black";
  tw27.style.backgroundColor = "red";
  setTimeout(() => {
    un28();
  }, 500);
}

function un26() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw25.style.backgroundColor = "black";
  tw26.style.backgroundColor = "red";
  setTimeout(() => {
    un27();
  }, 500);
}

function un25() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw24.style.backgroundColor = "black";
  tw25.style.backgroundColor = "red";
  setTimeout(() => {
    un26();
  }, 500);
}

function un24() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw23.style.backgroundColor = "black";
  tw24.style.backgroundColor = "red";
  setTimeout(() => {
    un25();
  }, 500);
}

function un23() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw22.style.backgroundColor = "black";
  tw23.style.backgroundColor = "red";
  setTimeout(() => {
    un24();
  }, 500);
}

function un22() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw21.style.backgroundColor = "black";
  tw22.style.backgroundColor = "red";
  setTimeout(() => {
    un23();
  }, 500);
}

function un21() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw20.style.backgroundColor = "black";
  tw21.style.backgroundColor = "red";
  setTimeout(() => {
    un22();
  }, 500);
}

function un20() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw19.style.backgroundColor = "black";
  tw20.style.backgroundColor = "red";
  setTimeout(() => {
    un21();
  }, 500);
}

function un19() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw18.style.backgroundColor = "black";
  tw19.style.backgroundColor = "red";
  setTimeout(() => {
    un20();
  }, 500);
}

function un18() {
  tw17.style.backgroundColor = "black";
  tw18.style.backgroundColor = "red";
  setTimeout(() => {
    un19();
  }, 500);
}

function un17() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw16.style.backgroundColor = "black";
  tw17.style.backgroundColor = "red";
  setTimeout(() => {
    un18();
  }, 500);
}

function un16() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw15.style.backgroundColor = "black";
  tw16.style.backgroundColor = "red";
  setTimeout(() => {
    un17();
  }, 500);
}

function un15() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw14.style.backgroundColor = "black";
  tw15.style.backgroundColor = "red";
  setTimeout(() => {
    un16();
  }, 500);
}

function un14() {
  tw13.style.backgroundColor = "black";
  tw14.style.backgroundColor = "red";
  setTimeout(() => {
    un15();
  }, 500);
}

function un13() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw12.style.backgroundColor = "black";
  tw13.style.backgroundColor = "red";
  setTimeout(() => {
    un14();
  }, 500);
}

function un12() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw11.style.backgroundColor = "black";
  tw12.style.backgroundColor = "red";
  setTimeout(() => {
    un13();
  }, 500);
}

function un11() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw10.style.backgroundColor = "black";
  tw11.style.backgroundColor = "red";
  setTimeout(() => {
    un12();
  }, 500);
}

function un10() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw9.style.backgroundColor = "black";
  tw10.style.backgroundColor = "red";
  setTimeout(() => {
    un11();
  }, 500);
}

function un9() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw8.style.backgroundColor = "black";
  tw9.style.backgroundColor = "red";
  setTimeout(() => {
    un10();
  }, 500);
}

function un8() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw7.style.backgroundColor = "black";
  tw8.style.backgroundColor = "red";
  setTimeout(() => {
    un9();
  }, 500);
}

function un7() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw6.style.backgroundColor = "black";
  tw7.style.backgroundColor = "red";
  setTimeout(() => {
    un8();
  }, 500);
}

function un6() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw5.style.backgroundColor = "black";
  tw6.style.backgroundColor = "red";
  setTimeout(() => {
    un7();
  }, 500);
}

function un5() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw4.style.backgroundColor = "black";
  tw5.style.backgroundColor = "red";
  setTimeout(() => {
    un6();
  }, 500);
}

function un4() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw3.style.backgroundColor = "black";
  tw4.style.backgroundColor = "red";
  setTimeout(() => {
    un5();
  }, 500);
}

function un3() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw2.style.backgroundColor = "black";
  tw3.style.backgroundColor = "red";
  setTimeout(() => {
    un4();
  }, 500);
}

function un2() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  tw1.style.backgroundColor = "black";
  tw2.style.backgroundColor = "red";
  setTimeout(() => {
    un3();
  }, 500);
}

function un1() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (Math.abs(uncounter - bncounter) <= 1) {
    message.innerHTML = "Collision occurred !";
    messageAfterReach = "Damaged Packet Recieved !";
  }
  {
    tw1.style.backgroundColor = "red";
  }
  setTimeout(() => {
    un2();
  }, 500);
}

function sendNode() {
  messageAfterReach =
    "Message.innerHTML Sent by user Recieved Succesfully";
  if (uncounter > 0) {
    alert("Already sending a message");
  } else {
    uncounter = 0;
    message.innerHTML = "Signal is being sent from User Node";
    un1();
  }
}

// bot node (duplicate removed; using the later, corrected implementation)


  // bot node
  function bn0() {
    console.log("bn",bncounter,uncounter);
    bncounter = 31;
    botsigreached = true;
    if (tw1) tw1.style.backgroundColor = "black";
    // if (usersigreached) {
    //   signalcolor = "cyan";
    // }
    botNode();
  }

  function bn1() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw2) tw2.style.backgroundColor = "black";
    else console.error("tw2 is null or undefined");
  
    if (tw1) {
      tw1.style.backgroundColor = signalcolor;
      setTimeout(() => bn0(), 500);
    } else console.error("tw1 is null or undefined");
  }
  
  function bn2() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw3) tw3.style.backgroundColor = "black";
    else console.error("tw3 is null or undefined");
  
    if (tw2) {
      tw2.style.backgroundColor = signalcolor;
      setTimeout(() => bn1(), 500);
    } else console.error("tw2 is null or undefined");
  }
  
  function bn3() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw4) tw4.style.backgroundColor = "black";
    else console.error("tw4 is null or undefined");
  
    if (tw3) {
      tw3.style.backgroundColor = signalcolor;
      setTimeout(() => bn2(), 500);
    } else console.error("tw3 is null or undefined");
  }
  
  function bn4() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw5) tw5.style.backgroundColor = "black";
    else console.error("tw5 is null or undefined");
  
    if (tw4) {
      tw4.style.backgroundColor = signalcolor;
      setTimeout(() => bn3(), 500);
    } else console.error("tw4 is null or undefined");
  }
  
  function bn5() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw6) tw6.style.backgroundColor = "black";
    else console.error("tw6 is null or undefined");
  
    if (tw5) {
      tw5.style.backgroundColor = signalcolor;
      setTimeout(() => bn4(), 500);
    } else console.error("tw5 is null or undefined");
  }
  
  function bn6() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw7) tw7.style.backgroundColor = "black";
    else console.error("tw7 is null or undefined");
  
    if (tw6) {
      tw6.style.backgroundColor = signalcolor;
      setTimeout(() => bn5(), 500);
    } else console.error("tw6 is null or undefined");
  }
  
  function bn7() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw8) tw8.style.backgroundColor = "black";
    else console.error("tw8 is null or undefined");
  
    if (tw7) {
      tw7.style.backgroundColor = signalcolor;
      setTimeout(() => bn6(), 500);
    } else console.error("tw7 is null or undefined");
  }
  
  function bn8() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw9) tw9.style.backgroundColor = "black";
    else console.error("tw9 is null or undefined");
  
    if (tw8) {
      tw8.style.backgroundColor = signalcolor;
      setTimeout(() => bn7(), 500);
    } else console.error("tw8 is null or undefined");
  }
  
  function bn9() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw10) tw10.style.backgroundColor = "black";
    else console.error("tw10 is null or undefined");
  
    if (tw9) {
      tw9.style.backgroundColor = signalcolor;
      setTimeout(() => bn8(), 500);
    } else console.error("tw9 is null or undefined");
  }
  
  function bn10() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw11) tw11.style.backgroundColor = "black";
    else console.error("tw11 is null or undefined");
  
    if (tw10) {
      tw10.style.backgroundColor = signalcolor;
      setTimeout(() => bn9(), 500);
    } else console.error("tw10 is null or undefined");
  }
  
  function bn11() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw12) tw12.style.backgroundColor = "black";
    else console.error("tw12 is null or undefined");
  
    if (tw11) {
      tw11.style.backgroundColor = signalcolor;
      setTimeout(() => bn10(), 500);
    } else console.error("tw11 is null or undefined");
  }
  
  function bn12() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw13) tw13.style.backgroundColor = "black";
    else console.error("tw13 is null or undefined");
  
    if (tw12) {
      tw12.style.backgroundColor = signalcolor;
      setTimeout(() => bn11(), 500);
    } else console.error("tw12 is null or undefined");
  }
  
  function bn13() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw14) tw14.style.backgroundColor = "black";
    else console.error("tw14 is null or undefined");
  
    if (tw13) {
      tw13.style.backgroundColor = signalcolor;
      setTimeout(() => bn12(), 500);
    } else console.error("tw13 is null or undefined");
  }
  
  function bn14() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw15) tw15.style.backgroundColor = "black";
    else console.error("tw15 is null or undefined");
  
    if (tw14) {
      tw14.style.backgroundColor = signalcolor;
      setTimeout(() => bn13(), 500);
    } else console.error("tw14 is null or undefined");
  }
  
  function bn15() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw16) tw16.style.backgroundColor = "black";
    else console.error("tw16 is null or undefined");
  
    if (tw15) {
      tw15.style.backgroundColor = signalcolor;
      setTimeout(() => bn14(), 500);
    } else console.error("tw15 is null or undefined");
  }
  
  function bn16() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw17) tw17.style.backgroundColor = "black";
    else console.error("tw17 is null or undefined");
  
    if (tw16) {
      tw16.style.backgroundColor = signalcolor;
      setTimeout(() => bn15(), 500);
    } else console.error("tw16 is null or undefined");
  }
  
  function bn17() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw18) tw18.style.backgroundColor = "black";
    else console.error("tw18 is null or undefined");
  
    if (tw17) {
      tw17.style.backgroundColor = signalcolor;
      setTimeout(() => bn16(), 500);
    } else console.error("tw17 is null or undefined");
  }
  
  function bn18() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw19) tw19.style.backgroundColor = "black";
    else console.error("tw19 is null or undefined");
  
    if (tw18) {
      tw18.style.backgroundColor = signalcolor;
      setTimeout(() => bn17(), 500);
    } else console.error("tw18 is null or undefined");
  }
  
  function bn19() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw20) tw20.style.backgroundColor = "black";
    else console.error("tw20 is null or undefined");
  
    if (tw19) {
      tw19.style.backgroundColor = signalcolor;
      setTimeout(() => bn18(), 500);
    } else console.error("tw19 is null or undefined");
  }
  
  function bn20() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw21) tw21.style.backgroundColor = "black";
    else console.error("tw21 is null or undefined");
  
    if (tw20) {
      tw20.style.backgroundColor = signalcolor;
      setTimeout(() => bn19(), 500);
    } else console.error("tw20 is null or undefined");
  }
  
  function bn21() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw22) tw22.style.backgroundColor = "black";
    else console.error("tw22 is null or undefined");
  
    if (tw21) {
      tw21.style.backgroundColor = signalcolor;
      setTimeout(() => bn20(), 500);
    } else console.error("tw21 is null or undefined");
  }
  
  function bn22() {
    console.log("bn", bncounter, uncounter);
    bncounter -= 1;
  
    if (tw23) tw23.style.backgroundColor = "black";
    else console.error("tw23 is null or undefined");
  
    if (tw22) {
      tw22.style.backgroundColor = signalcolor;
      setTimeout(() => bn21(), 500);
    } else console.error("tw22 is null or undefined");
  }
  

  function bn23() {
    console.log("bn", bncounter, uncounter);
    bncounter = bncounter - 1;
  
    // Null check for tw24
    if (tw24) {
      tw24.style.backgroundColor = "black";
    } else {
      console.error("tw24 is null or undefined");
    }
  
    // Null check for tw23
    if (tw23) {
      tw23.style.backgroundColor = signalcolor;
      setTimeout(() => {
        bn22();
      }, 500);
    } else {
      console.error("tw23 is null or undefined");
    }
  }
  

  function bn24() {
    console.log("bn", bncounter, uncounter);
    bncounter = bncounter - 1;
  
    // Null check for tw25
    if (tw25) {
      tw25.style.backgroundColor = "black";
    } else {
      console.error("tw25 is null or undefined");
    }
  
    // Null check for tw24
    if (tw24) {
      tw24.style.backgroundColor = signalcolor;
      setTimeout(() => {
        bn23();
      }, 500);
    } else {
      console.error("tw24 is null or undefined");
    }
  }
  

  function bn25() {
    console.log("bn", bncounter, uncounter);
    bncounter = bncounter - 1;
  
    // Null check for tw26
    if (tw26) {
      tw26.style.backgroundColor = "black";
    } else {
      console.error("tw26 is null or undefined");
    }
  
    // Null check for tw25
    if (tw25) {
      tw25.style.backgroundColor = signalcolor;
      setTimeout(() => {
        bn24();
      }, 500);
    } else {
      console.error("tw25 is null or undefined");
    }
  }
  

  function bn26() {
    console.log("bn", bncounter, uncounter);
    bncounter = bncounter - 1;
  
    // Null check for tw27
    if (tw27) {
      tw27.style.backgroundColor = "black";
    } else {
      console.error("tw27 is null or undefined");
    }
  
    // Null check for tw26
    if (tw26) {
      tw26.style.backgroundColor = signalcolor;
      setTimeout(() => {
        bn25();
      }, 500);
    } else {
      console.error("tw26 is null or undefined");
    }
  }
  

  function bn27() {
    console.log("bn", bncounter, uncounter);
    bncounter = bncounter - 1;
  
    // Null check for tw28
    if (tw28) {
      tw28.style.backgroundColor = "black";
    } else {
      console.error("tw28 is null or undefined");
    }
  
    // Null check for tw27
    if (tw27) {
      tw27.style.backgroundColor = signalcolor;
      setTimeout(() => {
        bn26();
      }, 500);
    } else {
      console.error("tw27 is null or undefined");
    }
  }
  

  function bn28() {
    console.log("bn",bncounter,uncounter);
    bncounter = bncounter - 1;
    if (tw29){
      tw29.style.backgroundColor = "black";
    }
    {
      if(tw28){
        tw28.style.backgroundColor = signalcolor;
      }
      setTimeout(() => {
        bn27();
      }, 500);
    }
  }

  function bn29() {
    console.log("bn",bncounter,uncounter);
    bncounter = bncounter - 1;
    if (tw29){
      tw29.style.backgroundColor = signalcolor;
    }
    setTimeout(() => {
      bn28();
    }, 500);
  }

  function botNode() {
    // Initialize bot counters/state
    bncounter = 31;
    collision = false;
    botsigreached = false;
    signalcolor = "cyan";
    botNodeSending = true;

    // First call: schedule within the first second; subsequent calls: schedule
    // at a random delay up to 40s. Use a function-local flag to track first-time.
    var delayMs;
    if (typeof botNode._firstTime === "undefined" || botNode._firstTime) {
      delayMs = Math.random() * 1000; // 0 - 1000ms for the very first signal
      botNode._firstTime = false;
    } else {
      delayMs = Math.random() * 40000; // 0 - 40000ms (~40s) for subsequent signals
    }

    setTimeout(() => {
      bn29();
    }, delayMs);
  }

   
signalcolor = "cyan";
botNode();

// function botNode() {
//   botNodeSending = true;
//   bncounter = 29;
//   let x = Math.random();
//   setTimeout(() => {
//     bn29();
//   }, x * 40000);
// }

if (botNodeSending === false) {
  botNode();
}
