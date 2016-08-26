var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');

var speed = 1/16/1000;
var x = 0;
var y = 0;

var input =
{
  up: false,
  down: false,
  left: false,
  right: false
}

window.onkeydown = function(event)
{
  switch(event.keyCode)
  {
    //Up
    case 38:
    case 87:
      event.preventDefault();
      input.up = true;
      break;

      //Left
    case 37:
    case 65:
      event.preventDefault();
      input.left = true;
      break;

      //Right
    case 38:
    case 68:
      event.preventDefault();
      input.right = true;
      break;

      //Down
    case 40:
    case 83:
      event.preventDefault();
      input.down = true;
      break;
  }
}

window.onkeyup = function(event)
{
  switch(event.keyCode)
  {
    //Up
    case 38:
    case 87:
      event.preventDefault();
      input.up = false;
      break;

      //Left
    case 37:
    case 65:
      event.preventDefault();
      input.left = false;
      break;

      //Right
    case 38:
    case 68:
      event.preventDefault();
      input.right = false;
      break;

      //Down
    case 40:
    case 83:
      event.preventDefault();
      input.down = false;
      break;
  }
}

function loop()
{
  ctx.fillRect(x,y,8,8);
  ctx.fillStyle = 'green';
  if(input.up) y -= 1;
  if(input.left) x -= 1;
  if(input.right) x += 1;
  if(input.down) y += 1;
  setTimeout(loop, speed);
}
loop();
