$(document).ready(function(){
  window.dancers = [];
  window.bullets = [];
  window.player;
  window.fred;

  $('.addDancerButton').on('click', function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the 'data-dancer-maker-function-name' attribute of a
     * class='addDancerButton' DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      // Math.random()*0.333333 * $('body').height() + ($('body').height()*0.5),
      // Math.random()* 0.9 * $('body').width() + ($('body').height()*0.1),
      // Math.random() * 1000
      -40,
      Math.random() * $('body').width(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event){
    for(var i = 1; i < window.dancers.length; i++){
      if(window.dancers[i] !== window.fred){
        window.dancers[i].setPosition(i * 50, 0);
      }
    }
  });

  $('#start').on('click', function(){ $(this).hide(); });

  $('body').on('keydown',function(event){
    if(window.player) {
      var jQplayer = $('#player');
      var currentTop = jQplayer.position().top;
      var currentLeft = jQplayer.position().left;
      // Move down by 50px

      if(event.keyCode === 40 && currentTop < $('body').height()-window.player.height){
        jQplayer.css({top:currentTop+10+'px'});
      }
      if(event.keyCode === 38 && currentTop > window.player.height){
        jQplayer.css({top:currentTop-10+'px'});
      }
      if(event.keyCode === 39 && currentLeft < $('body').width() - window.player.width){
        jQplayer.css({left:currentLeft+10+'px'});
      }
      if(event.keyCode === 37 && currentLeft > (window.player.width/4)){
        jQplayer.css({left:currentLeft-10+'px'});
      }
      if(event.keyCode === 32){
        window.player.shootBullet();
      }
    }
  });
});

var scrollSpeed = 3;

// set the default position
var current = 0;

// set the direction
var direction = 'v';
var pixelMoveDistance = 1;

function bgscroll(){

  // 1 pixel row at a time
  current += pixelMoveDistance;
  //console.log('Hello!');

  // move the background with backgrond-position css properties
  $('div.scroll').css('backgroundPosition', (direction === 'h') ?
                          current+'px 0' : '0 ' + current+'px');
}

//Calls the scrolling function repeatedly
setInterval(bgscroll, scrollSpeed);

//Create interval function to check for collisions

function checkCollision(){
  var xDifference;
  var yDifference;
  for(var i = 0; i < window.bullets.length; i++){
    for(var n = 0; n < window.dancers.length; n++){
      xDifference = $(window.bullets[i].$node).position().left - $(window.dancers[n].$node).position().left;
      yDifference = $(window.bullets[i].$node).position().top - $(window.dancers[n].$node).position().top;
      if(Math.abs(xDifference) < 20 && Math.abs(yDifference) < 20){
        window.bullets[i].used = true;
        window.dancers[n].killed = true;
        if(window.dancers[n] === window.fred && window.fred.durability > 0) {
          window.fred.killed = false;
          window.fred.durability--;
          console.log("Fred has been wounded");
        }
        break;
      }
    }
  }
  if(window.player){
    for(var s = 1; s < window.dancers.length; s++){
      xDifference = window.player.xPos - window.dancers[s].$node.position().left;
      yDifference = window.player.yPos - window.dancers[s].$node.position().top;
      if(Math.abs(xDifference) < 40 && Math.abs(yDifference) < 20){
        console.log("Player should be dead");
        window.player.killed = true;
        break;
      }
    }
  }
}

setInterval(checkCollision, 10);







