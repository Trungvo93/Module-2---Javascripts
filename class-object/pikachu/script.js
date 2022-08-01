/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += 20;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function () {
    this.left -= 20;
    console.log('ok: ' + this.left);
  }
  this.moveTop = function () {
    this.top -= 20;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function () {
    this.top += 20;
    console.log('ok: ' + this.left);
  }

}

var hero = new Hero('pikachu.png', 20, 30, 200);


let flag = 1;
function start() {
  if (flag == 1 && (hero.left < window.innerWidth - hero.size)) {
    hero.moveRight();
    if ((hero.left >= window.innerWidth - hero.size)) {
      flag = 2;
    }
  }
  if (flag == 2 && (hero.top < window.innerHeight - hero.size)) {
    hero.moveDown();
    if ((hero.top >= window.innerHeight - hero.size)) {
      flag = 3;
    }
  }
  if (flag == 3 && (hero.left > 30)) {
    hero.moveLeft();
    if (hero.left <= 30) {
      flag = 4;
    }
  }
  if (flag == 4 && (hero.top > 20)) {
    hero.moveTop();
    if (hero.top == 20) {
      flag = 1;
    }
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 10)
}

start();