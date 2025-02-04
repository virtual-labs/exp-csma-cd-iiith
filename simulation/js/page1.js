var uncounter = 0;
var bncounter = 29;
var messageAfterReach = "Message Sent by user Recieved Succesfully !";
var botNodeSending = false;
var backOffClicked = false;
var k = 0;
var collision = false;

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
const inputk = document.getElementById("inputk");

function backOff() {
  //setBackOffClicked(true);
  backOffClicked = true;
  console.log("hi");
}

function backOffClickedAh() {
  return backOffClicked;
}

function kcheck() {

  if (Number(inputk.value.trim()) === k) {
    alert("correct !");
  } else {
    alert("wrong !");
  }
}

function un30() {
  uncounter = 0;
  k=(0);
   tw29.style.backgroundColor = "black";
  message.innerHTML = (messageAfterReach);
}

function un29() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw28.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw29.style.backgroundColor = "cyan";
    setTimeout(() => {
      un30();
    }, 500);
  }
}

function un28() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw27.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw28.style.backgroundColor = "cyan";
    setTimeout(() => {
      un29();
    }, 500);
  }
}

function un27() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(message);
    tw26.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw27.style.backgroundColor = "cyan";
    setTimeout(() => {
      un28();
    }, 500);
  }
}

function un26() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw25.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    tw26.style.backgroundColor = "cyan";
    setTimeout(() => {
      un27();
    }, 500);
  }
}

function un25() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw24.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw25.style.backgroundColor = "cyan";
    setTimeout(() => {
      un26();
    }, 500);
  }
}

function un24() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw23.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw24.style.backgroundColor = "cyan";
    setTimeout(() => {
      un25();
    }, 500);
  }
}

function un23() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw22.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw23.style.backgroundColor = "cyan";
    setTimeout(() => {
      un24();
    }, 500);
  }
}

function un22() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw21.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw22.style.backgroundColor = "cyan";
    setTimeout(() => {
      un23();
    }, 500);
  }
}

function un21() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw20.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw21.style.backgroundColor = "cyan";
    setTimeout(() => {
      un22();
    }, 500);
  }
}

function un20() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw19.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw20.style.backgroundColor = "cyan";
    setTimeout(() => {
      un21();
    }, 500);
  }
}

function un19() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw18.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw19.style.backgroundColor = "cyan";
    setTimeout(() => {
      un20();
    }, 500);
  }
}

function un18() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw17.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw18.style.backgroundColor = "cyan";
    setTimeout(() => {
      un19();
    }, 500);
  }
}

function un17() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw16.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw17.style.backgroundColor = "cyan";
    setTimeout(() => {
      un18();
    }, 500);
  }
}

function un16() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
   tw15.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
     tw16.style.backgroundColor = "cyan";
    setTimeout(() => {
      un17();
    }, 500);
  }
}


function un15() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw14.style.backgroundColor = "black";
  }
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw15.style.backgroundColor = "cyan";
    }
    setTimeout(() => {
      un16();
    }, 500);
  }


function un14() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw13.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw14.style.backgroundColor = "cyan";
    
    setTimeout(() => {
      un15();
    }, 500);
  }
}

function un13() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw12.style.backgroundColor = "black";

  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw13.style.backgroundColor = "cyan";
    
    setTimeout(() => {
      un14();
    }, 500);
  }
}

function un12() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw11.style.backgroundColor = "black";
  
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw12.style.backgroundColor = "cyan";
    
    setTimeout(() => {
      un13();
    }, 500);
  }
}

function un11() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw10.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw11.style.backgroundColor = "cyan";
    setTimeout(() => {
      un12();
    }, 500);
  }
}

function un10() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw9.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
  tw10.style.backgroundColor = "cyan";
    }
    setTimeout(() => {
      un11();
    }, 500);
  }

function un9() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw8.style.backgroundColor = "black";
  
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw9.style.backgroundColor = "cyan";
    setTimeout(() => {
      un10();
    }, 500);
  }
}

function un8() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw7.style.backgroundColor = "black";
  
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw8.style.backgroundColor = "cyan";
    
    setTimeout(() => {
      un9();
    }, 500);
  }
}

function un7() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw6.style.backgroundColor = "black";
  
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw7.style.backgroundColor = "cyan";
    setTimeout(() => {
      un8();
    }, 500);
  }
}

function un6() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw5.style.backgroundColor = "black";
  
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw6.style.backgroundColor = "cyan";
    setTimeout(() => {
      un7();
    }, 500);
  }
}

function un5() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw4.style.backgroundColor = "black";
  
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw5.style.backgroundColor = "cyan";
    setTimeout(() => {
      un6();
    }, 500);
  }
}

function un4() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw3.style.backgroundColor = "black";
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw4.style.backgroundColor = "cyan";
    setTimeout(() => {
      un5();
    }, 500);
  }
}

function un3() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw2.style.backgroundColor = "black";
  
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw3.style.backgroundColor = "cyan";
    
    setTimeout(() => {
      un4();
    }, 500);
  }
}

function un2() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  tw1.style.backgroundColor = "black";

  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);

    return;
  } else {
    tw2.style.backgroundColor = "cyan";
    setTimeout(() => {
      un3();
    }, 500);
  }
}

function un1() {
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = (true);
    message.innerHTML = ("Collision occurred !");

    messageAfterReach = "Damaged Packet Recieved !";
    console.log(messageAfterReach);
  }
  let x = Math.random();
  if (backOffClicked === true) {
    console.log("bt");

    message.innerHTML = ("User Clicked on Back Off");
    uncounter = 0;
    setTimeout(() => {
      sendNode();
    }, x * 10000);
    return;
  }
  else{ 
    tw1.style.backgroundColor = "cyan";
    setTimeout(() => {
      un2();
    }, 500);
  }
}


function sendNode() {
  if (uncounter > 0) {
    alert("Already Sending one message !");
  } else {
    messageAfterReach = "Node Sent by user Recieved Succesfully";
    //setBackOffClicked(false);
    backOffClicked = false;
    uncounter = 0;
    message.innerHTML = ("Signal is being sent from User Node ");
    un1();
  }
}

// bot node
function bn0() {
  botNodeSending.current = false;
  bncounter = 29;
  tw1.style.backgroundColor = "black";
  botNode();
}

function bn1() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
  tw2.style.backgroundColor = "black";
  tw1.style.backgroundColor = "red";
  setTimeout(() => {
    bn0();
  }, 500);
}

function bn2() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
  tw3.style.backgroundColor = "black";
  tw2.style.backgroundColor = "red";
  setTimeout(() => {
    bn1();
  }, 500);
}

function bn3() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
  tw4.style.backgroundColor = "black";
  tw3.style.backgroundColor = "red";
  setTimeout(() => {
    bn2();
  }, 500);
}

function bn4() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
  tw5.style.backgroundColor = "black";
  tw4.style.backgroundColor = "red";
  setTimeout(() => {
    bn3();
  }, 500);
}

function bn5() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
  tw6.style.backgroundColor = "black";
  tw5.style.backgroundColor = "red";
  setTimeout(() => {
    bn4();
  }, 500);
}

function bn6() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
  tw7.style.backgroundColor = "black";
  tw6.style.backgroundColor = "red";
  setTimeout(() => {
    bn5();
  }, 500);
}

function bn7() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
  tw8.style.backgroundColor = "black";
  tw7.style.backgroundColor = "red";
  setTimeout(() => {
    bn6();
  }, 500);
}

function bn8() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
  tw9.style.backgroundColor = "black";
  tw8.style.backgroundColor = "red";
  setTimeout(() => {
    bn7();
  }, 500);
}

function bn9() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw10.style.backgroundColor = "black";
   tw9.style.backgroundColor = "red";
  setTimeout(() => {
    bn8();
  }, 500);
}

function bn10() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw11.style.backgroundColor = "black";
   tw10.style.backgroundColor = "red";
  setTimeout(() => {
    bn9();
  }, 500);
}

function bn11() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw12.style.backgroundColor = "black";
   tw11.style.backgroundColor = "red";
  setTimeout(() => {
    bn10();
  }, 500);
}

function bn12() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw13.style.backgroundColor = "black";
   tw12.style.backgroundColor = "red";
  setTimeout(() => {
    bn11();
  }, 500);
}

function bn13() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw14.style.backgroundColor = "black";
   tw13.style.backgroundColor = "red";
  setTimeout(() => {
    bn12();
  }, 500);
}

function bn14() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw15.style.backgroundColor = "black";
   tw14.style.backgroundColor = "red";
  setTimeout(() => {
    bn13();
  }, 500);
}

function bn15() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw16.style.backgroundColor = "black";
   tw15.style.backgroundColor = "red";
  setTimeout(() => {
    bn14();
  }, 500);
}

function bn16() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw17.style.backgroundColor = "black";
   tw16.style.backgroundColor = "red";
  setTimeout(() => {
    bn15();
  }, 500);
}

function bn17() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw18.style.backgroundColor = "black";
   tw17.style.backgroundColor = "red";
  setTimeout(() => {
    bn16();
  }, 500);
}

function bn18() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw19.style.backgroundColor = "black";
   tw18.style.backgroundColor = "red";
  setTimeout(() => {
    bn17();
  }, 500);
}

function bn19() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw20.style.backgroundColor = "black";
   tw19.style.backgroundColor = "red";
  setTimeout(() => {
    bn18();
  }, 500);
}

function bn20() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw21.style.backgroundColor = "black";
   tw20.style.backgroundColor = "red";
  setTimeout(() => {
    bn19();
  }, 500);
}

function bn21() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw22.style.backgroundColor = "black";
   tw21.style.backgroundColor = "red";
  setTimeout(() => {
    bn20();
  }, 500);
}

function bn22() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw23.style.backgroundColor = "black";
   tw22.style.backgroundColor = "red";
  setTimeout(() => {
    bn21();
  }, 500);
}

function bn23() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw24.style.backgroundColor = "black";
   tw23.style.backgroundColor = "red";
  setTimeout(() => {
    bn22();
  }, 500);
}

function bn24() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw25.style.backgroundColor = "black";
   tw24.style.backgroundColor = "red";
  setTimeout(() => {
    bn23();
  }, 500);
}

function bn25() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  
  tw26.style.backgroundColor = "black";
  tw25.style.backgroundColor = "red";
  setTimeout(() => {
    bn24();
  }, 500);
}

function bn26() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw27.style.backgroundColor = "black";
   tw26.style.backgroundColor = "red";
  setTimeout(() => {
    bn25();
  }, 500);
}

function bn27() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw28.style.backgroundColor = "black";
   tw27.style.backgroundColor = "red";
  setTimeout(() => {
    bn26();
  }, 500);
}

function bn28() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
   tw29.style.backgroundColor = "black";
   tw28.style.backgroundColor = "red";
  setTimeout(() => {
    bn27();
  }, 500);
}

function bn29() {
  if (!bncounter) return;
  bncounter = bncounter - 1;
  console.log(uncounter, bncounter);
  if (tw29) { 
     tw29.style.backgroundColor = "red";
  }
  setTimeout(() => {
    bn28();
  }, 500);
}


function botNode() {
  botNodeSending.current = true;
  bncounter = 29;
  let x = Math.random();
  setTimeout(() => {
    bn29();
  }, x * 40000);
}

if (botNodeSending === false) botNode();
