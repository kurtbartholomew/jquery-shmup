// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // this.top = top;
  // this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.$node.on('mouseover', this.explode);

  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
//
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.explode = function(){
  var top = $(this).css('top');
  var left = $(this).css('left');
  var topnum = +top.slice(0, top.length - 3) - 100;
  topnum = topnum+'px';
  var leftnum = +left.slice(0, left.length - 3) - 100;
  leftnum = leftnum+'px';
  $(this).replaceWith('<img id="explode" style="top:'+topnum+'; left:'+leftnum+';position:absolute;" src=\'explode.gif\'></img>');
  setTimeout(function(){
    $('#explode').remove();
  },800);
};
