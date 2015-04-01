//dancer template
function Fredstar (top, left, timeBetweenSteps){
  // debugger
  Dancer.apply(this, [-400,($('body').width()/2),50]);

  this.$node.off('mouseover', this.explode);
  this.$node.attr('id','fredstar');
  this.$node.html('<audio autoplay src="march.mp3"></audio>');
  this.movementRate = 5;
  window.fred = this;
  this.durability = 10;
}

Fredstar.prototype = Object.create(Dancer.prototype);
Fredstar.prototype.constructor = Fredstar;
Fredstar.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  if(this.yPos < $('body').width()*0.1) {
    this.$node.css({top:this.yPos+2});
  }
  // movement rate
  if(this.xPos > $('body').width()-200 || this.xPos < 0){
    this.movementRate = -this.movementRate;
  }
  this.$node.css({left:this.xPos+this.movementRate});

  // Add special dance moves below

};
