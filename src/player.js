function Player(top, left, timeBetweenSteps){
  if(!window.player){
  // debugger
    Dancer.apply(this, [$('body').height()*0.9,$('body').width()/2]);
    this.height = 100;
    this.width = 100;
    this.$node.attr('id','player');
    this.timeBetweenSteps = 100;
    this.$node.off('mouseover', this.explode);
    this.$node.on('click', this.shootBullet);
    window.player = this;
  }
}

Player.prototype = Object.create(Dancer.prototype);
Player.prototype.constructor = Player;
Player.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // if(this.killed) {
  //   window.pixelMoveDistance = 0;
  //   window.player = null;
  // }
};

Player.prototype.shootBullet = function(){
  new Bullet($(this.$node).position().top,$(this.$node).position().left);
};

// Player.prototype.moveLeft = function(){
//   this.setPosition(this.top, this.left + 50);
// };

// Player.prototype.moveRight = function(){
//   this.setPosition(this.top, this.left - 50);
// };

// Player.prototype.moveTop = function(){
//   this.setPosition(this.top + 50, this.left);
// };

// Player.prototype.moveDown = function(){
//   this.setPosition(this.top - 50, this.left);
// };

// movement controls: left = 37, up 38, right 39, down 40
// for event.which
// processor in document?
// processor = function(){
// if(event.which === 37){
//    this.moveLeft();
//  } etc
// }

// keyboard movement or have player follow the mouse at a certain speed?


