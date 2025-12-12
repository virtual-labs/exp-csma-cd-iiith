var uncounter = 0;
var bncounter = 29;
var messageAfterReach = "Message Sent by user Recieved Succesfully !";
var botNodeSending = false;
var backOffClicked = false;
var k = 0;
var collision = false;
var botActive = false;
// Track whether user signal reached and a shared signal color
var usersigreached = false;
var signalcolor = "cyan";

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
const checkButton = document.querySelector('.checkk');

// Disable check controls until at least one packet is sent
let packetSent = false;
if (inputk) inputk.disabled = true;
if (checkButton) { checkButton.disabled = true; console.log('Check control disabled until first send'); }

function userLog(step) {
  console.log('USER STEP', step, 'uncounter=', uncounter, 'bncounter=', bncounter, 'botActive=', botActive, 'collision=', collision);
}

// Observe background color changes on tw elements for debugging disappearance
function observeTw(el, name) {
  if (!el) return;
  const obs = new MutationObserver(muts => {
    muts.forEach(m => {
      if (m.attributeName === 'style') {
        const color = window.getComputedStyle(el).backgroundColor;
        console.log('TW COLOR CHANGE', name, '->', color);
      }
    });
  });
  obs.observe(el, { attributes: true, attributeFilter: ['style'] });
}

[
  tw1,tw2,tw3,tw4,tw5,tw6,tw7,tw8,tw9,tw10,tw11,tw12,tw13,tw14,tw15,tw16,tw17,tw18,tw19,tw20,tw21,tw22,tw23,tw24,tw25,tw26,tw27,tw28,tw29
].forEach((el, idx) => observeTw(el, 'tw' + (idx+1)));

let collisionClearTimer = null;

setInterval(() => {
  if (collision === true && collisionClearTimer === null) {
    const remainingSteps = Math.max(0, 29 - uncounter);
    const delay = remainingSteps * 500 + 1000; // wait until chain would finish
    console.log('scheduling collision-clear timer (ms):', delay, 'remainingSteps=', remainingSteps);
    collisionClearTimer = setTimeout(() => {
      uncounter = 0;
      collision = false;
      collisionClearTimer = null;
      messageAfterReach = "";
      if (message) message.innerHTML = "";
      console.log('Cleared collision, reset uncounter');
    }, delay);
  }
}, 200);

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

function un30() { userLog('un30');
  uncounter = 0;
   tw29.style.backgroundColor = "black";
  message.innerHTML = (messageAfterReach);
  console.log('User reached bot node:', messageAfterReach, 'k=', k);
}

function un29() { userLog('un29');
  uncounter = uncounter + 1;
  console.log(uncounter, bncounter);

  if (
    bncounter !== 29 &&
    Math.abs(uncounter - bncounter) <= 1
  ) {
    k=(k + 1);
    collision = true;
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
    tw29.style.backgroundColor = "red";
    setTimeout(() => {
      un30();
    }, 500);
  }
}


function un28() { userLog('un28');
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
     tw28.style.backgroundColor = "red";
    setTimeout(() => {
      un29();
    }, 500);
  }
}

function un27() { userLog('un27');
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
    tw27.style.backgroundColor = "red";
    setTimeout(() => {
      un28();
    }, 500);
  }
}
function un26() { userLog('un26');
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

    return;
  } else {
    tw26.style.backgroundColor = "red";
    setTimeout(() => {
      un27();
    }, 500);
  }
}

function un25() { userLog('un25');
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
     tw25.style.backgroundColor = "red";
    setTimeout(() => {
      un26();
    }, 500);
  }
}

function un24() { userLog('un24');
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
     tw24.style.backgroundColor = "red";
    setTimeout(() => {
      un25();
    }, 500);
  }
}

function un23() { userLog('un23');
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
     tw23.style.backgroundColor = "red";
    setTimeout(() => {
      un24();
    }, 500);
  }
}

function un22() { userLog('un22');
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
     tw22.style.backgroundColor = "red";
    setTimeout(() => {
      un23();
    }, 500);
  }
}

function un21() { userLog('un21');
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
     tw21.style.backgroundColor = "red";
    setTimeout(() => {
      un22();
    }, 500);
  }
}

function un20() { userLog('un20');
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
     tw20.style.backgroundColor = "red";
    setTimeout(() => {
      un21();
    }, 500);
  }
}

function un19() { userLog('un19');
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
     tw19.style.backgroundColor = "red";
    setTimeout(() => {
      un20();
    }, 500);
  }
}

function un18() { userLog('un18');
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
     tw18.style.backgroundColor = "red";
    setTimeout(() => {
      un19();
    }, 500);
  }
}

function un17() { userLog('un17');
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
     tw17.style.backgroundColor = "red";
    setTimeout(() => {
      un18();
    }, 500);
  }
}

function un16() { userLog('un16');
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
     tw16.style.backgroundColor = "red";
    setTimeout(() => {
      un17();
    }, 500);
  }
}


function un15() { userLog('un15');
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
    tw15.style.backgroundColor = "red";
    }
    setTimeout(() => {
      un16();
    }, 500);
  }


function un14() { userLog('un14');
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
    tw14.style.backgroundColor = "red";
    
    setTimeout(() => {
      un15();
    }, 500);
  }
}

function un13() { userLog('un13');
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
    tw13.style.backgroundColor = "red";
    
    setTimeout(() => {
      un14();
    }, 500);
  }
}

function un12() { userLog('un12');
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
    tw12.style.backgroundColor = "red";
    
    setTimeout(() => {
      un13();
    }, 500);
  }
}

function un11() { userLog('un11');
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
    tw11.style.backgroundColor = "red";
    setTimeout(() => {
      un12();
    }, 500);
  }
}

function un10() { userLog('un10');
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
  tw10.style.backgroundColor = "red";
    }
    setTimeout(() => {
      un11();
    }, 500);
  }

function un9() { userLog('un9');
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
    tw9.style.backgroundColor = "red";
    setTimeout(() => {
      un10();
    }, 500);
  }
}

function un8() { userLog('un8');
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
    tw8.style.backgroundColor = "red";
    
    setTimeout(() => {
      un9();
    }, 500);
  }
}

function un7() { userLog('un7');
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
    tw7.style.backgroundColor = "red";
    setTimeout(() => {
      un8();
    }, 500);
  }
}

function un6() { userLog('un6');
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
    tw6.style.backgroundColor = "red";
    setTimeout(() => {
      un7();
    }, 500);
  }
}

function un5() { userLog('un5');
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
    tw5.style.backgroundColor = "red";
    setTimeout(() => {
      un6();
    }, 500);
  }
}

function un4() { userLog('un4');
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
    tw4.style.backgroundColor = "red";
    setTimeout(() => {
      un5();
    }, 500);
  }
}

function un3() { userLog('un3');
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
    tw3.style.backgroundColor = "red";
    
    setTimeout(() => {
      un4();
    }, 500);
  }
}

function un2() { userLog('un2');
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
    tw2.style.backgroundColor = "red";
    setTimeout(() => {
      un3();
    }, 500);
  }
}

function un1() { userLog('un1');
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
    tw1.style.backgroundColor = "red";
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
    // enable k-check controls after first send
    if (!packetSent) {
      packetSent = true;
      if (inputk) inputk.disabled = false;
      if (checkButton) { checkButton.disabled = false; console.log('Check control enabled after first send'); }
    }
  }
}

// bot node
function bn0() {
  botNodeSending = false;
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


  // bot node
  function bn0() {
    console.log("bn",bncounter,uncounter);
    bncounter = 31;
    botsigreached = true;
    if (tw1) tw1.style.backgroundColor = "black";
    if (usersigreached) {
      signalcolor = "cyan";
    }
    // bot finished its current traversal
    botActive = false;
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
    // Start bot signalling: first signal within 0-1000ms, later signals ~0-40000ms
    if (!botNode._started) {
      botNode._started = true;
      bncounter = 31;
      collision = false;
      botsigreached = false;
      signalcolor = "cyan";
      const firstDelay = Math.random() * 1000; // first signal in the first second
      setTimeout(() => {
        if (!botActive) bn29();
      }, firstDelay);
    } else {
      // Subsequent signals after a random backoff up to ~40s
      bncounter = 31;
      collision = false;
      botsigreached = false;
      signalcolor = "cyan";
      const delay = Math.random() * 45000;
      setTimeout(() => {
        if (!botActive) bn29();
      }, delay);
    }
  }

   
signalcolor = "cyan";
if (!botNode._started) {
  botNode();
}

// function botNode() {
//   botNodeSending = true;
//   bncounter = 29;
//   let x = Math.random();
//   setTimeout(() => {
//     bn29();
//   }, x * 40000);
// }

// Ensure we don't start botNode repeatedly
