function BlinkyDancer(top, left, timeBetweenSteps){
  // debugger
  Dancer.apply(this, arguments);

}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // movement rate
  this.$node.css({top:this.yPos+10});
  //this.$node.toggle();
};
