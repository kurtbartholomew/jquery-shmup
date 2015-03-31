function Bullet(speed){
  this.speed = speed || 5;
  this.$node = $('<div class="bullet"></div>');
  window.bullet.push(this);
  $('body').append(this.$node);

  setInterval(function(){
    var currentPos = $(this).position().top;
    $(this).css({top: (currentPos - 15) + 'px'});

  }.bind(this), this.speed);

}
