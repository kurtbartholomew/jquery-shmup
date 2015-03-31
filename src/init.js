$(document).ready(function(){
  window.dancers = [];
  window.bullets = [];
  window.player;

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
      Math.random() * $('body').height(),
      Math.random() * $('body').width(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event){
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].setPosition(i * 50, 0);
    }
  });

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

function bgscroll(){

  // 1 pixel row at a time
  current += 1;
  //console.log('Hello!');

  // move the background with backgrond-position css properties
  $('div.scroll').css('backgroundPosition', (direction === 'h') ?
                          current+'px 0' : '0 ' + current+'px');
}

//Calls the scrolling function repeatedly
setInterval(bgscroll, scrollSpeed);
