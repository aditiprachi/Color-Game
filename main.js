var num = 6
var colors = randomColors(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var head = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var easy = document.querySelector('#easybtn');
var hard = document.querySelector('#hardbtn');


easy.addEventListener('click' , function(){
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = ' ';
  head.style.background = 'steelblue';
  hard.classList.remove('selected');
  easy.classList.add('selected');
  num = 3;
  colors = randomColors(num );
  pickedColor = pickColor();
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
})
hard.addEventListener('click' , function(){
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = ' ';
  head.style.background = 'steelblue';
  easy.classList.remove('selected');
  hard.classList.add('selected');
  num = 6;
  colors = randomColors(num);
  pickedColor = pickColor();
  for(var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = 'block';
  }
})
resetButton.addEventListener("click", function(){
  resetButton.textContent = 'New Colors';
  colors = randomColors(num);
  pickedColor = pickColor();
  messageDisplay.textContent = ' ';
  head.style.background = 'steelblue';
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.background;
      if (clickedColor === pickedColor){
        messageDisplay.textContent = 'Correct';
        changeColors(clickedColor);
        head.style.background = clickedColor;
        resetButton.textContent = "Play Again?";
      }else{
        this.style.background = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
})

pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor){
      messageDisplay.textContent = 'Correct';
      changeColors(clickedColor);
      head.style.background = clickedColor;
      resetButton.textContent = "Play Again?";
    }else{
      this.style.background = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}
function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function randomColors(num){
  var arr = [];
  for( var i = 0; i < num; i++){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    arr[i] = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  return arr;
}
