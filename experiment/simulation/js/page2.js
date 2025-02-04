var uncounter = 0;
var bncounter = 31;
var messageAfterReach = "Message Sent by user Recieved Succesfully !";
var collision = false;
var backoffclicked = false;
var k = 0; // backoff parameter
var signalcolor = "cyan";
var listening = 0;
var botsigreached = false;
var usersigreached = false;
var collisionoccurredthistime = false;

var messageaftercollisionifpacketsizeisless =
  "Collision occurred , but it went undetected as the packet size was too low";
var messageaftercollisionifpacketsizeislarge =
  "Collision occurred and it was detected by the user node";

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
  const status = document.getElementById("message");
  const inputk = document.getElementById("inputk");
  //const status = document.getElementById("status");
  const usernode = document.getElementById("usernode");
  const packetsize = document.getElementById("packetsize");

  // network speed = 0.5 MBPS

  function changecolortoblack() {
    tw1.style.backgroundColor = "black";
    tw2.style.backgroundColor = "black";
    tw3.style.backgroundColor = "black";
    tw4.style.backgroundColor = "black";
    tw5.style.backgroundColor = "black";
    tw6.style.backgroundColor = "black";
    tw7.style.backgroundColor = "black";
    tw8.style.backgroundColor = "black";
    tw9.style.backgroundColor = "black";
    tw10.style.backgroundColor = "black";
    tw11.style.backgroundColor = "black";
    tw12.style.backgroundColor = "black";
    tw13.style.backgroundColor = "black";
    tw14.style.backgroundColor = "black";
    tw15.style.backgroundColor = "black";
    tw16.style.backgroundColor = "black";
    tw17.style.backgroundColor = "black";
    tw18.style.backgroundColor = "black";
    tw19.style.backgroundColor = "black";
    tw20.style.backgroundColor = "black";
    tw21.style.backgroundColor = "black";
    tw22.style.backgroundColor = "black";
    tw23.style.backgroundColor = "black";
    tw24.style.backgroundColor = "black";
    tw25.style.backgroundColor = "black";
    tw26.style.backgroundColor = "black";
    tw27.style.backgroundColor = "black";
    tw28.style.backgroundColor = "black";
    tw29.style.backgroundColor = "black";
  }

  function statusDisplay(s1) {
    if (s1 === "Collision occurred!") {
      if (collisionoccurredthistime === false) {
        collisionoccurredthistime = true;
        uncounter = 0;
        if (listening < 0) {
          s1 = messageaftercollisionifpacketsizeisless;
          status.innerHTML = (s1);
        } else {
          s1 = messageaftercollisionifpacketsizeislarge;
          status.innerHTML = (s1);
        }
      }
    } else {
      status.innerHTML = (s1);
    }
  }

  function backoff() {
    backoffclicked = true;
  }

  function kcheck() {
    console.log(k);
    console.log(inputk.value);

    if (inputk.value == k) {
      alert("correct !");
    } else {
      alert("wrong !");
    }
  }

  function un33() {
    if (botsigreached) {
      signalcolor = "cyan";
    }
    statusDisplay(messageAfterReach);
    usernode.innerHTML = "User Node";
    usersigreached = true;
    uncounter = 0;
    tw29.style.backgroundColor = "black";
  }

  function un32() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    usersigreached = true;
    tw28.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else{
      setTimeout(() => {
        un33();
      }, 500);
    }
  }

  function un31() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    usersigreached = true;
    tw27.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else{
      setTimeout(() => {
        un32();
      }, 500);
    }
  }

  function un30() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    usersigreached = true;
    tw26.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else {
      setTimeout(() => {
        un31();
      }, 500);
    }
  }

  function un29() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw25.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw29 !== null) {
      tw29.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un30();
      }, 500);
    }
  }

  function un28() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw24.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw28 !== null) {
      tw28.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un29();
      }, 500);
    }
  }

  function un27() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw23.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw27 !== null) {
      tw27.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un28();
      }, 500);
    }
  }

  function un26() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw22.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw26 !== null) {
      tw26.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un27();
      }, 500);
    }
  }

  function un25() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw21.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw25 !== null) {
      tw25.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un26();
      }, 500);
    }
  }
  function un24() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw20.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw24 !== null) {
      tw24.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un25();
      }, 500);
    }
  }
  function un23() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw19.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw23 !== null) {
      tw23.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un24();
      }, 500);
    }
  }
  function un22() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw18.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw22 !== null) {
      tw22.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un23();
      }, 500);
    }
  }
  function un21() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw17.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw21 !== null) {
      tw21.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un22();
      }, 500);
    }
  }
  function un20() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw16.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw20 !== null) {
      tw20.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un21();
      }, 500);
    }
  }
  function un19() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw15.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw19 !== null) {
      tw19.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un20();
      }, 500);
    }
  }
  function un18() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw14.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw18 !== null) {
      tw18.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un19();
      }, 500);
    }
  }
  function un17() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw13.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw17 !== null) {
      tw17.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un18();
      }, 500);
    }
  }
  function un16() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw12.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw16 !== null) {
      tw16.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un17();
      }, 500);
    }
  }
  function un15() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw11.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw15 !== null) {
      tw15.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un16();
      }, 500);
    }
  }
  function un14() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw10.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw14 !== null) {
      tw14.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un15();
      }, 500);
    }
  }

  function un13() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw9.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw13 !== null) {
      tw13.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un14();
      }, 500);
    }
  }

  function un12() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw8.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw12 !== null) {
      tw12.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un13();
      }, 500);
    }
  }

  function un11() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw7.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw11 !== null) {
      tw11.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un12();
      }, 500);
    }
  }

  function un10() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw6.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw10 !== null) {
      tw10.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un11();
      }, 500);
    }
  }

  function un9() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw5.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw9 !== null) {
      tw9.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un10();
      }, 500);
    }
  }
  function un8() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw4.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw8 !== null) {
      tw8.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un9();
      }, 500);
    }
  }

  function un7() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw3.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw7 !== null) {
      tw7.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un8();
      }, 500);
    }
  }

  function un6() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw2.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw6 !== null) {
      tw6.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un7();
      }, 500);
    }
  }

  function un5() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    tw1.style.backgroundColor = "black";
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw5 !== null) {
      tw5.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un6();
      }, 500);
    }
  }

  function un4() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw4 !== null) {
      tw4.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un5();
      }, 500);
    }
  }

  function un3() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw3 !== null) {
      tw3.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un4();
      }, 500);
    }
  }

  function un2() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else if(tw2 !== null) {
      tw2.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un3();
      }, 500);
    }
  }

  function un1() {
    uncounter = uncounter + 1;
    listening--;
    if (listening === 0) {
      usernode.innerHTML = "User Node : Sending Data";
    }
    if (Math.abs(uncounter - bncounter) <= 1) {
      k++;
      collision = true;
      signalcolor = "red";
      statusDisplay("Collision occurred!");
      messageAfterReach = "Damaged Packet Recieved !";
    }
    let x = Math.random();
    if (backoffclicked) {
      changecolortoblack();
      statusDisplay("User Clicked on Back Off");
      uncounter = 0;
      setTimeout(() => {
        sendNode();
      }, x * 10000);
    } else {
      tw1.style.backgroundColor = signalcolor;
      setTimeout(() => {
        un2();
      }, 500);
    }
  }

  function sendNode() {
    collisionoccurredthistime = false;
    usersigreached = false;
    listening = 2 * Number(packetsize.value.trim());
    console.log(listening);
    signalcolor = "cyan";

    if (packetsize.value === "") {
      alert("enter packet size !");
    } else {
      if (uncounter > 0) {
        alert("Already Sending one message !");
      } else {
        messageAfterReach = "Node Sent by user Recieved Succesfully";
        backoffclicked = false;
        uncounter = 0;
        usernode.innerHTML =
          "User Node : Sending Data <br> Listening to the channel";
        statusDisplay("Signal is being sent from User Node ");
        un1();
      }
    }
  }

  // bot node
  function bn0() {
    console.log("bn",bncounter,uncounter);
    bncounter = 31;
    botsigreached = true;
    if (tw1) tw1.style.backgroundColor = "black";
    if (usersigreached) {
      signalcolor = "cyan";
    }
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
    if (bncounter !== 31) {
      console.log("bncounter",bncounter);
      setTimeout(() => {
        botNode();
      }, 1000);
    } else {
      bncounter = 31;
      collision = false;
      botsigreached = false;
      let x = Math.random();
      signalcolor = "cyan";
      setTimeout(() => {
        bn29();
      }, x * 40000);
    }
  }

   
signalcolor = "cyan";
botNode();
