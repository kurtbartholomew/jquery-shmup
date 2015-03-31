function Bullet(initialTop,initialLeft,speed){
  console.log("hello");
  this.speed = speed || 10;
  this.$node = $('<div class="bullet"></div>');
  window.bullets.push(this);
  $('body').append(this.$node);
  $(this.$node).css({top:initialTop,left:initialLeft+20+'px'});

  this.bulletTrajectory = setInterval(this.fly.bind(this), this.speed);

}

Bullet.prototype.fly = function(){
  //console.log(this.$node);
  var currentPos = $(this.$node).position().top;
  $(this.$node).css({top: (currentPos - 15) + 'px'});
  if(+currentPos < 0) {
    clearInterval(this.bulletTrajectory);
    $(this.$node).remove();
  }
};
