// AMADEUS HOMEPAGE AMBIENT TEXT CHANGES

let font = [];
var msg = "amadeus"; // text to write
let kern = 50;
let pt = 80;
let sty = ['normal', 'bold', 'italic'];
let c = 0;
let click = 0;

function preload() {
  font[1] = 'Bodoni Moda';
  font[2] = 'Inter';
  font[3] = 'Libre Bodoni';
  font[4] = 'Montserrat';
  font[5] = 'Playfair Display';
  font[6] = 'Quicksand';
}
function setup() {
  frameRate(2);
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
}

function draw() {
  background(255);
  //splits the word into an array of letters
  textSize(40);
  let letters = split(msg, '');
  fill(0);
  for (let i = 0; i < letters.length; i++) {
    push();
    {
      textSize(pt);
      textFont(font[int(random(1, 6))]);
      textStyle(sty[int(random(1, 3))]);
      let up = int(random(0, 2));
      if (up % 2 == 1) {
        text(letters[i].toUpperCase(), windowWidth / 2 + i * kern - (letters.length * (kern / 2)), windowHeight / 2);
      }
      else {
        text(letters[i].toLowerCase(), windowWidth / 2 + i * kern - (letters.length * (kern / 2)), windowHeight / 2);
      }
    }
    pop();
  }
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    if (msg.length > 0) {
      msg = msg.substring(0, msg.length - 1);
      letters = msg.split("");
    }
  }
}

function keyTyped() {
  if (keyCode >= 32) {
    msg += key;
    letters = msg.split("");
  }
}