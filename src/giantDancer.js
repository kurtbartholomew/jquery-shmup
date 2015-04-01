//dancer template
function GiantDancer (top, left, timeBetweenSteps){
  // debugger
  Dancer.apply(this, arguments);

}

GiantDancer.prototype = Object.create(Dancer.prototype);
GiantDancer.prototype.constructor = GiantDancer;
GiantDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // movement rate

  this.$node.css({top:this.yPos+10});

  // Add special dance moves below

  this.$node.toggleClass("giantdancer");
};
